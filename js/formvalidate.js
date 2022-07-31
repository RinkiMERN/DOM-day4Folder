//password
let input1=document.querySelector("input[type='password']");
let  eye = document.querySelector("#togglePassword");
console.log(input1);
let para=document.querySelector(".para");
// let pattern=new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");

// para.innerHTML="First letter should be capital must contain character and atleast one number contain atleast 6 char";
// para.style.background="green";
// input1.addEventListener('input',e=>{
//     e.preventDefault();
//     let len=e.target.value;
    
//     if(pattern.test(len))
//     {
//         para.style.visibility="hidden";
//         return (true)
//     }
//     else{
//         para.style.background="red";
//         para.innerHTML="First letter should be capital must contain character and atleast one number contain atleast 6 char";
        
//         return (false)
//     }
// })

// eye.addEventListener("click", function () {
//     // toggle the type attribute
//     if (input1.type === "password") {
//         input1.type = "text";
//       } else {
//         input1.type = "password";
//       }
// });
// //number
// let input2=document.querySelector("#number");
// // input2.setAttribute("pattern","`^[0-9]*$`");
// input2.addEventListener('keyup',e=>{
//     e.preventDefault();
//     if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
//         e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..?)\../g, '$1');
//       }
//   })



  //first input
  let input4=document.querySelector("#inputText");
  let errorBlock=document.querySelectorAll(".error-block");
  input4.style.textTransform="uppercase";
input4.addEventListener("keyup",e=>{
  if(e.target.value.length< 6)
  {
    errorBlock[0].innerHTML="Please add minimum 6 character";
    errorBlock[0].classList.add("error-danger");
    errorBlock[0].previousElementSibling.classList.add("Input-error");
  }
  else{
    errorBlock[0].innerHTML="";
    errorBlock[0].classList.remove("error-danger");
    errorBlock[0].previousElementSibling.classList.remove("Input-error");
  }
});

let form=document.querySelector('form');
let input2=document.querySelector("#number");
let input3=document.querySelector("input[type='email']");
// let emailVal=new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");
let emailVal=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(form);
// form.addEventListener("submit",e=>{
//   e.preventDefault();
//   if(input4.value=="")
//   {
//     errorBlock[0].innerHTML="username is required";
//     errorBlock[0].classList.add("error-danger");
//   }else if(input3.value=="")
//   {
//     errorBlock[1].innerHTML="Phone num is required";
//     errorBlock[1].classList.add("error-danger");
//   }else if(input2.value=="")
//   {
//     errorBlock[2].innerHTML="email is required";
//     errorBlock[2].classList.add("error-danger");
//   }else if(input4.value=="")
//   {
//     errorBlock[3].innerHTML="password is required";
//     errorBlock[3].classList.add("error-danger");
//   }
//   else
//   {
//     errorBlock.forEach(x=>x.style.display="none");
//     errorBlock[4].innerHTML="form-submitted";
//     errorBlock[4].classList.add("error-danger");
//   }
// })

//dynamic

let errorMessage=function(element,message)
{
  element.nextElementSibling.innerHTML=message;
  element.nextElementSibling.classList.add("error-danger");
}
form.addEventListener("submit", e=>{
  e.preventDefault();
  if(input4.value=="")
  {
errorMessage(input4,"username req");
  }else if(input2.value=="")
  {
    errorMessage(input2,"num req");
  }
  else if(!emailVal.test(input3.value))
  {
    errorMessage(input3,"email is not matched");
  }else if(input1.value=="")
  {
    errorMessage(input1,"pass req");
  }
  else
  {
    errorBlock.forEach(x=>(x.style.display="none"));
    console.log("form is submitted");
    console.log({input3,input2,input1});
  }
});
//email
// let input3=document.querySelector("input[type='email']");
// let emailVal=new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");
// let para1=document.querySelector(".para1");
// input3.addEventListener('input',e=>{
//     e.preventDefault();
//       let val2=e.target.value;
      
//       if(!emailVal.test(val2))
//       {
//         para1.innerHTML="notok";
//         //  para1.innerHTML="ok";
//         return (true)
//       }
//       else{
//         para1.style.display="none";
//       }
     
//   })