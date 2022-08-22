const URL ="https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(URL)
.then(respuesta => respuesta.json())
.then (data => {
    const ArrayDatos = data;
    showList(ArrayDatos.products);
})
function showList(array){
  array.forEach(element => { 
    var elementHTML = `<div class = "list-group-item">
                      <div class="row">
                      <div class = "col-3">
                      <img src="${element.image}" alt="producto" class="img-thumbnail">
                      </div>
                      <div class ="col">
                       <h4>${element.name}-${element.cost} ${element.currency} </h4> 
                       <p>${element.description} </p>
                       <br><br>
                        <p align="right"> ${element.soldCount} vendidos</p>
                       </div>
                       </div>
                       </div>
                      `
        document.getElementById("info").innerHTML += elementHTML;              
    });

  }
