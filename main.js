$("document").ready(function(){
	// make two functions to add and remove the class in the span
	function add(){
		$(".copied").addClass("bounce-effect");
	}
	function remove(){
		$(".copied").removeClass("bounce-effect");
	}

	// call the function and copy the text on clicking the button
	$(".copy-btn").click(function(){
		$("#textField").select();
		document.execCommand("copy");
		add();
		setTimeout(remove, 800)
	})
})