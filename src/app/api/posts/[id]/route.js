import { NextResponse } from "next/server";
import { getPost } from "@/lib/api";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const post = await getPost(id);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
