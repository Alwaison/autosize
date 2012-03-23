// Autosize 1.6 - jQuery plugin for textareas
// (c) 2011 Jack Moore - jacklmoore.com
// license: www.opensource.org/licenses/mit-license.php
(function(d,e){var c="hidden",h='<textarea style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden">',b=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing"],g="oninput",a="onpropertychange",f=d(h)[0];f.setAttribute(g,"return");if(d.isFunction(f[g])||a in f){d.fn.autosize=function(i){return this.each(function(){var k=this,j=d(k).css({overflow:c,overflowY:c,wordWrap:"break-word"}),q=d(h).addClass(i||"autosizejs")[0],n=j.height(),m=parseInt(j.css("maxHeight"),10),p,l=b.length;m=m&&m>0?m:90000;function o(){var r,s;if(!p){p=true;q.value=k.value;q.style.overflowY=k.style.overflowY;q.style.width=j.css("width");q.scrollTop=0;q.scrollTop=90000;r=q.scrollTop;s=c;if(r>m){r=m;s="scroll"}else{if(r<n){r=n}}k.style.overflowY=s;k.style.height=k.style.minHeight=k.style.maxHeight=r+"px";setTimeout(function(){p=false},1)}}while(l--){q.style[b[l]]=j.css(b[l])}d("body").append(q);if(a in k){if(g in k){k[g]=k.onkeyup=o}else{k[a]=o}}else{k[g]=o}d(window).resize(o);j.bind("autosize",o);o()})}}else{d.fn.autosize=function(){return this.each(function(){var j=this,i=d(j).css("minHeight",50)})}}}(jQuery));