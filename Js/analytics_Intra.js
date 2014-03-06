$( document ).ready(function() {
    console.log( "ready!" );

	$('.titledUl').click(function() {
		console.log('clicked');
	    $(this).children().show();
	    console.log("should show");
	});

});
