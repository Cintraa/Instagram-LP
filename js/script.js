var slider = document.querySelector('.slider');
var numero = 2
var btn = document.querySelector('.botao');
var submit = document.querySelector('.input-submit-container input');
var input_1 = document.querySelector('.inp1');
var input_2 = document.querySelector('.inp2');
var input_3 = document.querySelector('.inp3');
var input_4 = document.querySelector('.inp4');

setInterval(function(){
	if (numero == 1){
		slider.style.backgroundImage = "url(images/slider-1.jpg)";
		numero = 2
	} else if(numero == 2){
		slider.style.backgroundImage = "url(images/slider-2.jpg)";
		numero = 3
	} else if(numero == 3){
		slider.style.backgroundImage = "url(images/slider-3.jpg)";
		numero = 4

	} else if(numero == 4){
		slider.style.backgroundImage = "url(images/slider-4.jpg)";
		numero = 5
	} else if(numero == 5){
		slider.style.backgroundImage = "url(images/slider-5.jpg)";
		numero = 1
	} else{
		alert("Ocorreu um erro inesperado")
		slider.style.backgroundColor = "white";
		numero = 1
	}
}, 5000);

btn.onclick = function(){
	location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522ufmb9t1b5o963ostj481rcd8qf64qzgwmkn87d106lreiwak5oc%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D278f6d88-9005-4628-b873-d3d2903f061b&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522ufmb9t1b5o963ostj481rcd8qf64qzgwmkn87d106lreiwak5oc%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0";
}

setInterval(function(){
	if(!input_1.value == "" & !input_2.value == "" & !input_3.value == "" & !input_4.value == ""){
		submit.style.opacity = "1";
	} else{
		submit.style.opacity = "0.3";
	}
}, 1000);