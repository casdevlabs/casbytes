import { Link } from "@remix-run/react";
import { cn } from "~/libs/shadcn";
import { Container } from "~/components/container";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function Subscription() {
  return (
    <Container id="subscription">
      <div className="mx-auto bg-blue-200 rounded-md py-20">
        <div className="max-w-3xl md:py-12 mx-auto">
          <h1 className="text-center text-2xl mb-16">
            Start our introductory courses for free. When you are prepared and
            ready to move forward, it's just a step away.
            <p className="text-zinc-500 text-sm">Cancel anytime</p>
          </h1>
          <div className="flex flex-col md:flex-row w-full gap-6 items-center justify-center rounded-md">
            {paymentOptions.map((option, index) => (
              <Card
                key={`item-${index}`}
                className={cn(
                  "drop-shadow-md",
                  index < 1
                    ? "bg-blue-300/50 text-blue-700"
                    : "bg-zinc-200 text-zinc-700",
                )}
              >
                <CardContent className="p-0">
                  <div className="flex gap-6 p-6 items-center justify-between">
                    <span className="text-3xl capitalize">{option.season}</span>
                    <span>
                      billed {option.season}ly (${option.price})
                    </span>
                  </div>
                  <div
                    className={cn(
                      "text-white rounded-b-lg p-6 flex items-start",
                      index < 1 ? "bg-blue-600" : "bg-zinc-600",
                    )}
                  >
                    <span
                      className={cn(
                        "text-4xl font-black",
                        index < 1 ? "text-zinc-300" : "text-slate-200",
                      )}
                    >
                      ${option.price}{" "}
                    </span>
                    <span className="text-xl text-slate-100">
                      /{option.season}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            className="bg-blue-600 text-white mx-auto block mt-12"
            aria-label="learn more about our subscription"
          >
            <Link to="/sign-up">Learn more...</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
}

const paymentOptions = [
  { season: "month", price: 49 },
  { season: "year", price: 149 },
];
