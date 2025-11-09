namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10,
  };
}
