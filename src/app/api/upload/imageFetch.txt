import { writeFile } from "fs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.FormData();
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({ message: "no image found ", success: false });
  }
  const byteData = await file.arrayBuffer();
  const buffer = Buffer.from(byteData);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);
  return NextResponse.json({ message: "file Uploaded", success: true });
}
