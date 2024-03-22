import React from "react";
import { Link } from "@remix-run/react";
import { CheckCircle, Lock } from "lucide-react";
import { Button } from "../ui/button";

export function TrophyCarbinet() {
  return (
    <ul className="flex flex-wrap gap-4 p-2 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Button
          variant="secondary"
          className="flex bg-slate-300 hover:bg-slate-300/50 text-black"
          asChild
        >
          <Link to={`/course/1`}>
            <li key={i} className="flex items-center text-lg">
              {i < 2 ? (
                <CheckCircle className="mr-4 text-blue-600" />
              ) : (
                <Lock className="mr-4" />
              )}
            </li>
          </Link>
        </Button>
      ))}
    </ul>
  );
}
