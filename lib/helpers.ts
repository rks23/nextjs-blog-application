import primsa from "@/prisma"

export const connectToDb = async () => {
  try {
    await primsa.$connect();
  } catch (error: any) {
    throw new Error(error);
  }
}
