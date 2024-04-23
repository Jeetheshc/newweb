function handlesubmit(){
    const message = document.getElementById('message');
    const name = document.getElementById('Name1').value;
    const email = document.getElementById('Email1').value;
    const password = document.getElementById('Password1').value;


    message.style.display = "none";
    if(name.length == 0){
      message.innerText = "Please Enter your full name"
      message.style.display= "block";
      return false;
    }
    if(password.length < 8){
      message.innerText = "Password must be greater than 8 letters"
      message.style.display= "block";
      return false;
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
    {
      message.innerText = "Invalid Email id"
      message.style.display= "block";
      return false;
    }
    alert("Registration Seccessfull")
    return false;
  }