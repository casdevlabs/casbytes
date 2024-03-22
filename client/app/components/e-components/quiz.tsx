import { Link } from "@remix-run/react";

import { CircleOff } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";

export function Quiz({ quiz }: { quiz: any }) {
  return (
    <Table className="text-lg table-auto">
      <TableHeader className="font-bold capitalize bg-slate-50">
        <TableRow>
          <TableHead className="px-4 py-2">Quiz</TableHead>
          <TableHead className="px-4 py-2">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white text-md drop-shadow-md rounded-md border border-blue-500">
        <TableRow>
          <TableCell className="px-4 py-2">
            <Button
              className="p-0 capitalize text-lg text-blue-600"
              variant="link"
              asChild
            >
              <Link to="/lesson/quiz/1" className="cursor-pointer">
                forEach HOF quiz
              </Link>
            </Button>
          </TableCell>
          <TableCell className="px-4 py-2 mx-auto">
            <CircleOff size={20} className="text-slate-600" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
