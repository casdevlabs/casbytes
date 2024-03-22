import { Form } from "@remix-run/react";
import { cn } from "~/libs/shadcn";
import { Button } from "./ui/button";

export function SignOutButton({
  className,
  isOpen,
  icon,
}: {
  className?: string;
  isOpen?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Form method="post" action="/sign-out" data-testid="sign-out-form">
      <Button
        type="submit"
        variant="link"
        className={cn(
          "flex p-4 self-start gap-4 duration-300 text-lg text-slate-200 hover:text-white w-full",
          className,
        )}
      >
        {icon ? icon : null} {isOpen && "Sign Out"}
      </Button>
    </Form>
  );
}
