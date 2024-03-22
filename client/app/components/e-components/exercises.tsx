import { Link } from "@remix-run/react";
import { CheckCircle, CircleDashed, CircleOff } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

export function Exercises() {
  return (
    <Table className="text-lg">
      <TableHeader className="font-bold capitalize bg-slate-50">
        <TableRow>
          <TableHead className="px-4 py-2">exercises</TableHead>
          <TableHead className="px-4 py-2">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white text-md drop-shadow-md rounded-md border border-blue-500">
        {courses.length > 0 ? (
          courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="px-4 py-2">
                <Button
                  variant="link"
                  className="text-blue-600 text-md capitalize p-0"
                >
                  <Link to={`/lesson/${course.id}/exercise/1`}>
                    {course.title}
                  </Link>
                </Button>
              </TableCell>

              <TableCell className="px-4 py-2">
                {course.status === "completed" ? (
                  <CheckCircle size={20} className="text-green-600" />
                ) : course.status === "started" ? (
                  <CircleDashed size={20} className="text-blue-600" />
                ) : (
                  <CircleOff size={20} className="text-slate-600" />
                )}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell className="px-4 py-8" colSpan={3}>
              <p className="text-center text-xl font-bold">
                No courses available at the moment.
              </p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

const courses = [
  {
    id: "1",
    title: "introduction to software engineering",
    curriculum: "core",
    status: "completed",
  },
  {
    id: "2",
    title: "low level programming",
    curriculum: "core",
    status: "started",
  },
  {
    id: "3",
    title: "high level programming",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "4",
    title: "data structures and algorithms",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "5",
    title: "devops",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "6",
    title: "system design",
    curriculum: "advanced",
    status: "not-started",
  },
];
