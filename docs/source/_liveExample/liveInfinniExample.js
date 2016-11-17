function LiveInfinniExample(exampleWrapperUrl) {
    var $liveExample = this.findHighlightedWithLiveExampleOnPage();
    var that = this;

    $liveExample.each(function(i, el){
        var $el = $(el);
		
        that.addLiveExample($el, exampleWrapperUrl);
        that.clipText($el);
    });
}

LiveInfinniExample.prototype.findHighlightedOnPage = function(){
    return $('.highlight');
};

LiveInfinniExample.prototype.findHighlightedWithLiveExampleOnPage = function(){
    var $highlighted =  this.findHighlightedOnPage();
    return $highlighted.filter(':contains(//infinni-ui-demo)');
};

LiveInfinniExample.prototype.addLiveExample = function($el, exampleWrapperUrl){
    var text =  this.clearExampleText($el.text());
    var metadata = JSON.parse(text);

    metadata = {
        LinkView: {
            InlineView: {
                View: metadata
            }
        }
    };

	var newFrame = document.createElement("iframe");
	newFrame.src = exampleWrapperUrl;	
	newFrame.classList.add("liveExampleFrame");	
	newFrame.onload = function(event) {
		var frame = event.target;
		frame.contentWindow.runPlatformWithMetadata(metadata);
		
		var frameContentHeight = $(frame.contentWindow.$.find('.iui-live-example')[0]).outerHeight(true);
		frame.height = frameContentHeight;
	};
	
	$el.after(newFrame);
};

LiveInfinniExample.prototype.clearExampleText = function(text){
    return text.replace(/\/\/infinni-ui-demo|\/\/infinni-ui-display-begin|\/\/infinni-ui-display-end/g, '');
};

LiveInfinniExample.prototype.clipText = function($el){
    var $pre = $el.find('pre');
    var s = $pre.get(0).innerHTML.replace(/^\s*[ \S]*\/\/[ \S]*infinni[ \S]*-[ \S]*ui[ \S]*-[ \S]*demo[ \S]*$\s*/m, '');
    s = s.replace(/[\s\S]*\/\/[ \S]*infinni[ \S]*-[ \S]*ui[ \S]*-[ \S]*display[ \S]*-[ \S]*begin[ \S]*$\s*/m, '');
    s = s.replace(/^[ \S]*\/\/[ \S]*infinni[ \S]*-[ \S]*ui[ \S]*-[ \S]*display[ \S]*-[ \S]*end[\s\S]*/m, '');
    $pre.get(0).innerHTML = s;
};
