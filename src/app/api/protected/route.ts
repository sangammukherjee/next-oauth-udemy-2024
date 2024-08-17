import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth((req) => {
  if (req.auth) {
    return NextResponse.json({
      success: true,
      data: "This data is protected.",
    });
  }

  return NextResponse.json({
    success: false,
    data: "Not authenticated",
  });
}) as any;
