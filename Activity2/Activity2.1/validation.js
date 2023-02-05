function verify(){
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const company = document.getElementById("Company").value;
  const address = document.getElementById("Address").value;
  const country = document.getElementById("Country").value;

  const state = document.getElementById("State").value;
  const city = document.getElementById("City").value;

  const email = document.getElementById("Email").value;
  const number = document.getElementById("Number").value;

  const meal = document.getElementById("Meal").value;

  const cash = document.getElementById("payment1");
  const cheque = document.getElementById("payment2");
  const demandDraft = document.getElementById("payment2");

  const pNo = document.getElementById("paymentnumber").value;
  const bankName = document.getElementById("bankname").value;

  const pay = document.getElementById("payableat").value;

  event.preventDefault();


  if(fname=="" || lname=="" || company=="" || address=="" || number=="" || email=="")
  {
    alert("Fill all * marked fields");
    return false;
  }

  var pattern = "^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$";
  if(number.length>14 || !pattern.match(number)){
    alert("Invalid Phone Number");
    return false;
  }

  var pattern = "/^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/i";
  if(!pattern.match(email)){
    alert("Invalid Email Number");
    return false;
  }

  if(city== "default"){
    alert("Please select a city");
    return false;
  }

  if(state== "default"){
    alert("Please select a state");
    return false;
  }

  if(meal== "default"){
    alert("Please select a meal preference");
    return false;
  }

  if((city=="Kolkata" && state!="WestBengal") && (city=="Mumbai" && state!="Maharashtra") && (city=="Chennai" && state!="TamilNadu")){
    alert("Invalid City/State");
    return false;
  }

  if(cash.checked && cheque.checked && demandDraft.checked){
    alert("Please select only one payment method");
    return false;
  }
}
