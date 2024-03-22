import React from "react";
import { CourseTitle } from "../course-title";
import { Status } from "./status";
import { CheckCircle, CircleDashed, Lock } from "lucide-react";
import { Button } from "../ui/button";

export function ModuleSideContent() {
  return (
    <>
      <CourseTitle title="Functions" />
      <Status />
      <ul className="grid grid-cols-1 gap-4 p-2 mb-4">
        {Array.from({ length: 25 }).map((_, i) => (
          <Button
            variant="secondary"
            className="flex justify-start bg-slate-300 hover:bg-slate-300/50 text-black"
            asChild
          >
            <li key={i} className="flex items-center text-lg cursor-pointer">
              {i < 2 ? (
                <CheckCircle className="mr-4 text-blue-600" />
              ) : (
                <Lock className="mr-4" />
              )}{" "}
              function prototypes
            </li>
          </Button>
        ))}
      </ul>
      <CourseTitle title="forEach HOF" />
      <div className="flex flex-col gap-2 mb-4">
        <h2 className="font-bold underline underline-offset-4 text-lg pl-2">
          Quiz
        </h2>
        <div className="flex gap-2 pl-2 border-l-4 border-blue-600">
          <CircleDashed className="mr-2 text-blue-600" /> Available
        </div>
      </div>
      <h2 className="font-bold underline underline-offset-4 pl-2 text-lg">
        Exercises.
      </h2>
      <Status />
    </>
  );
}
