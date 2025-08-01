"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("title and description are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/topics", {
        title,
        description,
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border border-slate-500 px-8 py-2 "
          placeholder="Topic Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-green-600 text-white py-3 px-6 w-fit font-bold">
          Add Topic
        </button>
      </form>
    </>
  );
};

export default page;
