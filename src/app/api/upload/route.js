import { writeFile } from "fs";
import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import { get } from "http";

export function GET() {
  const data = users;

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {

    let data = await getImageData(req);

  // const path = `./public/${file.name}`;
  console.log(data.name);

  return NextResponse.json(req);
}

async function getImageData(req){
  let data = new FormData();
  data = await req.formData();
  let file = data.get("file");
  return file;
}
