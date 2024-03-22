import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { ChartFilter } from "./chart-filter";
import { Chart } from "..";
import { MyCourses } from "./my-courses";

export function Statistics() {
  const [tab, setTab] = React.useState("chart");

  React.useEffect(() => {
    setTab("chart");
  }, []);

  return (
    <Tabs defaultValue="chart">
      <TabsList className="w-full flex bg-inherit justify-start mb-6">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div>
            <TabsTrigger
              onClick={() => setTab("chart")}
              value="chart"
              className="text-xl"
            >
              Learning hours
            </TabsTrigger>
            <TabsTrigger
              onClick={() => setTab("my-courses")}
              value="my-courses"
              className="text-xl"
            >
              My courses
            </TabsTrigger>
          </div>
          {tab === "chart" ? <ChartFilter /> : null}
        </div>
      </TabsList>
      <TabsContent value="chart" className="w-full">
        <Chart />
      </TabsContent>
      <TabsContent value="my-courses" className="max-h-full">
        <MyCourses />
      </TabsContent>
    </Tabs>
  );
}
