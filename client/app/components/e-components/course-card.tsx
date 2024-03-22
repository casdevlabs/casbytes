import React from "react";
import jsLogo from "~/assets/js-logo.png";
import { Link } from "@remix-run/react";
import { CheckCheck, Plus, Star } from "lucide-react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { PersonIcon } from "@radix-ui/react-icons";

export function CourseCard({ i, course }: { i: number; course: any }) {
  return (
    <li className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center bg-slate-300/50 rounded-md p-2 relative overflow-x-auto">
      <div className="absolute rounded-tl rounded-br text-slate-50 text-xs p-1 bg-blue-600 top-0 left-0">
        {i + 1}
      </div>
      <div className="flex gap-2">
        <img
          src={jsLogo}
          alt={course.title}
          width={80}
          height={70}
          className="hidden sm:block"
        />
        <div className="flex flex-col text-left">
          <h2 className="font-black text-lg capitalize ml-4 sm:ml-0 mb-2">
            {course.title}
          </h2>
          <div className="text-xs flex items-center text-blue-700">
            <PersonIcon className="mr-2 h-3 w-3" /> 2000.
          </div>
        </div>
      </div>
      {/* {course.rating ? (
        <Badge className="rounded-full p-1 bg-zinc-600 hover:bg-zinc-500">
          <Star className="mr-2 h-4 w-4" /> {course.rating}{" "}
        </Badge>
      ) : null} */}
      <div className="flex flex-col gap-4 items-center">
        <Progress value={i < 2 ? 34 : 0} />
        <Button asChild className="bg-zinc-600">
          <Link to={`/course/1`}>
            {i < 2 ? (
              <>
                <CheckCheck className="mr-4 h-4 w-4" /> Joined
              </>
            ) : (
              <>
                <Plus className="mr-4 h-4 w-4" /> Join
              </>
            )}
          </Link>
        </Button>
      </div>
    </li>
  );
}
