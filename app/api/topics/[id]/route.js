import connectMongoDB from "@/libs/dbConnect";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function DELETE(_, { params }) {
  await connectMongoDB();
  const { id } = params;
  try {
    const deletedTopic = await Topic.findByIdAndDelete(id);

    if (!deletedTopic) {
      return NextResponse.json({ error: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  const updated = await Topic.findByIdAndUpdate(id, { title, description });

  if (!updated) {
    return NextResponse.json({ error: "Topic not found" }, { status: 404 });
  }

  return NextResponse.json(
    { message: "Topic Updated", topic: updated },
    { status: 200 }
  );
}
