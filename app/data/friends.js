$("#submit").on("click", function(event){
	formValidation();
	var currentUrl = window.location.origin
	if(formValidation() == true) {
		var name = $("#name").val().trim();
		var pic = $("#profileImage").val().trim();
		var score = [];
		
		for(var i = 1; i < 11; i++){
			var input = $(`#q${i}`).val();
			score.push(input);
		}
		
		var person = new Friend(name, pic, score);

		$.post(currentUrl + "/api/friends", person, function(data){
			$("#friendName").text(data.name);
			$("#friendPicture").attr("src", data.pic);
			$('#myModal').modal("toggle");
		});
	}
	else 
	{
		alert("Please fill out all information");
	}
	return false
});

function Friend(name, pic, score) {
	this.name = name;
	this.pic = pic;
	this.score = score;
};

function formValidation(){
	var isValid = true;
	$(".form-control").each(function(){
		if( $(this).val() === ""){
			isValid = false
		}
	});
	$(".selected").each(function(){
		if($(this).val() === null){
			isValid = false;
		}
	});
	return isValid
};