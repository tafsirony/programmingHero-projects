function handleGenerateNum() {
  let randomNumber = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.round(Math.random() * 9);
    randomNumber.push(random);
  }
  console.log(randomNumber.toString());
  // document.getElementById("generateInputBox").value = randomNumber.toString().replace(/,/g, "");
  document.getElementById("generateInputBox").value = randomNumber.toString().split(',').join(" ");
}
function handleNumInput(num){
//  const val= document.getElementById(id).value;
//  const valNum = parseInt(val);
 document.getElementById("passwordInputBox").value += num;
}
function handleErase(){
  let passBoxArr = [];
  let passBox = document.getElementById("passwordInputBox").value;
  //  passBoxNum = parseInt(passBox);
  for(let i=0;i<passBox.length;i++){
    passBoxArr.push(passBox[i])
  }
  // passBoxArr =passBox.split(" ");
  // console.log(passBoxArr);
  // passBoxArr.pop();
  passBoxArr.pop()
  console.log(passBoxArr);
  let boxVal = passBoxArr.toString().split(",").join("");
  document.getElementById("passwordInputBox").value = boxVal;
}
function handleClr(){
  document.getElementById("passwordInputBox").value = "";
}
function handleMatch(){
  const generatebox = document.getElementById("generateInputBox").value.split(' ').join('');
  const inputBox = document.getElementById("passwordInputBox").value;
  if(generatebox === inputBox){ 
    document.getElementById('success').style.display="block";
    document.getElementById('error').style.display="none";
  }else{
    document.getElementById('error').style.display="block";
    document.getElementById('success').style.display="none";
  }
}