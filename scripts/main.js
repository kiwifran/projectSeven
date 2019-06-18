const letterByLetter = () => {
	$(".helloWorld").html(function(i, html) {
		const chars = $.trim(html).split("");
		return `<span class="letters"> ${chars.join(
			'</span><span class="letters">'
		)}</span>`;
	});
};
const scrollDown = () => {
	$(".arrowDown").on("click", function(event) {
		$("html, body").animate(
			{
				scrollTop: $("main").offset().top
			},
			1000
		);
	});
};
const $upButton = $(".arrowUp");
const upButtonShow = () => {
	$(window).scroll(() => {
		if ($(window).scrollTop() > 900) {
			$upButton.css({
				display: "block"
			});
		} else {
			$upButton.css({
				display: "none"
			});
		}
	});
};
const scrollUp = () => {
	$(".arrowUp").on("click", function(e) {
		$("html, body").animate(
			{
				scrollTop: $("main").offset().top
			},
			1200
		);
	});
};
const scrollNavColor = () => {
	$(document).scroll(() => {
		const $nav = $("nav");
		$nav.toggleClass(
			"scrolled",
			$(this).scrollTop() > $(window).height() + 10 + $nav.height()
		);
	});
};
const scrollLinks = () => {
	$('a[href*="#"]').on("click", function(e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top
			},
			1000
		);
	});
};
$(function() {
	AOS.init();
	letterByLetter();
	scrollDown();
	upButtonShow();
	scrollUp();
	scrollNavColor();
	scrollLinks();
});
