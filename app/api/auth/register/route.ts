import { connectToDb } from "@/lib/helpers";
import primsa from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
  }
  try {
    await connectToDb();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await primsa.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return NextResponse.json({
      message: "user successfully create",
      ...user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "server error",
        ...error,
      },
      { status: 500 }
    );
  } finally {
    await primsa.$disconnect();
  }
};
