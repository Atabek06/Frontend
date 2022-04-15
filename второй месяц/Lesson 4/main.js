// const blocks = document.getElementsByClassName('main');
//  console.log(blocks)
//
// const block3 = document.getElementById('block3');
// console.log(block3.classList)
//
// block3.classList.add("changedClass");
// block3.classList.remove("Changedclass")
// console.log(block3.classList)
//
// block3.oneclick = () => {
//     block3.classList.toggle("active")
// }
// console.log(block3.classList)

const button = document.getElementById('button');
const input = document.getElementById('input');

button.onclick = () => {
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "delete"
    deleteButton.onclick = (e)=>{
        console.log(e)
    }
    div.setAttribute('class', 'block');
    div.innerText = input.value;

    div.append(deleteButton)
    document.body.append(div)
}


