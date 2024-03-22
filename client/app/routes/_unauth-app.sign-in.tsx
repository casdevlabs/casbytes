import { Form, Link } from "@remix-run/react";
import { Container } from "~/components/container";
import { FaGithub } from "react-icons/fa";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { GitHubSignIn } from "~/components/github-sign-in";

export default function SignInRoute() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover py-20 mx-auto min-h-full">
      <Form
        className="flex flex-col gap-6 p-8 rounded-md max-w-sm mx-auto drop-shadow-xl bg-sky-600/20"
        aria-label="sign in form"
      >
        <h1 className="text-3xl text-center mb-6">Sign In</h1>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />

        <div className="flex flex-wrap text-sm justify-between">
          <Checkbox id="remember-me" name="remember-me" label="Remember me." />
          <span className="text-blue-600">
            <Link to="/forgot-password">Forgot password ?</Link>
          </span>
        </div>

        <Button
          type="submit"
          className="uppercase bg-zinc-600 hover:bg-zinc-500"
          aria-label="sign in"
        >
          sign in
        </Button>
        <p className="mx-auto">OR</p>

        <GitHubSignIn />

        <div className="text-center">
          Don't have an account?{" "}
          <Button
            aria-label="sign up"
            variant="ghost"
            className="!capitalize !padding-0 text-blue-700"
            asChild
          >
            <Link to="/sign-up">sign up</Link>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
