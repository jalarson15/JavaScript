class Person {
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName - lastName;
        this.classes = [];
    }
    getFirstName() { return this.firstName; }
    getLastName() { return this.lastName; }
    addClasses() {return this.classes; }
    removeClasses(courseName) { removeCourse(this.classes, courseName); } 
}

function removeCourse(courses, courseName)
{
    for(var x = 0; x < courses.length; x++)
    {
        if (courses[x].getName() === courseName)
        {
            var tmp = courses[x];
            delete courses[x];
        }
    }
}

class Student extends Person {
    constructor(firstName, lastName, studentId)
    {
        super(lastName);
        this.studentId = studentId;
        this.firstName = firstName;
    }
    getStudentId() { return studentId; }
    getfirstName() { return firstName; }
}

class Teacher extends person {
    constructor(firstName, lastName, field)
    {
        super(lastName);
        this.field = field;
        this.firstName = firstName;
    }

    getFirstName() { return firstName; }
    getField() { return Field; }
    getCourseSessionId() { return courseSessionId; }
}

class Course {
    constructor(courseName, courseSessionId, courseField, assignedTeacher)
    {
        this.courseName = courseName;
        this.courseSessionId = courseSessionId;
        this.courseField = courseField;
		this.assignedTeacher = assignedTeacher;
    }

    getCoursName() { return courseName; }
    getCourseSessionId() { return courseSessionId; }
    getCourseField() { return courseField; }
}
/*********** Creating Students, Teachers, and Courses *****************/
student1 = new Student("John", "Doe", 1);
student2 = new Student("Dohn", "Joe", 2);
student3 = new Student("Eclipsa", "Solaris", 3)

var students = [student1, student2, student3];

teacher1 = new Teacher("Kary", "Brimswort", "pot101");
teacher2 = new Teacher("Damius", "Boert", "inc101");
teacher3 = new Teacher("Ferra", "Holiday", "ccs101");

var teachers = [teacher1, teacher2, teacher3];

pot101 = new Course("Intro to Potion Making", 1, "pot101", teacher1);
inc101 = new Course("Basic incantations of the 12th century", 2, "inc101", teacher2);
ccs101 = new Course("Cursing in the 21st century", 3, "ccs101", teacher3);

var allCourses = [pot101, inc101, ccs101];

