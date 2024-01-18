import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

export const GET = async ({ params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await connectToDb();
    const blogs = await primsa.blog.findFirst({
      where: { id },
    });
    return generateSuccessMessage({ message: "success", blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    const { title, decription } = await req.json();

    if (!title || !decription) {
      return generateErrorMessage({ message: "Invalid data" }, 422);
    }

    await connectToDb();
    const blogs = await primsa.blog.update({
      where: { id },
      data: {
        title,
        decription,
      },
    });
    return generateSuccessMessage({ message: "success", blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};

export const DELETE = async ({ params }: { params: { id: string } }) => {
  try {
    const id = params.id;
    await connectToDb();
    const blogs = await primsa.blog.delete({
      where: { id },
    });
    return generateSuccessMessage({ message: "success", blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
