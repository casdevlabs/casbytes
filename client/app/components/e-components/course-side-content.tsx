import { CourseTitle } from "../course-title";
import { Courses } from "./courses";
import { Status } from "./status";
import { TrophyCarbinet } from "./trophy-carbinet";

export function CourseSideContent() {
  return (
    <>
      <CourseTitle title="Trophy cabinet" />
      <TrophyCarbinet />
      <CourseTitle title="Courses" />
      <Status />
      <Courses />
    </>
  );
}
