export interface Question {
  theQuestion: string;
  answers: string[];
  correctAnswer: string;
}

export interface Exam {
  questions: Question[];
  isCompleted: boolean;
  score: number;
}

export interface Media {
  url: string;
  mediaType: string;
}

export interface Chapter {
  title: string;
  media: Media;
  text: string;
  exam: Exam;
  isCompleted: boolean;
}

export interface Lesson {
  title: string;
  intro: string;
  chapters: Chapter[];
  exam: Exam;
  percentageCompletion: number;
}

export interface Course {
  title: string;
  info: string;
  lessons: Lesson[];
  finalExam: Exam;
}
