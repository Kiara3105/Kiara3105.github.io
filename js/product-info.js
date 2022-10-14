const URL1=  PRODUCT_INFO_URL+ localStorage.getItem('ProdID')+EXT_TYPE
const URL2=  PRODUCT_INFO_COMMENTS_URL+ localStorage.getItem('ProdID')+EXT_TYPE
let producto = {};
let producto_info_comments = {};
function showlist(product){
    let html = " ";
    product.images.forEach(element => {
    html +=`<div class="col">
    <img src="${element}"  class="img-thumbnail">
  </div>`    
    });
    document.getElementById("ImagenInfo").innerHTML = html;
}
document.addEventListener("DOMContentLoaded", ()=>{
fetch(URL1)
  .then(respuesta => respuesta.json())
  .then(data =>{
     producto= data;
     document.getElementById("productName").innerHTML = producto.name; 
     document.getElementById("productCost").innerHTML = producto.cost;
     document.getElementById("productDescription").innerHTML = producto.description;
     document.getElementById("productCategory").innerHTML = producto.category;
     document.getElementById("productSoldCount").innerHTML = producto.soldCount;
     document.getElementById("img1").src=producto.relatedProducts[0].image
     document.getElementById("img2").src=producto.relatedProducts[1].image
     showlist(producto);
     
     fetch(URL2)
     .then(resp => resp.json())
     .then(dato => {
       
        coments = dato;
        showcoments(coments);
     })
  })
});
function showcoments(coments){
    var today = new Date();
    var fecha = today.toLocaleString()
    coments.forEach(element =>{
        texto = `<div class= "list-group-item list-group-item-action">
                <div class="row">
                 <p><strong>${element.user}</strong> = ${element.dateTime} = ${starScore(element.score)}</p>
                 <p>${element.description + fecha}</p>
                  </div>
                 </div>
                </div>`
 document.getElementById("Comentarios").innerHTML += texto;
    })
    
}
function starScore(stars){
  let htmlStars = " "
  for(let i= 0; i< stars; i ++){
    htmlStars += `<span class="fa fa-star checked"></span>`
  };
  for (let i= stars; i< 5; i ++){
    htmlStars += `<span class="fa fa-star"></span>`
  }
  return htmlStars;
}
function showlist(product){
  let html = " ";
  product.images.forEach(element => {
  html +=`<div class="col">
  <img src="${element}"  class="img-thumbnail">
</div>`    
  });
  document.getElementById("ImagenInfo").innerHTML = html;
}

    