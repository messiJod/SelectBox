let select = document.querySelector("#selectbox");


let options = document.querySelectorAll("option");
console.log(options);

select.addEventListener("click", function () {
    
});



options.forEach((e) => {
    e.addEventListener("change", function (e2) {
      console.log(e2);
    });
  });