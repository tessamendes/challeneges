$("#useBilling").click(function() {
	// console.log("working") //checking if function is working
	// let home = $("#home"); //need to edit
	// let billing = $("#billing"); //need to edit

	if (this.checked){
		$("#home").val($("#billing").val());
		$("#home").prop("disabled",true);
	}
	else{
		$("#home").val("");
		$("#home").prop("disabled",false);}
	
	})


