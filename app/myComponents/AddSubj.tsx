import React from "react";
import { Button } from "../../components/ui/button";

const AddNote = () => {
  return (
    <div className="">
      <Button className="text-md pr-20 py-4 bg-[#0f0f0f] hover:bg-gray-700 flex-row gap-2">
        <img src="/book2.svg" alt="book" className="w-6 h-6" />
        Add Subject +
      </Button>
    </div>
  );
};

export default AddNote;
