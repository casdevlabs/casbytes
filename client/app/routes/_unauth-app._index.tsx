import type { MetaFunction } from "@remix-run/node";
import { Home } from "~/components/home";

export const meta: MetaFunction = () => {
  return [
    { title: "CASBytes" },
    { name: "description", content: "An onile school for software engineers." },
  ];
};

export default function Index() {
  return <Home />;
}
