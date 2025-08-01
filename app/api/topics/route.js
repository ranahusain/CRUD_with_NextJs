import connectMongoDB from "@/libs/dbConnect";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function POST(request) {
  await connectMongoDB();
  const { title, description } = await request.json();
  try {
    const newTopic = await Topic.create({ title, description });
    return NextResponse.json({ topic: newTopic }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET() {
  await connectMongoDB();

  try {
    const topics = await Topic.find().sort({ createdAt: -1 }); //get the latest first
    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}
