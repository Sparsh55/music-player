
// var student = {
//     name:"shaloni",
//     age:"12",
//     greet: function(){
//         console.log(this)
//     }
// }


// // function demo(){
// //     console.log(this)
// // }

// // demo.apply(student)

// // student.greet()
// // console.log(student.greet)

// var dp = student.greet.bind(student)
// dp()

function CreateStuednt(studentname,age){
   this.name=studentname
   this.age = age
}

var student1 = new CreateStuednt("shalini","23")
var student2 = new CreateStuednt("jyot","25")
console.log(student1)
console.log(student2)
