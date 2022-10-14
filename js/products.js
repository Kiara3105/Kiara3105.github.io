const  FiltroArray = [];
const URL=  PRODUCTS_URL+ localStorage.getItem('catID')+EXT_TYPE
const ORDER_ASC_BY_PRICE = "$->$$";
const ORDER_DESC_BY_PRICE = "$$->$";
let currentProductsArray = [];
let max = 0;
let min = 0;

function showList(array){
  array.forEach(element => { 

    var elementHTML = `<div onclick="setProdID(${element.id})" class="list-group-item list-group-item-action">
                      <div class = "list-group-item">
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
                       </div>
                      `
        document.getElementById("info").innerHTML += elementHTML;
                 
    });
  }
document.addEventListener("DOMContentLoaded",()=>{
  fetch(URL)
  .then(respuesta => respuesta.json())
  .then(data =>{
    currentProductsArray = data.products;
    showList(currentProductsArray);
  })
document.getElementById("sortPriceAsc").addEventListener("click", ()=>{
  currentProductsArray = currentProductsArray.sort((a,b)=>{return a.cost - b.cost});
  document.getElementById("info").innerHTML = " ";
  showList(currentProductsArray);
})
document.getElementById("sortPriceDesc").addEventListener("click", ()=>{
  currentProductsArray = currentProductsArray.sort((a,b)=>{return b.cost - a.cost});
  document.getElementById("info").innerHTML = " ";
  showList(currentProductsArray);
})
document.getElementById("sortByCount").addEventListener("click", ()=>{
  currentProductsArray = currentProductsArray.sort((a,b)=>{return a.soldCount - b.soldCount});
  document.getElementById("info").innerHTML = " ";
  showList(currentProductsArray);
})
document.getElementById("rangeFilterCount").addEventListener("click", function(){
  min=document.getElementById("rangeFilterCountMin").value;
  max=document.getElementById("rangeFilterCountMax").value;
  document.getElementById("info").innerHTML = "";
  showList(currentProductsArray);
  });
})
function setProdID(id){
  localStorage.setItem("ProdID", id);
  window.location.href = "product-info.html";
  }
  
  




