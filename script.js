const order = document.querySelector(".order");
let deleteOrder = document.querySelector(".deleteOrder");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let p = document.querySelector(".p");

deleteOrder.addEventListener("click", function (el) {
  el.innerHTML = "";

  console.log(deleteOrder);
});

let counter = 0;
p.innerHTML = "";

plus.addEventListener("click", () => {
  counter ++;
  p.innerHTML = counter;
  
});
minus.addEventListener("click", () => {
    counter--;
  if (minus >= 0||minus<=0) {
    return count==="";
  }else{
    p.innerHTML = counter;
  }

});
