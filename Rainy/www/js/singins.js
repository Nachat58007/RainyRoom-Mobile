$ (document).ready(function(){
 $('#signin').click(function(){
var user = $('#username').val();
var password = $('#password').val();
var error = true;
$.ajax({
 type:"GET",
 url:"http://localhost:3000/Allin",
 datatype: "json",
 success: function(data){
$.each(data,function(key,value){
if(user == value.username && password == value.password){
    error = false;
}
});
if(error == false){
 document.location="index2.html?user:"+ data[0].username ;
 
}else{
   $('#user').val('');
   $('#password').val(''); 
   alert('Wrong! Username or Password please try again');
}
}
});
return false;
 });
});
