function hamburg(){
    const navbar = document.getElementById("nav-bar");

    if (navbar.className === "nav-bar-container-open"){
        navbar.className += "nav-bar-closed";
    }
    else{
        navbar.className = "nav-bar-container-open";
    }
}