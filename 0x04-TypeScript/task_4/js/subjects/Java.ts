namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingJava) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
        }
    }

    export const java = new Java();

    console.log("Jave");
    java.setTeacher(cTeacher);

    console.log(java.getAvailableTeacher());
    console.log(java.getRequirements());
}
