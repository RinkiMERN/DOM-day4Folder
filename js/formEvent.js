let form=document.querySelector('form');
// let usern=document.querySelector("input[type='text']");
// let userp=document.querySelector("input[type='password']");
// form.addEventListener("submit", e=>{
//     e.preventDefault();
//     let username1=usern.value;
//     let userpass=userp.value;
//     console.log({username1,userpass});
// })

//second way using form only

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     let username=e.target[0].value;
//     let userpass=e.target[1].value;
//     console.log({username,userpass});
// })
let unordered=document.querySelector('ul');

console.log(unordered);
form.addEventListener("submit",e=>{
    e.preventDefault();
    let input1=e.target[0].value;
    console.log(input1);
    
    let list1=document.createElement("li");
    list1.style.background="lightcoral";
    list1.style.width="100%";
    list1.style.margin="15px";
    list1.innerHTML +=`<span>${input1}</span>`;
    unordered.append(list1);


    let span1=document.createElement("span");
    span1.classList.add("delete");
    span1.innerHTML +="<button>DELETE</button>";
    list1.appendChild(span1);


    span1.onclick=function(){
        // console.log('working');
        list1.remove();
    }
})
ul.addEventListener('click',e=>{
if(e.target.nodeName ==="BUTTON")
{
    e.target.parentNode.parentNode.remove();
}
})