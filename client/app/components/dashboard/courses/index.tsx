import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { SearchInput } from "./search-input";
import { CourseCard } from "..";

export function Courses() {
  return (
    <Tabs defaultValue="courses">
      <TabsList className="w-full flex bg-inherit justify-start mb-6">
        <TabsTrigger value="courses" className="text-xl">
          Courses
        </TabsTrigger>
        <TabsTrigger value="tracks" className="text-xl">
          Tracks
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tracks">
        <ul className="space-y-5">
          {courses.map((course, i) => (
            <CourseCard i={i} course={course} />
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="courses">
        <SearchInput />
        <ul className="space-y-5">
          {courses.map((course, i) => (
            <CourseCard i={i} course={course} />
          ))}
        </ul>
      </TabsContent>
    </Tabs>
  );
}

const tracks = [
  {
    id: "1",
    title: "Fundamentals",
    curriculum: "core",
    status: "completed",
  },
  {
    id: "2",
    title: "low level programming",
    curriculum: "core",
    status: "started",
  },
  {
    id: "3",
    title: "high level programming",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "4",
    title: "data structures and algorithms",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "11",
    title: "devops",
    curriculum: "advanced",
    status: "not-started",
  },
];

const courses = [
  {
    id: "1",
    title: "fullstack software engineering",
    curriculum: "core",
    status: "completed",
  },
  {
    id: "2",
    title: "frontend development",
    curriculum: "core",
    status: "started",
  },
  {
    id: "3",
    title: "backend development",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "4",
    title: "fullstack development",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "5",
    title: "devops",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "6",
    title: "system design",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "7",
    title: "mobile development with react native",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "8",
    title: "software design and architecture",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "9",
    title: "docker",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "10",
    title: "kubernetes",
    curriculum: "advanced",
    status: "not-started",
  },

  {
    id: "12",
    title: "system design",
    curriculum: "advanced",
    status: "not-started",
  },
];
