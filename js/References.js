// JSON code
$(document).ready(function () {
  var data = [];
  $.getJSON("json/product.json", function (items) {
    data = items;
    showImage(data)
});

//Start: Detail-Item Modal
  $(document).on("click", ".productImg, .productName", function () {
    let id = $(this).data("id");
    let product = data.filter((ele) => ele.id == id);
    showModal(product[0]);
    console.log(product);

    $("#showModal").modal("show");
});
//End: Detail-Item Modal

// Start: JSON Code / from data to JSON file
  function showImage(items) {
    let s = [];
    $.each(items, function (e, json) {
      s.push(`
        <div  data-name="${json.name}" data-id="${json.id}" data-item="${json.catogery}" data-brand="${json.brand}" data-size="${json.pdsize}" data-weight="${json.pdweight}" data-color="${json.pdcolor}" data-price="${json.pdprice}">
          <div class="element_gifts">
            <div class="card" >
              <img src="${json.image}" data-id="${json.id}" class="card-img-top productImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card-body">
                  <hr>
                    <h5 data-id="${json.id}" style="font-size: 20px" class="productName" data-bs-toggle="modal" data-bs-target="#exampleModal" >${json.name}</h5> 
                    <p class="type" style="font-size: 17px">${json.type}</p>
                </div>
            </div>
          </div>
        </div>
    `);
  });
    $("#products").html(s.join(" "));
    element_gifts = document.querySelectorAll(".element_gifts");
    // End: JSON CODE
  }
}); 

  function showModal(json) {
    let s = `
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${json.image}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="text-align: left; font-family: "Open Sans", sans-serif; font-size: 35px;"> <strong><b>${json.name}</b></strong> </h3>
              <hr>
              <p style="font-size: 18px;"><strong>Author:</strong><strong>   ${json.author}</strong></p>
              <p style="font-size: 18px;"><strong >Release:</strong><strong>  ${json.release}</strong></p>
              <hr>
              <p><strong></strong>${json.description}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    $("#productContent").html(s);
  }    

  function searchProduct(){
    const input = document.getElementById('search').value.toUpperCase();
    
    const cardsProduct = document.getElementById('products')
    
    const cards = cardsProduct.getElementsByClassName('element_gifts')
    

    for(let i = 0; i < cards.length; i++){
     let title = cards[i].querySelector(".card-body, h5.productName, p.type")
    
     if(title.innerText.toUpperCase().indexOf(input) > -1){
         
       cards[i].style.display = "";

     }else{
       cards[i].style.display = "none";
     }
    }
    
   }