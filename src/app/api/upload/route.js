import { promises } from "fs";
import { writeFile } from "fs/promises";

import { NextResponse } from "next/server";
import path from "path";

const dbPath = path.join(process.cwd() + "/src/app/recipe-data/db.json");
export async function POST(req) {
  const { image, name, description, url } = await getData(req);
  try {
    const blob = new Blob([image], { type: image.type });
    const arrayBuffer = await new Response(blob).arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const path = `./public/${image.name}`;

    await writeFile(path, buffer);
    await store({ name, description, filePath: `/${image.name}`, url });
    return NextResponse.json({
      result: "File Created!",
      filePath: `/${image.name}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ err: `${error} has occured!` }, { status: 500 });
  }
}

async function getData(req) {
  let data = new FormData();
  data = await req.formData();
  return {
    image: data.get("image"),
    name: data.get("name"),
    description: data.get("description"),
    url: data.get("url"),
  };
}

async function store(obj) {
  const dbFile = await promises.readFile(dbPath);
  const dbData = JSON.parse(dbFile);
  dbData.push(obj);
  const newData = JSON.stringify(dbData);
  await promises.writeFile(dbPath, newData);
}

export async function GET(req, res) {
  const dbFile = await promises.readFile(dbPath);
  const dbData = JSON.parse(dbFile);
  return NextResponse.json({ dbData });
}
