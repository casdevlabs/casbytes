import React from "react";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import {
  UserCard,
  SubscriptionCard,
  Courses,
  Statistics,
  Notification,
} from "~/components/dashboard";

export default function Dashboard() {
  return (
    <Container className="lg:p-8 max-w-6xl">
      <PageTitle title="Dashboard" className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-4 rounded-md drop-shadow-md">
        <div className="flex gap-10 flex-col">
          <UserCard />
          <div>
            <Courses />
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <Notification />
          <div>
            <Statistics />
          </div>
          <SubscriptionCard />
        </div>
      </div>
    </Container>
  );
}
