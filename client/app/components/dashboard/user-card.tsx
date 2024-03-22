import React from "react";
import wcb from "~/assets/welcome-back.webp";

export function UserCard() {
  return (
    <article className="bg-slate-300/50 rounded-md p-8 flex flex-col justify-center relative w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Hi Chris!</h1>
        <img
          src={wcb}
          width={200}
          alt="Welcome back"
          className="absolute right-2 lg:right-6"
        />
      </div>
      <p>It's good to see you again.</p>
    </article>
  );
}
