import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Thiranat Kakanmee",
    studentId: "650610762",
  });
};
