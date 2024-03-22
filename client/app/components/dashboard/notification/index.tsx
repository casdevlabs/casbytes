import { NotificationMenuTrigger } from "./notification-menu-trigger";
import { NotificationMenu } from "./notification-menu";
import { CourseBadge } from "./course-badge";
import { DropdownMenu } from "~/components/ui/dropdown-menu";

export function Notification() {
  return (
    <div className="flex items-start justify-between gap-4 bg-slate-200 rounded-md p-2 relative">
      <div className="flex-1 flex flex-wrap gap-4">
        <CourseBadge />
        <CourseBadge />
        <CourseBadge />
      </div>
      <div className="absolute sm:static -top-1.5 -right-1.5">
        <DropdownMenu>
          <NotificationMenuTrigger />
          <NotificationMenu />
        </DropdownMenu>
      </div>
    </div>
  );
}
