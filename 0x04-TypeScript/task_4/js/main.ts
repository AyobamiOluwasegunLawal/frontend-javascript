import Teacher = Subjects.Teacher;
const Cpp = Subjects.Cpp;
const Java = Subjects.Java;
const React = Subjects.React;

export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

//cpp subject
console.log('C++')
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();

//java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

//react subject
console.log('React');
react.setTeacher(cTeacher);
react.getRequirements();
react.getAvailableTeacher();
