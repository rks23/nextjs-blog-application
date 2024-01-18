import {
  connectToDb,
  generateErrorMessage,
  generateSuccessMessage,
} from "@/lib/helpers";
import primsa from "@/prisma";

export const GET = async (req: Request) => {
  const searchedTitle = new URL(req.url).searchParams.get("title");
  try {
    await connectToDb();
    const blogs = await primsa.blog.findMany({
      where: {
        title: {
          contains: searchedTitle ?? "",
        },
      },
    });
    return generateSuccessMessage({ message: "success", blogs }, 200);
  } catch (error) {
    return generateErrorMessage({ message: "error", error }, 500);
  } finally {
    await primsa.$disconnect();
  }
};
