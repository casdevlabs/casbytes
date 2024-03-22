import { Link } from "@remix-run/react";
import { CheckCheck, CircleDotDashed } from "lucide-react";
import { Button } from "~/components/ui/button";

export function CourseCard({ i, course }: { i: number; course: any }) {
  return (
    <li className="flex flex-col sm:flex-row gap-2 justify-between sm:items-center bg-slate-300/50 rounded-md p-2 relative">
      <div className="absolute rounded-tl rounded-br text-slate-50 text-xs p-1 bg-stone-600 top-0 left-0">
        {i + 1}
      </div>
      <div className="flex gap-2">
        {/* <img src={jsLogo} alt={course.title} width={70} height={70} /> */}
        <div className="flex flex-col text-left">
          <h2 className="font-black capitalize ml-6 mb-2">{course.title}</h2>
        </div>
      </div>
      <div className="flex justify-between gap-6">
        <div className="text-xs ">
          {i % 2 === 0 ? (
            <div className="flex gap-2 items-center">
              <CheckCheck className="text-blue-700" />{" "}
              <span className="text-blue-700">completed</span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <CircleDotDashed className="text-zinc-500" />{" "}
              <span className="text-blue-700">in progress</span>
            </div>
          )}
        </div>
        <div className="flex justify-between gap-2 items-center ">
          <Button size="sm" asChild>
            <Link to={`/course/1`}>View</Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
