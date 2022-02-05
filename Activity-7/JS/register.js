function ikey()
{
    document.getElementById("fname").style.width="250px";
}



function validate()

{
    function setform(name,tel,age)
    {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    var name = document.getElementById("fname").value;
    var tel = document.getElementById("tel").value;
    var age = document.getElementById("age").value;

    const x = new setform(name,tel,age);

   localStorage.setItem("item1",x.name);
   localStorage.setItem("item2",x.tel);
   localStorage.setItem("item3",x.age);


}



