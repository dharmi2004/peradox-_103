



submitForm = () => {
   let password = document.myform.password.value
 let   Cpassword = document.myform.Cpassword.value
    if (password == null || password != Cpassword) {
        alert("password does not match")
        return true;

    }else {
    let fname,lname,username,email,gender,password,Cpassword;
 fname = document.myform.Fname.value
 lname = document.myform.lname.value
 username = document.myform.username.value
 email = document.myform.email.value
 gender = document.myform.gender.value
 password = document.myform.password.value
 Cpassword = document.myform.Cpassword.value

 let user_records = new Array();
 user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
 if (user_records.some((v) => { return v.email == email })) {
    alert(email + " is already register.")
    return false;
    
} else{

    user_records.push({
       "fname" : fname,
       "lname" : lname,
       "username" : username,
       "email": email,
       "gender" : gender,
       "password" : password,
       "Cpassword" : Cpassword
    })
}

    localStorage.setItem("users", JSON.stringify(user_records))
    alert(email + "Thanks for registration. \n try to login now")
    window.location.href = "signin.html";

}
return true;
}