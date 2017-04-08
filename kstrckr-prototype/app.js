
document.getElementById("button-holder").children[0].addEventListener("click", function(){
    console.log("Pressed");
    document.getElementsByClassName("tour-stop")[0].style.height = "100%";
})