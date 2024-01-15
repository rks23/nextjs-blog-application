import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

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

export const POST = async (req: Request) => {
  try {
    const { title, decription, imageUrl, userId, categoryId } =
      await req.json();
    await connectToDb();
    const blog = await primsa.blog.create({
      data: {
        title,
        decription,
        imageUrl,
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
