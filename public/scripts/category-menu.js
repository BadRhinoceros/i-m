$(function() {
	$('#category-menu ul li').each(function() {
		if ($(this).find('ul').length > 0) {
			$(this).addClass('has-child');
			$(this).prepend("<span class='arrow'>></span>");
		}
	});
		
		/* Разобраться */

	$('#category-menu ul > li.has-child a').on('click', function(event) {
		const currentArrow = $(this).parent().find(' > span');
		if ($(currentArrow).length > 0) {
			if ($(currentArrow).attr('class').indexOf('arrow-up') > 0) {
				$(currentArrow).removeClass('arrow-up');
				$(currentArrow).parent().find(' > ul').slideUp();
			} else {
				$(currentArrow).addClass('arrow-up');
				$(currentArrow).parent().find(' > ul').slideDown();
			}
		}
	});
});