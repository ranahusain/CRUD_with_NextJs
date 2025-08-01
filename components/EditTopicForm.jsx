"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/api/topics/${id}`, {
        newTitle,
        newDescription,
      });

      if (res.status === 201 || res.status === 200) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-slate-500 px-8 py-2 "
          placeholder="Topic Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          className="border border-slate-500 px-8 py-2 "
          placeholder="Topic Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button className="bg-green-600 text-white py-3 px-6 w-fit font-bold">
          Update Topic
        </button>
      </form>
    </>
  );
};

export default EditTopicForm;
