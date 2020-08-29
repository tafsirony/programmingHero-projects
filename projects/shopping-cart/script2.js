// document.getElementById("addCaseQty").addEventListener("click", function () {
//   const caseInput = document.getElementById("caseQtyInput");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * 59;
//   document.getElementById("totalCasePrice").innerText = caseTotal;
// });

// document.getElementById("removeCaseQty").addEventListener("click", function () {
//     const caseInput = document.getElementById("caseQtyInput");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("totalCasePrice").innerText = caseTotal;
//   });
const iphonePrice = 1219;
const phoneCasePrice = 59;
// document.getElementById("addCaseQty").addEventListener("click", function () {
//   handleProductChange(true);
// });
// document.getElementById("removeCaseQty").addEventListener("click", function () {
//   handleProductChange(false);
// });

// function handleProductChange(isIncrease) {
//   const caseInput = document.getElementById("caseQtyInput");
//   const caseCount = parseInt(caseInput.value);
//   let caseNewCount = caseCount;
//   if (isIncrease == true) {
//     caseNewCount = caseCount + 1;
//   } else if (isIncrease == false && caseCount > 0) {
//     caseNewCount = caseCount - 1;
//   }
//   caseInput.value = caseNewCount;
//   const caseTotal = caseNewCount * phoneCasePrice;
//   document.getElementById("totalCasePrice").innerText = caseTotal;
// }

// function handlePhoneChange(isIncrease){
//   const iphoneInput = document.getElementById('iphonePriceQtyInput');
//   const iphoneCount = parseInt(iphoneInput.value);
//   let iphoneNewCount = iphoneCount;
//   if(isIncrease == true){
//     iphoneNewCount = iphoneCount+1;
//   }else if(isIncrease == false && iphoneCount>0){
//     iphoneNewCount = iphoneCount-1;
//   }
//   iphoneInput.value = iphoneNewCount;
//   const iphoneTotal = iphoneNewCount*iphonePrice;
//   document.getElementById('totalIphonePrice').innerText = iphoneTotal;
// }

function handleProductChange(product, isIncrease) {
  const productInput = document.getElementById(product + "QtyInput");
  const productCount = parseInt(productInput.value);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  } else if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  productInput.value = productNewCount;
  // const iphoneTotal = productNewCount * iphonePrice;
  let productTotal = 0;
  if (product == "iphone") {
    productTotal = productNewCount * iphonePrice;
  }
  if (product == "case") {
    productTotal = productNewCount * phoneCasePrice;
  }
  document.getElementById(product + "TotalPrice").innerText = productTotal;
  calculateTotal();
}
function calculateTotal() {
  // const phoneCount = document.getElementById("iphoneQtyInput");
  // const phoneCountNum = parseInt(phoneCount.value);
  // const caseCount = document.getElementById("caseQtyInput");
  // const caseCountNum = parseInt(caseCount.value);
  const phoneCountNum = getQtyVal('iphone');
  const caseCountNum =getQtyVal('case');
  // const subTotal = phoneCountNum * iphonePrice + caseCountNum * phoneCasePrice;
  const subTotal = phoneCountNum * iphonePrice + caseCountNum * phoneCasePrice;
  document.getElementById("subTotal").innerText = subTotal;
  const tax = subTotal * 0.15;
  document.getElementById("tax").innerText = tax;
  document.getElementById("totalPrice").innerText = subTotal + tax;
}
function getQtyVal(product){
  const productInput = document.getElementById(product + "QtyInput");
  const productCount = parseInt(productInput.value);
  return productCount;
}