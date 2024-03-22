import { Form, Link } from "@remix-run/react";
import { Container } from "~/components/container";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { GitHubSignIn } from "~/components/github-sign-in";

export default function SignUpRoute() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover py-20 mx-auto min-h-full">
      <Form
        className="flex flex-col gap-6 p-8 rounded-md max-w-xl mx-auto drop-shadow-xl bg-sky-600/20"
        aria-label="sign up form"
      >
        <h1 className="text-3xl text-center mb-6">Sign Up</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <Input
            id="first-name"
            name="first-name"
            placeholder="First name"
            required
          />
          <Input
            id="last-name"
            name="last-name"
            placeholder="Last name"
            required
          />
        </div>

        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
        />
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <Input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm password"
            required
          />
        </div>
        <Checkbox
          id="agreeToTerms"
          name="agreeToTerms"
          label={
            <>
              I agree to the {""}
              <Link to="privacy-policy" className="text-blue-600">
                Privacy policy
              </Link>{" "}
              and {""}
              <Link to="terms-of-use" className="text-blue-600">
                Terms of use
              </Link>
            </>
          }
        />
        <Button
          type="submit"
          className="uppercase bg-zinc-600 hover:bg-zinc-500"
          aria-label="sign up"
        >
          sign up
        </Button>
        <p className="mx-auto">OR</p>

        <GitHubSignIn />

        <div className="text-center">
          Already have an account?{" "}
          <Button
            aria-label="sign in"
            variant="ghost"
            className="!capitalize !padding-0 text-blue-700"
            asChild
          >
            <Link to="/sign-in">sign in</Link>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
