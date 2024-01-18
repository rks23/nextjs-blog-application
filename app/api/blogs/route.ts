import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";
import { UploadApiResponse, v2 } from "cloudinary";

export const GET = async () => {
  try {
    await connectToDb();
    const blogs = await primsa.blog.findMany();
    return generateSuccessMessage({ message: "success", blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};

async function uploadFile(file: Blob) {
  return new Promise<UploadApiResponse>(async (resolve, reject) => {
    const buffer = Buffer.from(await file.arrayBuffer());
    v2.uploader
      .upload_stream(
        {
          resource_type: "auto",
          folder: "nextjs-full-stack-blog",
        },
        (err, result) => {
          if (err) {
            console.log(err);
            reject(err);
          } else if (result) {
            return resolve(result);
          }
        }
      )
      .end(buffer);
  });
}

export const POST = async (req: Request) => {
  try {
    v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    const formData = await req.formData();
    const jsonString = formData.get("postData");
    const postData = JSON.parse(jsonString as string);
    const { title, decription, location, userId, categoryId } = postData;
    if (!title || !decription || !location || !userId || !categoryId) {
      return generateErrorMessage({ message: "Invalid data" }, 422);
    }
    const file = formData.get("image") as Blob | null;
    let uploadedFile: UploadApiResponse | null = null;
    if (file) {
      uploadedFile = await uploadFile(file as unknown as Blob);
    }

    await connectToDb();
    const user = await primsa.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      return generateErrorMessage({ message: "Invalid User" }, 401);
    }

    const category = await primsa.category.findFirst({
      where: {
        id: categoryId,
      },
    });
    if (!category) {
      return generateErrorMessage({ message: "Invalid Category" }, 422);
    }

    const blog = await primsa.blog.create({
      data: {
        title,
        decription,
        location,
        imageUrl: uploadedFile?.url ?? null,
        userId,
        categoryId,
      },
    });
    return generateSuccessMessage({ message: "success", blog }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
