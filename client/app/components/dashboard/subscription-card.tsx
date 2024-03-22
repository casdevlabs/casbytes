import React from "react";
import lightbulb from "~/assets/light-bulb.webp";
import { Button } from "../ui/button";

export function SubscriptionCard() {
  const [isSubscribed, setIsSubscribed] = React.useState(true);
  return (
    <div className="flex justify-between gap-2 bg-slate-300/50 rounded-md  p-4">
      <div className="flex flex-col gap-2">
        {isSubscribed ? (
          <div>
            <h2 className="font-black text-[1.3rem] mb-2">Welcome back!</h2>
            <p>
              You have access to all courses. <br /> Happy learning!
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-black text-[1.3rem]">Learn even more!</h2>
            <p>
              Subscribe for <span className="text-xl font-bold">$15</span>
              /month to unlock all courses.
            </p>
            <Button size="lg" className="text-lg self-start">
              Go Premium
            </Button>
          </>
        )}
      </div>
      <img
        src={lightbulb}
        alt="Light Bulb"
        width={150}
        height={100}
        className="rounded-md"
      />
    </div>
  );
}
