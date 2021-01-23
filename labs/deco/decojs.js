ar button1=document.getElementById("btn");
button1.onclick=timmer;
let check1=document.getElementById("input1");
check1.onclick= changefont;


function timmer(){
    alert("fontsize increase by 2pt every 500ms!! good luck!")
    setInterval(changesize,500);
}
function changesize(){
    
    let txt=document.getElementById("textbox");
    var curFont = parseInt(window.getComputedStyle(txt).fontSize, 10);
   console.log(curFont);
  txt.style.fontSize=curFont+2+"pt";
   let ssize=txt.style.fontSize;
   console.log(ssize);
};

function changefont(){
    let txt= document.getElementById("textbox");
    if(check1.checked){
       
        txt.style.fontWeight="bolder";
        txt.style.textDecoration="underline"
        txt.style.color="green";

        alert("You are changing the style of text!")
    }
    else{
        txt.style.textDecoration="none";
        txt.style.color="black";
      txt.style.fontWeight="normal";
      alert("text back to normal!")
    }
}