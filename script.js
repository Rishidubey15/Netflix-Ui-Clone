let emailId = document.getElementById("emailId")
let emailError = document.getElementById("emailError")


function validateEmail()
{
    if(emailId.value == ""){
        emailError.innerHTML = "Email is required"
        emailId.style.border = "2px solid red";
        emailError.style.marginLeft = "-358px";
        return false
    }
    
    else if(!emailId.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        // emailError.style.display = "block"
        emailError.innerHTML = "Please enter a valid email address"
        emailId.style.border = "2px solid red";
        emailError.style.marginLeft = "-270px";
        return false
    }

    else{
        emailError.innerHTML = ""
        emailId.style.border = "2px solid green";
        return true
    }
}

const boxes = document.querySelectorAll(".faqBox")

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(box.classList.contains("active")){
            box.classList.remove("active")
        }
        else{
            boxes.forEach((b) => b.classList.remove("active"));
            box.classList.add("active")
        }
    })
})
