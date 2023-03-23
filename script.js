let string ="";
let buttons = document.querySelectorAll("button");
let result="";
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == "="){
            document.querySelector('.input-1').innerHTML=string+"=";
                string = string.replaceAll("×", "*");
                string = string.replaceAll("÷", "/");
                string=eval(string);
            document.querySelector('.input-2').innerHTML=string;
            
        }else  if(e.target.innerHTML == "AC"){
            string="";
            document.querySelector('.input-2').innerHTML=string;
            document.querySelector('.input-1').innerHTML=string;
        }else  if(e.target.innerHTML == "C"){
            if(string != ""){
                // let last = string.charAt(string.length-1);
                string =string.substring(0,string.length-1);
                document.querySelector('.input-2').innerHTML=string;
                document.querySelector('.input-1').innerHTML=string;
            }
        }
        else{
            console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('.input-2').innerHTML=string; 
        document.querySelector('.input-1').innerHTML=string; 
        }
       
    })
})

