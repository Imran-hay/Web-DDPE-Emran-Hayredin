
function output()
{
var name = localStorage.getItem("item1");
var tel = localStorage.getItem("item2");
var age = localStorage.getItem("item3");
document.getElementById("oname").innerHTML = name;
document.getElementById("otel").innerHTML = tel;
document.getElementById("oage").innerHTML = age;


}