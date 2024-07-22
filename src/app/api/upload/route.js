import { writeFile } from "fs/promises";
import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const file = await getImageData(req);
  console.log(file);

  
  try {
    const blob = new Blob([file], { type: file.type });
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const path = `./public/${file.name}`;

    await writeFile(path, buffer);

    return NextResponse.json({
      result: "File Created!",
      filePath: `/${file.name}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ err: `${error} has occured!` }, { status: 500 });
  }
}

async function getImageData(req) {
  let data = new FormData();

  data = await req.formData();
  return data.get("file");
}

export function GET() {
  const data = users;

  return NextResponse.json(data, { status: 200 });
}
