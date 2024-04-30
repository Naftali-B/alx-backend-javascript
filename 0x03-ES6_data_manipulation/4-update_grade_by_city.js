/* eslint-disable */
function updateStudentGradeByCity(students, city, newGrades) {
    return students.filter(student => student.location === city).map(student => {
        const matchedGrade = newGrades.find(grade => grade.studentId === student.id);
        const grade = matchedGrade ? matchedGrade.grade : 'N/A';
        return { ...student, grade };
    });
}

export default updateStudentGradeByCity;

