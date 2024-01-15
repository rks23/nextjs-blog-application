import primsa from "@/prisma";
import { NextResponse } from "next/server";

export const connectToDb = async () => {
  try {
    await primsa.$connect();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const generateSuccessMessage = (data: any, status: number) => {
  return NextResponse.json(
    { message: "Success", ...data },
    { status, statusText: "Ok" }
  );
};

export const generateErrorMessage = (data: any, status: number) => {
  return NextResponse.json(
    { message: "Error", ...data },
    { status, statusText: "ERROR" }
  );
};
