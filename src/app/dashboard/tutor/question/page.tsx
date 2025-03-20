"use client";
import React, { useState } from "react";
import Chats from "./components/Chats";
import Replies from "./components/Replies";

const Page = () => {
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-start h-[calc(100vh-80px)]">
      <div
        className={`w-full md:w-auto ${showChat ? "block" : "hidden md:block"}`}
      >
        <Chats onChatSelect={() => setShowChat(false)} />
      </div>
      <div
        className={`w-full md:w-auto flex-grow ${
          !showChat ? "block" : "hidden md:block"
        }`}
      >
        <Replies onBackClick={() => setShowChat(true)} />
      </div>
    </div>
  );
};

export default Page;
