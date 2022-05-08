"use strict"

const input = document.querySelectorAll(".text-input");
const submitButton = document.querySelector(".submit-button");

function success() {
    if(input.value==="") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

success();