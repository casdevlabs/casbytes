import { CourseCard } from "./course-card";

export function MyCourses() {
  return (
    <ul className="space-y-5 overflow-y-auto">
      {courses.map((course, i) => (
        <CourseCard i={i} course={course} />
      ))}
    </ul>
  );
}

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
