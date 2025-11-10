import {Cpp} from './subjects/Cpp';
import {Java} from './subjects/Java';
import {React} from './subjects/React';
import {cTeacher} from './subjects/Teacher';

const cpp = new Cpp();
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());

const java = new Java();
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());

const react = new React();
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());