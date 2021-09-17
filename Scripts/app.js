//IIFE - Immediately invoked function expression
"use strict";
(function(){

    function Start()
    {
        let myVariable=20;
        console.log("My numnber is: " +myVariable);
    }
    window.addEventListener("load", Start)
})();

