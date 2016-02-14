jQuery(document).ready(function($) {
	$('.shirt-builder-toggle').on('click', function(event) {
		event.preventDefault();

		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
		} else {
			$(this).addClass('open');
		}
	});
});