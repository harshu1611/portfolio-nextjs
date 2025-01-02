import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req:any, res:any) => {
  const formData = await req.formData();

  const file = formData.get("file");
  const fileNameNew= formData.get("fileName");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  try {
    await writeFile(
      path.join(process.cwd(), "public/images/" + fileNameNew),
      Uint8Array.from(buffer)
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};