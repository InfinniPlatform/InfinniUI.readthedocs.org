function LiveJsExample(exampleWrapperUrl) {
    var $liveExample = this.findHighlightedWithLiveExampleOnPage();
    var that = this;

    $liveExample.each(function(i, el){
        var $el = $(el);

        that.addLiveExample($el, exampleWrapperUrl);
        that.clipText($el);
    });
}

LiveJsExample.prototype.findHighlightedOnPage = function(){
    return $('.highlight');
};

LiveJsExample.prototype.findHighlightedWithLiveExampleOnPage = function(){
    var $highlighted =  this.findHighlightedOnPage();
    return $highlighted.filter(':contains(//js-demo)');
};

LiveJsExample.prototype.addLiveExample = function($el, exampleWrapperUrl){
    var scriptText = $el.text();

	var newFrame = document.createElement("iframe");
	newFrame.src = exampleWrapperUrl;	
	newFrame.classList.add("liveExampleFrame");	
	newFrame.onload = function(event) {
		var frame = event.target;
		frame.contentWindow.runScript(scriptText);
		
		var frameContentHeight = $(frame.contentWindow.$.find('.iui-live-example')[0]).outerHeight(true);
		frame.height = frameContentHeight;
	};
	
	$el.after(newFrame);
};

LiveJsExample.prototype.clipText = function($el){
    var $pre = $el.find('pre');
	var hiddenCodeRegExp = /\s*[ \S]*\/\/\s*hiddenCodeStart[\s\S]*?\/\/\s*hiddenCodeStop[ \S]*$\s*/m
    
	var s = $pre.get(0).innerHTML.replace(/\s*[ \S]*\/\/[ \S]*js[ \S]*-[ \S]*demo[ \S]*$\s*/m, '')
	 							  .replace(hiddenCodeRegExp, '');
    $pre.get(0).innerHTML = s;
};