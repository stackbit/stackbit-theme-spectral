(function($) {
    var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper')

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $('#header').outerHeight()
			});

	// Header.
		if ($('#banner').length > 0
		&&	$('#header').hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$('#banner').scrollex({
				bottom:		$('#header').outerHeight() + 1,
				terminate:	function() { $('#header').removeClass('alt'); },
				enter:		function() { $('#header').addClass('alt'); },
				leave:		function() { $('#header').removeClass('alt'); }
			});

		}
})(jQuery);