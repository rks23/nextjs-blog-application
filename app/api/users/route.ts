import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

export const GET = async () => {
  try {
    await connectToDb();
    const users = await primsa.user.findMany();
    return generateSuccessMessage({ message: "success", users }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
