import React from "react";
import jsLogo from "~/assets/js-logo.png";
import { Link } from "@remix-run/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Eye, PersonStandingIcon, Plus } from "lucide-react";
import { PersonIcon } from "@radix-ui/react-icons";

export function CourseCard({ i, course }: { i: number; course: any }) {
  return (
    <li className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center bg-slate-300/50 rounded-md p-2 relative">
      <div className="absolute rounded-tl rounded-br text-slate-50 text-xs p-1 bg-zinc-600 top-0 left-0">
        {i + 1}
      </div>
      <div className="flex gap-2">
        {/* <img src={jsLogo} alt={course.title} width={70} height={70} /> */}
        <div className="flex flex-col text-left">
          <h2 className="font-black capitalize ml-6 mb-2">{course.title}</h2>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="text-xs text-blue-700 flex items-center gap-2">
          <PersonIcon /> 700,000{" "}
        </div>
        <div className="flex justify-between gap-2 items-center ">
          <Button size="sm">
            <Link to={`/course/1`} className="flex items-center gap-2">
              {i <= 3 ? (
                <>
                  <Eye size={15} /> View
                </>
              ) : (
                <>
                  <Plus size={15} /> Join
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
