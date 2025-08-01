import React from "react";
import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";
const page = async ({ params }) => {
  const { id } = await params;

  const getTopicById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/topics/${id}`);
      return res.data;
    } catch (error) {
      console.log("Error fetching topic:", error);
    }
  };
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return (
    <div>
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
};

export default page;
