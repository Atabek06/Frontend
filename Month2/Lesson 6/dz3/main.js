const list =[{
    id: '',
    text: "Hello "
}];

const name = document.querySelector("#name")
const enterbutton = document.querySelector("#enterbutton")

function render(){
    const Maindiv = document.createElement('div');
    Maindiv.setAttribute("class", "list");
    for (let i = 0; i < list.length; i++){
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement("p");
        p.innerHTML = list[i].text;
        divList.append(p);
        Maindiv.append(divList);
    }
    const form = document.querySelector(".inner");
    document.querySelector(".list").remove();
    form.append(Maindiv)
}
enterbutton.onclick = function (){
    const obj = {
        id: list.length,
        text: name.value
    }
    console.log(list);
    list.push(obj);
    render()
}

 