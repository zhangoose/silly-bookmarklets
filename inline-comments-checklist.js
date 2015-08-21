javascript:
    (function(){
    	var v = "1.3.2";
    
    	if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
    		var done = false;
    		var script = document.createElement("script");
    		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
    		script.onload = script.onreadystatechange = function(){
    			if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
    				done = true;
    				initMyBookmarklet();
    			}
    		};
    		document.getElementsByTagName("head")[0].appendChild(script);
    	} else {
    		initMyBookmarklet();
    	}
    	
    	function initMyBookmarklet() {
    		(window.myBookmarklet = function() {
                $(".js-discussion-item").each(function(){
                    $(this).click(function(){
                        parent = $(this).parent();                        
                        newElem = $(this).clone();
                        $(this).hide();
                        parent.append(newElem.addClass("completed-inline").css("opacity","0.3"));
                        $(".completed-inline").each(function(){
                            $(this).click(function(){
                                elemId = $(this).attr('id');
                                $(this).remove();
                                $("#" + elemId).show();
                            });
                        });
                    });
                });
    		})();
    	}
    })();