import { Outlet } from "@remix-run/react";
import { Toaster } from "../ui/toaster";

export function RootLayout() {
  return (
    <>
      <Outlet />
      <Toaster />
    </>
  );
}
