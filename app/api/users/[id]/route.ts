import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const id = params.id;
    await connectToDb();
    const user = await primsa.user.findFirst({
      where: { id },
      include: { _count: true, blogs: true },
    });
    return generateSuccessMessage({ message: "success", user }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
