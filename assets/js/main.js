;(function($){
	var $mainContent = $("#mainContent");
	var $arMSArticle = $(".msArticle", $mainContent);
	var $input = $("input");
	$("p", $arMSArticle).hide();
	$("p", $arMSArticle[0]).show();
	$("h1", $arMSArticle).on("click", function(e){
		var $this = $(this);
		if($this.next("p").is(":visible")){
			$this.next("p").hide("slow");
			$this.find("span").html("+").css("color", "#333").css("line-height", "34px");
		} else {
			$this.next("p").show("slow");
			$this.find("span").html("&ndash;").css("color", "#1da7dd").css("line-height", "30px");
		};
	});
	$input.on("focus", function(){
		var $this = $(this);
		if($this.val() === "Search..."){
			$this.val("");
		};
	}).on("blur", function(){
		var $this = $(this);
		if($.trim($this.val()) === ""){
			$this.val("Search...")
		};
	});
})(jQuery)