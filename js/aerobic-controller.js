
function getOnload(){
  {
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    renderAll(aerobicData);
    }
    dataRequest.send();
}
}
// SPA function 
function getRequest(page){
  switch (page){
    case 'indoors':
      {
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      renderIndoor(aerobicData);
      
      }
      dataRequest.send();
  }
    break;        
    case 'outdoors':
      {
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      renderOutdoor(aerobicData);

      }
        dataRequest.send();
      }
    break;
    case 'both':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      renderBoth(aerobicData);
      }
        dataRequest.send();
      }
    break;
  }
  
}
// Render functions
function renderAll(data){
  var all = []
  var indoors = [];
  var outdoors = [];
  var both = [];
for(i=0; i<data.indoors.length;i++){
    indoors += 
    `
        <div data-name="${data.indoors[i].name}" data-id="${data.indoors[i].id}">                 
        <div class="element_gifts">
            <div class="card" >
              <img  onclick="getIndoors('${data.indoors[i].id}')"src="${data.indoors[i].imgs}" data-id="${data.indoors[i].id}" 
              class="card-img-top productImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card-body">
                <hr>
                <h5 onclick="getIndoors('${data.indoors[i].id}')" data-id="${data.indoors[i].id}" style="font-size: 20px" 
                class="productName" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.indoors[i].name}</h5> 
                <p style="font-size: 17px">${data.indoors[i].type}</p>
                </div>
            </div>
            </div>
            </div>
    `
}
for(i=0; i<data.outdoors.length;i++){
  outdoors += `
  <div  data-name="${data.outdoors[i].name}" data-id="${data.outdoors[i].id}">   
  <div class="element_gifts">
          <div class="card" >
            <img onclick="getOutdoors('${data.outdoors[i].id}')" src="${data.outdoors[i].imgs}" data-id="${data.outdoors[i].id}" class="card-img-top productImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="card-body">
              <h5 onclick="getOutdoors('${data.outdoors[i].id}')" data-id="${data.outdoors[i].id}" style="font-size: 20px" class="productName" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.outdoors[i].name}</h5> 
              <p style="font-size: 17px">${data.outdoors[i].type}</p>
              </div>
          </div>

  </div>
</div>
  `
}
for(i=0; i<data.both.length;i++){
  both += `
  <div  data-name="${data.both[i].name}" data-id="${data.both[i].id}">   
  <div class="element_gifts">
          <div class="card" >
            <img onclick="getBoth('${data.both[i].id}')"src="${data.both[i].imgs}" data-id="${data.both[i].id}" class="card-img-top modal-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div class="card-body">
              <h5 onclick="getBoth('${data.both[i].id}')" data-id="${data.both[i].id}" style="font-size: 20px" class="modal-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.both[i].name}</h5> 
              <p style="font-size: 17px">${data.both[i].type}</p>
              </div>
          </div>
  </div>
</div>
  `
}
all = indoors + outdoors + both;
document.getElementById("displayInfo").innerHTML= all;
}
function renderIndoor (data){
  var indoors = [];
  for(i=0; i<data.indoors.length;i++){
    indoors += 
    `
        <div data-name="${data.indoors[i].name}" data-id="${data.indoors[i].id}">                 
        <div class="element_gifts">
            <div class="card" >
              <img  onclick="getIndoors('${data.indoors[i].id}')"src="${data.indoors[i].imgs}" data-id="${data.indoors[i].id}" 
              class="card-img-top productImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card-body">
                <hr>
                <h5 onclick="getIndoors('${data.indoors[i].id}')" data-id="${data.indoors[i].id}" style="font-size: 20px" 
                class="productName" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.indoors[i].name}</h5> 
                <p style="font-size: 17px">${data.indoors[i].type}</p>
                </div>
            </div>
            </div>
            </div>
    `
}
document.getElementById("displayInfo").innerHTML= indoors;
}
function renderOutdoor (data){
  var outdoors = [];
  for(i=0; i<data.outdoors.length;i++){
    outdoors += `
    <div  data-name="${data.outdoors[i].name}" data-id="${data.outdoors[i].id}">   
    <div class="element_gifts">
            <div class="card" >
              <img onclick="getOutdoors('${data.outdoors[i].id}')" src="${data.outdoors[i].imgs}" data-id="${data.outdoors[i].id}" class="card-img-top productImg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card-body">
                <h5 onclick="getOutdoors('${data.outdoors[i].id}')" data-id="${data.outdoors[i].id}" style="font-size: 20px" class="productName" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.outdoors[i].name}</h5> 
                <p style="font-size: 17px">${data.outdoors[i].type}</p>
                </div>
            </div>

    </div>
</div>
    `
  }
  document.getElementById("displayInfo").innerHTML= outdoors;
}
function renderBoth (data){
  var both = [];
  for(i=0; i<data.both.length;i++){
    both += `
    <div  data-name="${data.both[i].name}" data-id="${data.both[i].id}">   
    <div class="element_gifts">
            <div class="card" >
              <img onclick="getBoth('${data.both[i].id}')"src="${data.both[i].imgs}" data-id="${data.both[i].id}" class="card-img-top modal-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <div class="card-body">
                <h5 onclick="getBoth('${data.both[i].id}')" data-id="${data.both[i].id}" style="font-size: 20px" class="modal-toggle" data-bs-toggle="modal" data-bs-target="#exampleModal" >${data.both[i].name}</h5> 
                <p style="font-size: 17px">${data.both[i].type}</p>
                </div>
            </div>
    </div>
</div>
    `
  }
  document.getElementById("displayInfo").innerHTML= both;
}
// End SPA function
// Modal Box Display
function getIndoors(id){
switch(id){
case '1':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalIndoors(aerobicData);
      }
        dataRequest.send();
  function modalIndoors(data){
    var i = 0;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
                <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
              </div>
                
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
  }}
  break;
case '2':{
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    modalIndoors(aerobicData);
    }
      dataRequest.send();
function modalIndoors(data){
  var i = 1;
  var s =[];
  s+=`
  <div class="modal-body">
      <div class="row">
        <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
              <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
              <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
            </div>
              
          </div>
      </div>
    </div>
          `
  document.getElementById("productContent").innerHTML = s;
}}
break;
case '3':{
  var dataRequest = new XMLHttpRequest; 
  dataRequest.open('GET',"json/Aerobic-data.json"); 
  dataRequest.onload = function (){
  var aerobicData = JSON.parse(dataRequest.responseText);
  modalIndoors(aerobicData);
  }
    dataRequest.send();
function modalIndoors(data){
var i = 2;
var s =[];
s+=`
<div class="modal-body">
    <div class="row">
      <div class="col-sm-5 col-md-5 col-lg-5">
            <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
        </div>
        <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
          <div style="margin-left: 5px;">
            <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
            <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
            <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
          </div>
            
        </div>
    </div>
  </div>
        `
document.getElementById("productContent").innerHTML = s;
}}
break;
case '4':{
  var dataRequest = new XMLHttpRequest; 
  dataRequest.open('GET',"json/Aerobic-data.json"); 
  dataRequest.onload = function (){
  var aerobicData = JSON.parse(dataRequest.responseText);
  modalIndoors(aerobicData);
  }
    dataRequest.send();
function modalIndoors(data){
var i = 3;
var s =[];
s+=`
<div class="modal-body">
    <div class="row">
      <div class="col-sm-5 col-md-5 col-lg-5">
            <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
        </div>
        <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
          <div style="margin-left: 5px;">
            <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
            <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
            <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
          </div> 
        </div>
    </div>
  </div>
        `
document.getElementById("productContent").innerHTML = s;
}}
break;
case '5':{
  var dataRequest = new XMLHttpRequest; 
  dataRequest.open('GET',"json/Aerobic-data.json"); 
  dataRequest.onload = function (){
  var aerobicData = JSON.parse(dataRequest.responseText);
  modalIndoors(aerobicData);
  }
    dataRequest.send();
function modalIndoors(data){
var i = 4;
var s =[];
s+=`
<div class="modal-body">
    <div class="row">
      <div class="col-sm-5 col-md-5 col-lg-5">
            <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
        </div>
        <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
          <div style="margin-left: 5px;">
            <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
            <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
            <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
          </div>   
        </div>
    </div>
  </div>
        `
document.getElementById("productContent").innerHTML = s;
}}
break;
case '6':{
  var dataRequest = new XMLHttpRequest; 
  dataRequest.open('GET',"json/Aerobic-data.json"); 
  dataRequest.onload = function (){
  var aerobicData = JSON.parse(dataRequest.responseText);
  modalIndoors(aerobicData);
  }
    dataRequest.send();
function modalIndoors(data){
var i = 5;
var s =[];
s+=`
<div class="modal-body">
    <div class="row">
      <div class="col-sm-5 col-md-5 col-lg-5">
            <div><img src="${data.indoors[i].imgs}"  class="img-modal"  alt=""></div>
        </div>
        <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
          <div style="margin-left: 5px;">
            <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.indoors[i].name}</b></strong> </h3>
            <p><strong>Benefit</strong> ${data.indoors[i].benefit}</p>
            <p><strong>Anatomy</strong> ${data.indoors[i].anatomy}</p>
          </div> 
        </div>
    </div>
  </div>
        `
document.getElementById("productContent").innerHTML = s;
}}
break;
  }
}
function getOutdoors(id){
  switch(id){
  case '1':{
        var dataRequest = new XMLHttpRequest; 
        dataRequest.open('GET',"json/Aerobic-data.json"); 
        dataRequest.onload = function (){
        var aerobicData = JSON.parse(dataRequest.responseText);
        modalOutdoors(aerobicData);
        }
          dataRequest.send();
    function modalOutdoors(data){
      var i = 0;
      var s =[];
      s+=`
      <div class="modal-body">
          <div class="row">
            <div class="col-sm-5 col-md-5 col-lg-5">
                  <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
              </div>
              <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
                <div style="margin-left: 5px;">
                  <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
                  <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
                  <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
                </div>  
              </div>
          </div>
        </div>
              `
      document.getElementById("productContent").innerHTML = s;
    }}
    break;
  case '2':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalOutdoors(aerobicData);
      }
        dataRequest.send();
  function modalOutdoors(data){
    var i = 1;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
                <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
              </div>
                
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
  }}
  break;
  case '3':{
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    modalOutdoors(aerobicData);
    }
      dataRequest.send();
  function modalOutdoors(data){
  var i = 2;
  var s =[];
  s+=`
  <div class="modal-body">
      <div class="row">
        <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
              <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
              <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
            </div>
              
          </div>
      </div>
    </div>
          `
  document.getElementById("productContent").innerHTML = s;
  }}
  break;
  case '4':{
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    modalOutdoors(aerobicData);
    }
      dataRequest.send();
  function modalOutdoors(data){
  var i = 3;
  var s =[];
  s+=`
  <div class="modal-body">
      <div class="row">
        <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
              <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
              <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
            </div>
          </div>
      </div>
    </div>
          `
  document.getElementById("productContent").innerHTML = s;
  }}
  break;
  case '5':{
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    modalOutdoors(aerobicData);
    }
      dataRequest.send();
  function modalOutdoors(data){
  var i = 4;
  var s =[];
  s+=`
  <div class="modal-body">
      <div class="row">
        <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
              <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
              <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
          </div>
      </div>
    </div>
          `
  document.getElementById("productContent").innerHTML = s;
  }}
  break;
  case '6':{
    var dataRequest = new XMLHttpRequest; 
    dataRequest.open('GET',"json/Aerobic-data.json"); 
    dataRequest.onload = function (){
    var aerobicData = JSON.parse(dataRequest.responseText);
    modalOutdoors(aerobicData);
    }
      dataRequest.send();
  function modalOutdoors(data){
  var i = 5;
  var s =[];
  s+=`
  <div class="modal-body">
      <div class="row">
        <div class="col-sm-5 col-md-5 col-lg-5">
              <div><img src="${data.outdoors[i].imgs}"  class="img-modal"  alt=""></div>
          </div>
          <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
            <div style="margin-left: 5px;">
              <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.outdoors[i].name}</b></strong> </h3>
              <p><strong>Benefit</strong> ${data.outdoors[i].benefit}</p>
              <p><strong>Anatomy</strong> ${data.outdoors[i].anatomy}</p>
            </div> 
          </div>
      </div>
    </div>
          `
  document.getElementById("productContent").innerHTML = s;
  }}
  break;
    }
  }
function getBoth(id){
    switch(id){
    case '1':{
          var dataRequest = new XMLHttpRequest; 
          dataRequest.open('GET',"json/Aerobic-data.json"); 
          dataRequest.onload = function (){
          var aerobicData = JSON.parse(dataRequest.responseText);
          modalBoth(aerobicData);
          }
            dataRequest.send();
      function modalBoth(data){
        var i = 0;
        var s =[];
        s+=`
        <div class="modal-body">
            <div class="row">
              <div class="col-sm-5 col-md-5 col-lg-5">
                    <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
                </div>
                <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
                  <div style="margin-left: 5px;">
                    <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                    <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                    <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
                  </div> 
                </div>
            </div>
          </div>
                `
        document.getElementById("productContent").innerHTML = s;
      }}
      break;
    case '2':{
        var dataRequest = new XMLHttpRequest; 
        dataRequest.open('GET',"json/Aerobic-data.json"); 
        dataRequest.onload = function (){
        var aerobicData = JSON.parse(dataRequest.responseText);
        modalBoth(aerobicData);
        }
          dataRequest.send();
    function modalBoth(data){
      var i = 1;
      var s =[];
      s+=`
      <div class="modal-body">
          <div class="row">
            <div class="col-sm-5 col-md-5 col-lg-5">
                  <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
              </div>
              <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
                <div style="margin-left: 5px;">
                  <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                  <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                  <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
                </div>
              </div>
          </div>
        </div>
              `
      document.getElementById("productContent").innerHTML = s;
    }}
    break;
    case '3':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalBoth(aerobicData);
      }
        dataRequest.send();
    function modalBoth(data){
    var i = 2;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
              </div>
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
    }}
    break;
    case '4':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalBoth(aerobicData);
      }
        dataRequest.send();
    function modalBoth(data){
    var i = 3;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
              </div> 
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
    }}
    break;
    case '5':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalBoth(aerobicData);
      }
        dataRequest.send();
    function modalBoth(data){
    var i = 4;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
              </div> 
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
    }}
    break;
    case '6':{
      var dataRequest = new XMLHttpRequest; 
      dataRequest.open('GET',"json/Aerobic-data.json"); 
      dataRequest.onload = function (){
      var aerobicData = JSON.parse(dataRequest.responseText);
      modalBoth(aerobicData);
      }
        dataRequest.send();

    function modalBoth(data){
    var i = 5;
    var s =[];
    s+=`
    <div class="modal-body">
        <div class="row">
          <div class="col-sm-5 col-md-5 col-lg-5">
                <div><img src="${data.both[i].imgs}"  class="img-modal"  alt=""></div>
            </div>
            <div class="col-sm-7 col-md-7 col-lg-7 modal-item-detail">
              <div style="margin-left: 5px;">
                <h3 style="color: gray; text-align: left; font-family: tahoma; font-size: 35px;"> <strong><b>${data.both[i].name}</b></strong> </h3>
                <p><strong>Benefit</strong> ${data.both[i].benefit}</p>
                <p><strong>Benefit</strong> ${data.both[i].anatomy}</p>
              </div>  
            </div>
        </div>
      </div>
            `
    document.getElementById("productContent").innerHTML = s;
    }}
    break;
      }
    }
//End Modalbox