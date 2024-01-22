"use strict";
//variables declaration
document.addEventListener("DOMContentLoaded", () => {
let _head = document.querySelector("#password-head");
let _pass=document.querySelector("#password");
let _msg=document.querySelector("#message");
let _strength=document.querySelector("#strength");
_pass.addEventListener("input", ()=>{
	if(_pass.value.length>0){
		_msg.style.display="block";
		_head.style.display="block";
	}else{
		_msg.style.display = "none";
        _head.style.display = "none";
	}
	if(_pass.value.length<=4){
		_strength.innerHTML="Weak";
		_strength.style.color="red";
		_msg.style.color = "red";
        _head.style.color = "red";

	}else if(_pass.value.length>4 && _pass.value.length<8){
		_strength.innerHTML="Medium";
		_strength.style.color="Yellow";
		_msg.style.color = "Yellow";
		_head.style.color="Yellow";

	}else if(_pass.value.length>=8){
		_strength.innerHTML="Strong";
		_strength.style.color = "green";
		_msg.style.color = "green";
        _head.style.color = "green";
	}else{
		_msg.style.display = "none";
        _head.style.display = "none";
		_strength.style.display = "none";
	}

});	
});


