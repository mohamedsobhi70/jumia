let discount = document.querySelectorAll(".discount span");
let price = document.querySelectorAll(".price-num");
let oldPrice = document.querySelectorAll(".old-price-num");

for (let i = 0; i < discount.length; i++) {
  discount[i].innerHTML =
    (((oldPrice[i].innerHTML - price[i].innerHTML) / oldPrice[i].innerHTML) *
    100).toFixed(2) +" % discount";
}
