import { Bell } from "lucide-react";
import { DropdownMenuTrigger } from "~/components/ui/dropdown-menu";

export function NotificationMenuTrigger() {
  return (
    <DropdownMenuTrigger asChild>
      <div className="flex items-center gap-4 justify-end cursor-pointer relative">
        <Bell />
        <div className="bg-blue-600 text-white text-[7px] px-[4px] py-[1px] rounded-full absolute -top-1 right-0">
          5
        </div>
      </div>
    </DropdownMenuTrigger>
  );
}
