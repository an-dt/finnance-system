/*!
    * Start Bootstrap - SB Admin v7.0.5 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2022 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

var addTransactionBtn = document.getElementById("addTransactionBtn");
var addTransactionDetails = document.getElementById("addTransactionDetails");

addTransactionBtn.addEventListener("click", function() {

  if (addTransactionDetails.style.display === "none") {
    addTransactionDetails.style.display = "block"; // Hiển thị phần tử
    
    document.addEventListener('mouseup', function(e) {
      var container = document.getElementById('addTransactionDetails');
      if (!container.contains(e.target)) {
          container.style.display = 'none';
      }
  });
  } else {
    addTransactionDetails.style.display = "none"; // Ẩn phần tử đi
  }
  
});

var addcategory = document.getElementById("addcategory");
var addcategorydetails = document.getElementById("addcategorydetails");
addcategory.addEventListener("click", function() {
  if (addcategorydetails.style.display === "none") {
    addcategorydetails.style.display = "block";
    if( adddatedetails.style.display === "block"){
      adddatedetails.style.display = "none";
    }
  } else {
    addcategorydetails.style.display = "none";
  }
});

//kích vào thì hiện datetrans
var adddate = document.getElementById("adddate");
var adddatedetails = document.getElementById("adddatedetails");

adddate.addEventListener("click", function() {
  if (adddatedetails.style.display === "none") {
    adddatedetails.style.display = "block";
    if( addcategorydetails.style.display === "block"){
      addcategorydetails.style.display = "none";
    }
  }
   else {
    adddatedetails.style.display = "none";
  }
  
});



var closeBtn = document.getElementById("closeBtn");
var addTransactionDetails = document.getElementById("addTransactionDetails");

closeBtn.addEventListener("click", function() {
  if (addTransactionDetails.style.display === "none") {
    addTransactionDetails.style.display = "block"; // Hiển thị phần tử
    
  } else {
    addTransactionDetails.style.display = "none"; // Ẩn phần tử đi
  }
});
// var closeBtn = document.getElementById("closeBtn");
//   var dashboard = document.getElementById("close");

//   closeBtn.addEventListener("click", function() {
//     dashboard.style.display = "none";
//   });
