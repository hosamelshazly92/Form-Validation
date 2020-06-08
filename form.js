const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

const goButton = document.querySelector(".btn");

function validateForm() {
    let name = nameInput.value;
    
    if(name == null || name == "") {
        alert("a7a");
        //stop the form from submitting
        return false;
    }
    
    if(name.length < 3) {
        alert("a7eteen");
        //stop the form from submitting
        return false;
    }
}

//goButton.onclick = function() {
//    if (nameInput.value === "" || emailInput.value === "") {
//        goButton.classList.add("error");
//        msg.style.visibility = "visible";
//
//        setTimeout(function() {
//            msg.style.visibility = "hidden";
//            goButton.classList.remove("error");
//        }, 2000);
//    } else {
//        const li = document.createElement("li");
//        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//        userList.appendChild(li);
//
//        //clear fields
//        nameInput.value = "";
//        emailInput.value = "";
//    }
//}
