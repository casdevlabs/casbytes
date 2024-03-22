export interface IModule {
  title: string;
  slug: string;
  userId: string;
  courseId: string;
  examples: IExample[];
  exercises: IExercise[];
  lessons: ILesson[];
}

export interface IExample {
  title: string;
  slug: string;
  userId: string;
  moduleId: string;
}

export interface IExercise {
  title: string;
  slug: string;
  userId: string;
  moduleId: string;
}

export interface ILesson {
  title: string;
  slug: string;
  userId: string;
  moduleId: string;
  quiz: string;
}

export interface ICourse {
  title: string;
  slug: string;
  overview: string;
  userId: string;
  modules: IModule[];
}
