const URL = CART_INFO_URL + "25801" + EXT_TYPE
let producto = {}
let precioUni = 0

document.addEventListener("DOMContentLoaded",()=>{
    fetch(URL)
    .then(resp_1 => resp_1.json())
    .then(data_1 => {
        producto = data_1;
        showArticulo(producto);
    })
})

function showArticulo(){
    precioUni = producto.articles[0].unitCost

    listaDesplegable = `
    <tr>
                <td><img src="${producto.articles[0].image}" alt="" width="50px"></td>
                <td>${producto.articles[0].name}</td>
                <td>Moneda USD o UYU + Precio unitario</td>
                <td><input class="form-control" style="width:60px;" onchange="subtotal()" type="number" id="cantArticulo" value=1 min=1></td>
                <td><span id="subtotal" style="font-weight:bold;">${precioUni}</span></td>
                <td><button type="button" class="btn btn-outline-danger" onclick="deleteItem()"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
    `
    document.getElementById("articlesWrapper").innerHTML = listaDesplegable;
}

function subtotal(){
    document.getElementById("subtotal").innerHTML = precioUni * document.getElementById("cantArticulo").value
}