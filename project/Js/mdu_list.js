(function() {
	/*
	1.0 기본 리스트 값 삭제, 추가 기능 추가	
	*/
    var root = this;
    var version = '1.0';
	var idx = 0;
    var list;
    if(typeof exports !== 'undefined') {
        list = exports;
    } else {
        list = root.list = {};
    }
	//버전 반환
    list.getVersion = function() {
        return version;
    }
	//리스트 값 추가 (아이템 코드)
	list.add=function(script){
		var scp="<div id='list_item" + idx + "' class='list_item'>idx:" + idx + "<br>" + script + "</div>"
		$('#list').append(scp);
		idx++;
	}
	//리스트 값 삭제 (인덱스)
	list.remove=function(idx){
		$('#list_item'+idx).remove();
	}
	//초기화
	list.clear=function(){
		idx--;
		while (idx>=0)
		{
			list.remove(idx);
			idx--;
		}
		idx=0;
	}
}).call(this);