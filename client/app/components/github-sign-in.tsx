import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export function GitHubSignIn() {
  return (
    <Button
      type="submit"
      className="uppercase bg-zinc-600 hover:bg-zinc-500"
      aria-label="continue with github"
    >
      <FaGithub className="mr-2 h-6 w-6" /> continue with github
    </Button>
  );
}
