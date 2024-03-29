(function() {
	/*
	1.0 기본 파일로 데이터를 가져오는 방식 채택, 인덱스 값하고 이름을 주면 해당 값에 따른 데이터 반환 기능 추가
		- 차후 DB와 연동해서 사용하는 방식 구현 예정.	
	*/
    var root = this;
    var version = '1.0';
	var data=[];
	var list=new Array();
    if(typeof exports !== 'undefined') {
        data = exports;
    } else {
        data = root.data = {};
    }
	//버전 반환
    data.getVersion = function() {
        return version;
    }
	//데이터를 가져와서 리스트화 (데이터 파일 경로)
	data.getData=function(url){
		list.length = 0;
		$.get(url, function(data) {
            //var fileDom = $(data);

            var lines = data.split("\n");

            $.each(lines, function(n, elem) {
				list.push(elem);
            });
			
        });
	}
	//리스트의 크기를 반환
	data.getListSize=function(){
		return list.length;
	}
	//인덱스하고 이름을 주면 값을 반환한다.
	data.getValue=function(idx,name){
		var line=list[idx];
		var temp=line.split("*(*");
		var temp_size=temp.length-1;
		while (temp_size>=0)
		{
			var word = temp[temp_size].split("=");
			if (word[0]==name)
			{
				return word[1];
			}
			temp_size=temp_size-1;
		}
		return "";
	}
}).call(this);