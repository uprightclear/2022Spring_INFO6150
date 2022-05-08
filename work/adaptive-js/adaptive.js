"use strict";
(function iife(){
    const labels = {};
    const addButton = document.querySelector(".add-form__submit");
    const inputText = document.querySelector(".label__input");
    const infoLabel = document.querySelector(".info__report");

    disableButton();
    addCount();

    function disableButton(){
        addButton.disabled = !inputText.value;
        inputText.addEventListener("input", function(){
            addButton.disabled = !inputText.value;
        });
    }

    function addCount(){
        addButton.addEventListener("click", function(e){
            e.preventDefault();
            const inputValue = inputText.value;
            labels[inputValue] = 1 + (labels[inputValue] || 0);
            infoLabel.textContent = 'The count for ' + inputValue + ' is ' + labels[inputValue];
        });
    }
})();