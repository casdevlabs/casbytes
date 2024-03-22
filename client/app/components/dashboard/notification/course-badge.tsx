import React from "react";
import { Badge } from "~/components/ui/badge";

export function CourseBadge() {
  return (
    <Badge className="flex gap-4 bg-stone-600">
      <h2 className="font-black text-xl">3</h2>
      <p className="capitalize">total courses</p>
    </Badge>
  );
}
