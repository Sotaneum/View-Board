(function() {
    var root = this;
    var version = '1.0';
    var item;
    if(typeof exports !== 'undefined') {
        item = exports;
    } else {
        item = root.item = {};
    }
	//버전 반환
    item.getVersion = function() {
        return version;
    }
	//심플 테마
	item.getScriptSimpleTM1=function(image,title,url){
		var img_size=128
		return "<a href='" + url + "' style='text-decoration:none'><table width=100%><tr><td width=" + img_size + "><img src='" + image + "' height=" + img_size + " width=" + img_size + "></td><td><center>" + title + "</center></td></tr></table></a>";
	}
}).call(this);