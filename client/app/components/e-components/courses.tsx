import { CourseCard } from "./course-card";

export function Courses() {
  return (
    <ul className="flex flex-col gap-4 p-2 overflow-y-auto">
      {courses.map((course, i) => (
        <CourseCard i={i} course={course} />
      ))}
    </ul>
  );
}

const courses = [
  {
    id: "1",
    title: "HTML",
    rating: 4.9,
  },
  {
    id: "1",
    title: "CSS",
    rating: 5,
  },
  {
    id: "1",
    title: "JavaScript",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
  {
    id: "1",
    title: "Python",
    rating: 5,
  },
];
