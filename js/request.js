$(document).ready(function() {

$('.add').click(function () {
		if ($(this).prev().val() < 5) {
    	$(this).prev().val(+$(this).prev().val() + 1);
		}
});
$('.sub').click(function () {
		if ($(this).next().val() > 0) {
    	if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
		}
});



































});