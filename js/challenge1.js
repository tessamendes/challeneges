$("#subscribe").click(function(){
	//$("#emailField").toggle()
	console.log("here");
	if (this.checked){
		$("#emailField").css("display","block");
	}
	else{
		$("#emailField").css("display","none");
	}
		//Set value of home = to value of billing
		//Disable home
	});


//THIS IS THE OLD CODE I'M REWRITTING
// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
// }

