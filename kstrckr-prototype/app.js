const displayStopInfo = function(){
    let targetInfo = this.parentNode.parentNode.children[1];
    let targetInfoHeight = targetInfo.scrollHeight;
    
    if (targetInfo.dataset.status === "closed"){
        targetInfo.style.height = targetInfoHeight + "px";
        targetInfo.dataset.status = "open";
        this.setAttribute("src", "icons/close-icon.jpg");
    } else {
        targetInfo.style.height = "0px";
        targetInfo.dataset.status = "closed";
        this.setAttribute("src", "icons/info-icon.jpg");
    }
}

document.getElementsByClassName("info-button")[0].addEventListener("click", displayStopInfo);

document.getElementsByClassName("info-button")[1].addEventListener("click", displayStopInfo);
