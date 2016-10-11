function Student(id, name, email) {
    if (!(this instanceof Student)) {
        return new Student(id, name, email);
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.print = function () {
        console.log('Nome: ' + this.name);
        console.log('Email: ' + this.email);
    }
}

function University() {
    if (!(this instanceof University)) {
        return new University();
    }

    this.students = require('./students.json').map(student => {
        return new Student(student.id, student.name, student.email);
    });

    this.getStudentById = function (id) {
        return this.students.find(student => {
            return id === student.id;
        });
    }
}

(function printStudent() {
    let id = process.argv[2];
    let university = new University();
    let student = university.getStudentById(id);
    if (student) {
        student.print();
    } else {
        console.log('Matrícula não encontrada.');
    }
})();