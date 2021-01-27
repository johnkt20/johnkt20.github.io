let btn11= document.getElementById("button11");
let txt11=document.getElementById("userid");

let btn1 =document.getElementById("button1");
let btn2= document.getElementById("button2");
let txt1=document.getElementById("area1");
let txt2= document.getElementById("area2");


btn11.onclick=checkValue;

btn1.onclick= start1;
btn2.onclick=start2;
function start1(){
fetch("https://api.github.com/users/chriscoyier/repos")
.then(res=>res.text())
.then(data=>{document.querySelector('#area1').value=data})

}
function start2(){
fetch("https://api.github.com/users/chriscoyier/repos")
.then(res=>res.text())
.then(data=>{document.querySelector('#area2').value=data})

}


function checkValue(){
   if(txt11.value==="1"){
    location.href = "textt.html";
   }
}



/*
async function createStudent(){
    let student={
        id:"1",
        name:"Johne kelati"
    }

    let response= await fetch('https://reqres.in/api/users', {method:'post',headers:
    {'Content-Type':'application/json;charset=utf-8'},body:JSON.stringify(student)});
   
    let result= await response.json();
    alert(`student${result.name}is created`);
};
createStudent();

alert("hh");
*/