let elements=document.querySelectorAll("div");
function randomNumber(num)
{
return Math.floor(Math.random()*(num+1));
}
function getRGBvalue()
{
    return `rgb(${randomNumber(255)},${randomNumber(234)},${randomNumber(132)})`
}
 

//without event delegation
// elements.forEach(ele=>{
//     ele.addEventListener('click',e=>{
//         console.log(e.target.innerText);
//         e.target.style.background=getRGBvalue();
//     })
// });

//with delegation

let article=document.querySelector("article");
//this code is working for each and every tag 
// article.addEventListener("click",e=>{
//     console.log(e.target.innerText);
//     e.target.style.background=getRGBvalue();
// })
//segregation 
// article.addEventListener("click",e=>{
//     // console.log(e.target.innerText);
//     // if(e.target.nodeName==="DIV")
//     // {
//     //     e.target.style.background=getRGBvalue();
//     // }
//     if(e.target.nodeName==="SPAN")
//     {
//         e.target.style.background=getRGBvalue();
//     }
    
// })

//remove 
// let removeEvents=new AbortController();
// article.addEventListener("click",e=>{

//     if(e.target.nodeName==="SPAN")
//     {
//         e.target.style.background=getRGBvalue();
//     }
    
// },{signal:removeEvents.signal});
// removeEvents.abort();

//creating new div

let allDiv=document.querySelectorAll("div");
let btn=document.querySelector("button");
btn.addEventListener('click', e=>{
    let div=document.createElement("div");
    div.textContent="rinki";
    article.appendChild(div);
});
//removing
article.addEventListener('click', e=>{
    if(e.target.nodeName==="DIV")
    {
        e.target.remove();
    }
});
