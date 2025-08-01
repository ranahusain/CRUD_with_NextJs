import React from "react";

const page = () => {
  return (
    <>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          className="border border-slate-500 px-8 py-2 "
          placeholder="Topic Title"
        />
        <input
          type="text"
          className="border border-slate-500 px-8 py-2 "
          placeholder="Topic Description"
        />
        <button className="bg-green-600 text-white py-3 px-6 w-fit" font-bold>
          {" "}
          Add Topic
        </button>
      </form>
    </>
  );
};

export default page;
