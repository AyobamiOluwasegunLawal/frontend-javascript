namespace Subjects {
    export interface Teacher{
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingC) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
        }
    }

    export const cpp = new Cpp();

    console.log("C++");
    cpp.setTeacher(cTeacher);

    console.log(cpp.getAvailableTeacher());
    console.log(cpp.getRequirements());
}  

