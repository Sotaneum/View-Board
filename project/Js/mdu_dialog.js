(function() {
	/*
	1.0 기본 3개까지 화면에 표시 가능토록 설정
	2.0 화면 표시 제한 제거
	*/
    var root = this;
    var version = '2.0';
    var dialog;
	var idx=1;
    if(typeof exports !== 'undefined') {
        dialog = exports;
    } else {
        dialog = root.dialog = {};
    }
	//버전 반환
    dialog.getVersion = function() {
        return version;
    }
	//다이어로그 켜기 (제목, 내용 , 내용의 성질) / 내용의 성질 : http(웹 가져오기), text(웹 코드)
	dialog.show=function(title, script,code,mode){
		var name = 'dialog';
		if (mode=="error"){
			name+='_error';
		}else{
			name+=idx;
			idx++;
		}
		$("#dialog").append("<div id='" + name + "'></div>");
		name="#"+name;
		$(name)
			.dialog({
              title: title,
				maxWidth:4096,
				maxHeight: 4096,
				width: 320,
				height: 240,
				show: {                // 애니메이션 효과 - 보여줄때
					effect: "blind",
					duration: 1000
				},
				hide: {                // 애니메이션 효과 - 감출때
					effect: "explode",
					duration: 1000,
				}
			})
			.dialog('open'); 
		 $(name).on('dialogclose', function(event) {
			 $(name).remove();
		 });
		if (code == "http")
		{
			$(name).load(script);
		}
		else if (code=="text")
		{
			$(name).html(script);
		}
		else if (code=="video")
		{
			var data='<video id="clip" controls="controls" poster="" title="clip" height=100% width=100%><source src="' + script + '" type="video/mp4"/></video>'
			$(name).html(data);
		}
		else
		{
			$(name).html(script);
		}
	}

}).call(this);