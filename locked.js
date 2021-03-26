/**
 * ".locked" polyfill
 */
(function(){
    "use strict";
    var el = document.createElement("div");
    el.style.cssText = "pointer-events:auto";

    if(el.style.pointerEvents !== "auto"){
        el = null;

        var _lock = function(evt){
            evt = evt || window.event;
            var el = evt.target || evt.srcElement;
            if(el && /\slocked\s/.test(" " + el.className + " ")){
                if(evt.stopPropagation){
                    evt.preventDefault();
                    evt.stopPropagation();
                }else{
                    evt.returnValue = true;
                    evt.cancelBubble = true;
                }
            };
        };
        if(document.addEventListener){
            document.addEventListener("mousedown", _lock, false);
            document.addEventListener("contextmenu", _lock, false);
        }else{
            document.attachEvent("onmousedown", _lock);
            document.attachEvent("oncontextmenu", _lock);
        }
    };
})();