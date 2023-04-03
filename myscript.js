//getAttribute means atrribute vitra ko value get garnalai
//eg const div2 = document.getElementById("div2") div2 is attribute
//const zanu = div2.getAttribute("id")div2 ko value lai linako lagi id is attribute add attributeko value linalai

//setattribute vaneko atttributevitra ko value set garanalaifor example input, button ,label  vitrako value haru
//button vaneko chai ....const button = document.queryselector("button")
//eg button.setattribut("name" "helloButton")
//inspect gardako <button name="helloButton" disabled="">Hello World</button>


/*const button = document.querySelector("button")
button.setAttribute("onclick", "hollo")

/*const container = document.getElementById("container")
const zany = container.getAttribute("id")*/

//alert("hello")

function addTask() {
    let input = document.getElementById("taskinput");
    let ul = document.getElementById("taskList");
    let li = document.createElement("li")
    let tesk = document.createTextNode(input.value);//input vitra k o value ma text create garxa createText/nadele
    li.appendChild(tesk);

    //Add ckeckbox


    let checkbox = document.createElement("input")
    checkbox.type = checkbox;
    checkbox.setAttribute("onclick", "markAsComplate(this)");//onclick vanne event ma markAsComplate value create garyo
    li.appendChild(checkbox)//checkboxlai li sanga append gareko
    checkbox.style.display = "none";
    //delete task
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute('onclick', 'deletetask(this)');
    li.appendChild(deleteButton)

    ul.appendChild(li)//lastma li lai ul sanga append gareko 
    input.value = "";
}

function deletetask(item) {
    let li = item.parentNode;
    let ul = li.parentNode;

    ul.removeChild(li)

}

function markAsComplate(item) {
    let li = item.parentNode
    if (item.checked) {
        li.style.textDecoration = "line-through"
    } else {
        li.style.textDecoration = "none"
    }
}
