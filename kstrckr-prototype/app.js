document.getElementsByClassName("info-button")[0].addEventListener("click", function(){
    console.log(this.parentNode.parentNode);
    if(this.parentNode.parentNode.dataset.status === "closed"){
        this.parentNode.parentNode.style.height = "100%";
        this.parentNode.parentNode.dataset.status = "open";
        this.setAttribute("src", "icons/close-icon.jpg");
    } else if (this.parentNode.parentNode.dataset.status === "open"){
        this.parentNode.parentNode.style.height = "19%";
        this.parentNode.parentNode.dataset.status = "closed"
        this.setAttribute("src", "icons/info-icon.jpg");
    }
})

document.getElementsByClassName("info-button")[1].addEventListener("click", function(){
    console.log(this.parentNode.parentNode);
    if(this.parentNode.parentNode.dataset.status === "closed"){
        this.parentNode.parentNode.style.height = "81%";
        this.parentNode.parentNode.dataset.status = "open";
        this.setAttribute("src", "icons/close-icon.jpg");
    } else if (this.parentNode.parentNode.dataset.status === "open"){
        this.parentNode.parentNode.style.height = "19%";
        this.parentNode.parentNode.dataset.status = "closed"
        this.setAttribute("src", "icons/info-icon.jpg");
    }
})