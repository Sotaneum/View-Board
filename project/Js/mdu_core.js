(function() {
	/*
	1.0 고정된 데이터를 주고 받는 테스트 형식으로 개발
	2.0 파일을 가져와 읽어서 데이터를 입력하는 방식으로 개발, 테스트 모드 전용 콘솔 코드 기능 추가
		-혹시 모를 대비를 위하여 연습함수는 제거 안함.
	*/
    var root = this;
	var testmode = false;
    var version = '2.0';
    var core;
	/*
	> 서버에 업로드해서 사용 할 경우 아래 방식 (이 컴퓨터 자체가 서버인 경우에 이 방식 사용)
	data_url = "./list.dat"
	> 로컬에 설치해서 사용 할 경우 아래 방식(dat파일을 웹상에 올려서 사용해야 함.)
	data_url = "http://~/list.dat"
	*/
	var data_url=/*"http://duration.digimoon.net/dev/wlist/list.dat"*/ "./list.dat"
    if(typeof exports !== 'undefined') {
        core = exports;
    } else {
        core = root.core = {};
    }
	//콘솔에 출력합니다. 단, 테스트모드가 비 활성화일 경우 출력되지 않습니다.
	core.cmd=function(text){
		if (testmode==true){
			console.log(text);
		}
	}
	//버전 반환
    core.getVersion = function() {
        return version;
    }
	//기본 설정 초기화
	core.init=function(){
		core.cmd("시스템 초기화");
		list.clear();
		data.getData(data_url);
	}
	
	//데이터 추가
	core.insert = function(title,image,script,code){
		core.cmd("처리시작");
		list.add(item.getScriptSimpleTM1(image,title,'javascript:dialog.show("' + title + '","' + script + '","' + code + '","Normal")'));
		core.cmd("처리종료");
	} 
	//새로고침
	core.reload=function(){
		list.clear();
		data.getData(data_url);
		setTimeout(function(){
		var size = data.getListSize()-1;
			while (size>=0)
			{
				var title=data.getValue(size,"title");
				var img=data.getValue(size,"image");
				var script=data.getValue(size,"script");
				var code=data.getValue(size,"code");
				core.insert(title,img,script,code);
				size--;
			}
		},1000);
		
		core.cmd("로딩완료");
	}
	//연습
	core.test = function(){
		var title = "세상에 이런일이";
		var image = "./Assets/test.png";
		var script="./Assets/test.mp4";
		var code = "video";
		list.add(item.getScriptSimpleTM1(image,title,'javascript:dialog.show("' + title + '","' + script + '","' + code + '")'));
	} 

}).call(this);
core.cmd(core.getVersion());
core.init();