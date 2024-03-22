import { CheckCheck, Eye, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/libs/shadcn";

export function NotificationMenu() {
  return (
    <DropdownMenuContent className="p-4 w-72">
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <div className="flex flex-col rounded-md">
        {Array.from({ length: 5 }).map((_, i) => (
          <TooltipProvider>
            <div>
              <div
                className={cn(
                  "flex gap-4 p-2 justify-between items-center rounded-md bg-slate-50",
                  {
                    "bg-slate-200": i < 3,
                  },
                )}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <h1 className="text-sm text-blue-600 underline underline-offset-2 cursor-pointer">
                      some plenty heading
                    </h1>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle> Some plenty heading</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
                <div className="flex gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue-600"
                        disabled={i >= 3}
                      >
                        <CheckCheck size={15} />
                      </Button>
                    </TooltipTrigger>

                    {i < 3 ? (
                      <TooltipContent>
                        <p>Mark as read.</p>
                      </TooltipContent>
                    ) : null}
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500"
                      >
                        <Trash2 size={15} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete notification.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              {i <= 5 ? <DropdownMenuSeparator /> : null}
            </div>
          </TooltipProvider>
        ))}
      </div>
    </DropdownMenuContent>
  );
}
