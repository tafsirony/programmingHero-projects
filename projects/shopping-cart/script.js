var iphone = 1219;
var phoneCase = 49;
var i = 0;
// for iphone
let increaseVal = (id) => {
  document.getElementById(id).value++;
};
let decreaseVal = (id) => {
  document.getElementById(id).value--;
};
const addIphoneQty = document
  .getElementById("addIphone")
  .addEventListener("click", function () {
    let cart = getQtyInput("iphonePriceQtyInput");
    updateItemPrice("totalIphonePrice", cart, iphone);
  });

const removeIphoneQty = document
  .getElementById("removeIphone")
  .addEventListener("click", function () {
    const cart = getQtyInput("iphonePriceQtyInput");
    updateItemPrice("totalIphonePrice", -1 * cart, iphone);
  });
function getQtyInput(id) {
  const qty = document.getElementById(id).value;
  let qtyNum = parseFloat(qty);
  console.log(qtyNum);
  return qty;
}
function updateItemPrice(id, addedQty, itemPrice) {
  const current = document.getElementById(id).innerText;
  const currentNum = parseFloat(current);
  const total = itemPrice * addedQty;
  const totalItemCartPrice = total + currentNum;
  document.getElementById(id).innerText = totalItemCartPrice;
  allTotalPrice(totalItemCartPrice);
}

// for case
const addCaseQty = document
  .getElementById("addCaseQty")
  .addEventListener("click", function () {
    const cart = getQtyInput("caseQtyInput");
    updateItemPrice("totalCasePrice", cart, phoneCase);
  });
const removeCaseQty = document
  .getElementById("removeCaseQty")
  .addEventListener("click", function () {
    const cart = getQtyInput("caseQtyInput");
    updateItemPrice("totalCasePrice", -1 * cart, phoneCase);
  });
// total price
function allTotalPrice(id) {
  //subtotal
  const current = document.getElementById("subTotal").innerText;
  const currentNum = parseFloat(current);
  const total = id + currentNum;
  document.getElementById("subTotal").innerText = total;
  //tax
  const toTalTax = total * 0.15;
  document.getElementById("tax").innerText = toTalTax;
  //   totalPrice
  document.getElementById("totalPrice").innerText = total + toTalTax;
}
