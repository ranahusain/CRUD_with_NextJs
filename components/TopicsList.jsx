import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", //because everytime we hit this url we want to get the updated data
    });

    if (!res.ok) {
      throw new Error("Failded to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics : ", error);
  }
};

const TopicsList = async () => {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id}
          className="P-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{topic.title}</h2>
            <div>{topic.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn />
            <Link href={`/editTopic/${topic._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
