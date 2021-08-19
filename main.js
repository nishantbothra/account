function show() {
    document.getElementById("show_r").style.display = "none";
    document.getElementById("show_x").style.display = "block";
}
function hide() {
    document.getElementById("show_x").style.display = "none";
    document.getElementById("show_r").style.display = "block";
}
function signup_page() {
    document.getElementById("log_in").style.display = "none";
    document.getElementById("sign_in").style.display = "block";
    document.getElementById("main_sec").style.background = "rgb(202, 39, 39)";
    document.getElementById("sign_in_right").style.marginLeft = "0px";
    document.getElementById("sign_in_left").style.marginLeft = "400px";

}
function login_page() {
    document.getElementById("sign_in").style.display = "none";
    document.getElementById("log_in").style.display = "block";
    document.getElementById("main_sec").style.background = "rgb(250, 225, 0)";
}





