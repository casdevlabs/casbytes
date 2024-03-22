export interface IModule {
  title: string;
  slug: string;
  examples: IExample[];
  exercises: IExercise[];
  lessons: ILesson[];
}

export interface IExample {
  title: string;
  slug: string;
}

export interface IExercise {
  title: string;
  slug: string;
}

export interface ILesson {
  title: string;
  slug: string;
  quiz: string;
}

export interface ICourse {
  title: string;
  slug: string;
  published: boolean;
  type: string;
  overview: string;
  modules: IModule[];
}
