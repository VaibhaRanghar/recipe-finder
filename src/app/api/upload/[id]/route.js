import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(req,content) {
  const data = users.filter((user) => {return user.age === content.params.id});
  return NextResponse.json(data, { status: 200 });
}
