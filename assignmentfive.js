class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }

    describe() {
        return `${this.name} plays ${this.grade}. `;
    }
}

class Subject {
    constructor(name) {
        this.name = name;
        this.student = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a student: ${student}`);
        }
    }

    describe() {
        return `${this.name} has ${this.students.length} students.`;
    }
}

class Menu {
    constructor() {
        this.subjects = [];
        this.selectedSubject = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection !=0) {
            switch (selection) {
                case '1':
                    this.createSubject();
                    break;
                case '2':
                    this.viewSubject();
                    break;
                case '3':
                    this.deleteSubject();
                    break;
                case '4':
                    this.displaySubject();
                    break;
                default:
                    selection = 0;                
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new subject
            2) view subject
            3) delete subject
            4) display all subjects
            `);
    }

    showSubjectMenuOptions(subjectInfo) {
        return prompt(`
            0) back
            1) create student
            2) delete student
            ----------------------
            ${subjectInfo}
        `);
    }

    displaySubject() {
        let subjectString = '';
        for (let i = 0; i < this.subjects.length; i++) {
            subjectString += i + ') ' + this.subjects[i].name + '\n';
        }
        alert(subjectString);
    }

    createSubject() {
        let name = prompt('Enter name for new subject:');
        this.subjects.push(new Subject(name));
    }

    viewSubject() {
        let index = prompt('Enter the index of the subject you wish to view:');

        if (index > -1 && index < this.subjects.length) {
            this.selectedSubject = this.subjects[index];
            let description = 'Subject Name: ' + this.selectedSubject.name + '\n';
            for (let i = 0; i < this.selectedSubject.student.length; i++) {
              description += i + ') ' + this.selectedSubject.student[i].name
                + ' - ' + this.selectedSubject.student[i].grade + '\n';            
        }
        console.log('viewing subject', this.selectedSubject.student);

            let selection = this.showSubjectMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();       
            }
        }
    }

    deleteSubject() {
        let index = prompt('Enter the index of the subject you wish to delete:');
        if (index > -1 && index < this.subjects.length) {
            this.subjects.splice(index, 1);
        }
    }

    createStudent() {
        let name = prompt('Enter name for new student:');
        let grade = prompt('Enter grade for new student');
        this.selectedSubject.student.push(new Student(name, grade));
        console.log('new student array', this.selectedSubject.student)
    }

    deleteStudent() {
        let index = prompt('Enter the index of the student you wish to delete:');
        if (index > -1 && index < this.selectedSubject.student.length) {
            this.selectedSubject.student.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();