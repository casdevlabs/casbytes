import React from "react";
import { Link } from "@remix-run/react";
import { CheckCheck, Lock } from "lucide-react";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";

export function ModuleCard({ i }: any) {
  return (
    <li className="flex flex-col md:flex-row rounded-md bg-slate-300/50">
      <div className="flex flex-col items-start gap-4 bg-gradient-to-r from-blue-600 to-purple-500 py-2 px-4 md:p-6 rounded-t-md md:rounded-l-md">
        <h1 className="text-xl hidden md:block text-slate-300">Course</h1>
        <p className="text-slate-100 text-lg md:text-md">JavaScript</p>
      </div>
      <div className="flex flex-1 justify-between rounded-r-md py-2 px-4 md:p-6">
        <div className="flex flex-col justify-between">
          <p className="text-lg text-slate-600">Module {i + 1}</p>
          <h1 className="text-xl mb-2">Functions</h1>
        </div>
        <div className="flex flex-col justify-between items-center">
          <Progress value={i < 2 ? 34 : 0} />
          <Button asChild className="bg-zinc-600">
            <Link to={`/module/1`}>
              {i < 2 ? (
                <>
                  <CheckCheck className="mr-4" /> Completed
                </>
              ) : (
                <>
                  <Lock className="mr-4" /> Start
                </>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </li>
  );
}
