const url = "  http://localhost:4000/products";
const ul = document.getElementById('products')

fetch(url).then(response => response.json()).then(data => getProducts(data));

function getProducts(products){
    products.forEach(product => {
        ul.innerHTML += `<tr>     
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button>редактировать</button>
                <button class="delBtn" data-id = "\`${product.id}\">удалить</button>
            </td>
            </tr>`
    })
}

const delBtns = document.querySelectorAll('.delBtn')

function deleteProduct (e){
    e.preventDefault();
    const id = e.target.dataset.id
    const deleteUrl = `${url}${id}`
    const option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }
    fetch(deleteUrl, option).then(response => console.log(response))
}
delBtns.forEach(delBtn => delBtn.addEventListener('click', deleteProduct))