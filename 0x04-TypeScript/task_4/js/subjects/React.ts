namespace Subjects{
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingReact) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
        }
    }

    export const react = new React();

    console.log("React");
    react.setTeacher(cTeacher);

    console.log(react.getAvailableTeacher());
    console.log(react.getRequirements());
}