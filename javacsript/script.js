

function firstClick() {
    var x = document.getElementById("mobile");
    x.style.display = "block";

    document.getElementById("reorder").style.display = "none";
    document.getElementById("remove").style.display = "block";
}

function secondClick() {
    var x = document.getElementById("mobile");
    x.style.display = "none";

    document.getElementById("remove").style.display = "none";
    document.getElementById("reorder").style.display = "block";
    
}