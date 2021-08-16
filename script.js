function createpassword() {
    var chars = "0987654321QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_";
    var password_length = 12;
    var password="";
    for(i=0;i<password_length;i++){
      var random_number=Math.floor(Math.random() * chars.length);
      password += chars.substring(random_number,random_number+1);
    }
    document.getElementById("password").value=password
  }
  
  
  