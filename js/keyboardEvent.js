//keyboard event
// let input=document.querySelector("input");
// let p=document.querySelector("p");
// console.log(p);
// input.addEventListener("keyup", e=>{
//     let value=e.target.value;
//     p.innerHTML=value;
// })

//restrictions
// input.addEventListener("keypress", e=>{
//         // if(e.key === " ")
//         // {
//         //     console.log(e.target.value);
//         // }
//         // if(e.code === 13)
//         // {
//         //     console.log(e.target.value);
//         // }
//         if(e.keyCode === 13)
//         {
//             console.log(e.target.value);
//         }
//     })
//textarea
// let text1=document.querySelector("#text1");
// let text2=document.querySelector("#text2");
// text1.addEventListener("keyup",e=>{
//     text2.innerHTML=e.target.value;
// })

//changeColor

let textarea=document.querySelector("#changeColor");
let p=document.querySelector("p");
textarea.addEventListener('keypress',e=>{
    let value=e.target.value;
    if(value.length>=0 && value.length<10)
    {
        textarea.style.background="red";
        p.innerText="Very poor ";
    }
    else if(value.length>=10 && value.length<=20)
    {
        textarea.style.background="orange";
        p.innerText="OK OK ";
    }
    else if(value.length>20 && value.length<=30)
    {
        textarea.style.background="green";
        p.innerText="good password ";
    }
    else{
        textarea.style.background="white";
        p.innerText="DONE ";
    }

})