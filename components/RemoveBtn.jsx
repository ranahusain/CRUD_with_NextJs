"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/navigation";
const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      await axios.delete(`http://localhost:3000/api/topics/${id}`);
      router.refresh();
    }
  };
  return (
    <button className="text-red-400" onClick={removeTopic}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
