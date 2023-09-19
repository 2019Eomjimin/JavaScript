const student = {
    /*key : value*/
    major : "컴퓨터공학부",
    idNum : 201995051,
    name : `엄지민`
}

for(key in student) {
    document.write(`${key} : ${student[key]}<br>`);
}