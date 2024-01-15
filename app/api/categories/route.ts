import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

export const GET = async () => {
  try {
    await connectToDb();
    const categories = await primsa.category.findMany();
    return generateSuccessMessage({ message: "success", categories }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    const { name } = await req.json();
    await connectToDb();
    const category = await primsa.category.create({
      data: {
        name,
      },
    });
    return generateSuccessMessage({ message: "success", category }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
