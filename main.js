/*facebook*/
function facebook(){
	window.open('http://www.facebook.com/sharer/sharer.php?u=http://fakeman.shop');
}
/*kakao*/
function kakao(){
	 Kakao.init("7c9dd3736a9b7447af27693340fc2398");      // 사용할 앱의 JavaScript 키를 설정
     Kakao.Link.sendDefault({
           objectType:"feed"
         , content : {
               title:"가짜사나이 교관 중 나는 누구?"   // 콘텐츠의 타이틀
             , description:"나와 맞는 가짜사나이 교관 찾기"   // 콘텐츠 상세설명
             , imageUrl:"img/fakeman.jpg"   // 썸네일 이미지
             , link : {
                   mobileWebUrl:"http://fakeman.shop"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                 , webUrl:"http://fakeman.shop" // PC버전 카카오톡에서 사용하는 웹 링크 URL
             }
         }
         , social : {
               likeCount:0      // LIKE 개수
             , commentCount:0    // 댓글 개수
             , sharedCount:0     // 공유 회수
         }
         , buttons : [
             {
                   title:"나도 해볼까?"    // 버튼 제목
                 , link : {
                     mobileWebUrl:"http://fakeman.shop"   // 모바일 카카오톡에서 사용하는 웹 링크 URL
                   , webUrl:"http://fakeman.shop" // PC버전 카카오톡에서 사용하는 웹 링크 URL
                 }
             }
         ]
     });
}

/*naver*/
function naver(){
	window.open('http://share.naver.com/web/shareView.nhn?url='+encodeURIComponent('http://fakeman.shop')+'&title='+encodeURIComponent('롤 포지션 테스트'));
}


/*Ad*/
function Ad(){
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//tab2.clickmon.co.kr/pop/wp_ad_728_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207');
	
	if (/android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent))
	{(function(){document.writeln('<iframe width="320" height="100" allowtransparency="true" src="https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
	else{(function(){document.writeln('<iframe width="728" height="90" allowtransparency="true" src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
}

function Ad2(){
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//mtab.clickmon.co.kr/pop/wp_m_320_100_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207');	
	
	(function(cl,i,c,k,m,o,n){m=cl.location.protocol+c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);
	n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
	})(document,'script','//tab2.clickmon.co.kr/pop/wp_ad_728_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207');
	
	if (/android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(navigator.userAgent))
	{(function(){document.writeln('<iframe width="320" height="100" allowtransparency="true" src="https://mtab.clickmon.co.kr/pop/wp_m_320_100.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
	else{(function(){document.writeln('<iframe width="728" height="90" allowtransparency="true" src="https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1077454%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL" frameborder="0" scrolling="no"></iframe>');})();}
}


function start(){
	var language = document.getElementById('language');
	language = language.options[language.selectedIndex].text;
	sessionStorage.setItem('language', language);
	location.href = "test1.html"
}

function changeLanguage(){
	var language = document.getElementById('language');
	language = language.options[language.selectedIndex].text;
	sessionStorage.setItem('language', language);
	
	if(language == '한국어'){
		$('#start_box').text('검사 시작!');
	}else{
		$('#start_box').text('Start Testing');
	}
}


function nextpage() {
	var language = sessionStorage.getItem('language');
	
	var ans1 = [];
	var go = true; 
	for(var i = 1; i <= 8; i++) {
		var check = document.getElementsByName('q'+i);
		var temp = false;
		for(var j = 0; j < check.length; j++){
			if(check[j].checked == true){
				temp = true; 
				ans1.push(check[j].value);
			}
		}
		if(temp == false){ 
			if(language == '한국어'){
				alert(i+'번째 문항에 응답해주세요');
			}else{
				alert('Please respond to question ' + i);
			}
			go = false;
			break;
		}
	}
	if(go==true){
		sessionStorage.setItem('ans1', ans1);
		location.href = "test2.html"
	}
}



function resultpage() {
	var language = sessionStorage.getItem('language');
	
	var ans2 = [];
	var go = true; 
	for(var i = 11; i <= 17; i++) {
		var check = document.getElementsByName('q'+i);
		var temp = false;
		for(var j = 0; j < check.length; j++){
			if(check[j].checked == true){
				temp = true; 
				ans2.push(check[j].value);
			}
		}
		if(temp == false){ 
			if(language == '한국어'){
				alert(i+'번째 문항에 응답해주세요');
			}else{
				alert('Please respond to question ' + i);
			}
			go = false;
			break;
		}
	}
	if(go==true){
		sessionStorage.setItem('ans2', ans2);
		location.href = "result.html"
	}
}

function calc(){
	var ans1 = sessionStorage.getItem('ans1');
	var ans2 = sessionStorage.getItem('ans2');
	var ans = (ans1+','+ans2).split(',');
	
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	
	for(var i = 0; i < 17; i++){
		switch (ans[i]) {
		case 'a':
			a+=1;
			break;
		case 'b':
			b+=1;
			break;
		case 'c':
			c+=1;
			break;
		case 'd':
			d+=1;
			break;
		case 'e':
			e+=1
			break;
		}
	}
	
	var language = sessionStorage.getItem('language');
	if(language == 'English'){
		var eng = 'abcde';
		var result = 'abcde';
		var message = 'abcde';
		
		var temp = a;
		if(temp >= 7) {
			message = "abcde";
		}
		if(temp >= 10) {
			message = "abcde";
		}
		
		if(temp < b) {
			temp = b;
			eng = "abcde";
			result = "abcde";
			message = "abcde";
			if(temp >= 7) {
				message = "abcde";
			}
			if(temp >= 10) {
				message = "abcde";
			}
		}
		if(temp < c) {
			temp = c;
			eng = "abcde";
			result = "abcde";
			message = "abcde";
			if(temp >= 7) {
				message = "abcde";
			}
			if(temp >= 10) {
				message = "abcde";
			}
		}
		if(temp < d) {
			temp = d;
			eng = "abcde";
			result = "abcde";
			message = "abcde";
			if(temp >= 7) {
				message = "abcde";
			}
			if(temp >= 10) {
				message = "abcde";
			}
		}
		if(temp < e) {
			temp = e;
			eng = "abcde";
			result = "abcde";
			message = "abcde";
			if(temp >= 7) {
				message = "abcde";
			}
			if(temp >= 10) {
				message = "abcde";
			}
		}
	}else{
		var eng = 'img/LEE.png';
		var result = '이근 대위';
		var message = "\"너 인성 문제 있어?\"<br>\"벌 존나 많아 여기, 알겠어?\"";
		
		var temp = a;
		
		
		if(temp < b) {
			temp = b;
			eng = "img/agentH.jpg";
			result = "AGENT H";
			message = "\"가자 2번\"<br>\"XX 누가 침뱉으래?\"";
			
		}
		if(temp < c) {
			temp = c;
			eng = "img/shovel.png";
			result = "야전삽";
			message = "\"맛있게 먹엉~\"<br>\"교관은 교육생 말을 무조건 믿어\"";
			
		}
		if(temp < d) {
			temp = d;
			eng = "img/rogan.png";
			result = "로건";
			message = "\"자꾸 ㅈ밥처럼 굴래?\"<br> \"다음번엔 그런 바보 같은 대답 말아라\"";
			
		}
		if(temp < e) {
			temp = e;
			eng = "img/egg.png";
			result = "김계란";
			message = "\"운동후 깔끔하게 마시는 100% 분리 유청 단백질 셀렉스 스포츠 웨이 프로틴\"<br><br> \"할 수 있어요 그러니까 무조건\"";
			
		}
	}
	
	setPage(a,b,c,d,e,eng,result,message);
}

function setPage(a,b,c,d,e,eng,result,message){
	var html = document.getElementById('result');
	var tag = '';
	
	tag += '<div class = "sns">';
	tag += '<img src = "img/facebook.png" onclick="facebook()"/>';
	tag += '<img src = "img/kakao.png" onclick="kakao()"/>';
	tag += '<img src = "img/naver.png" onclick="naver()"/>';
	tag += '</div><br>';
	tag += '<img width="30%" src="'+eng+'"><br>';
	tag += '<span id="position">'+result+'</span><br><br><br>';
	tag += '<span id="position_text">'+message+'</span><br><br><br>';
	
	graph(a, b, c, d, e);
	tag += '<div id="graph"></div><br>';
	
	var language = sessionStorage.getItem('language');
	if(language == 'English'){
		$('#top_logo').attr("src", "img/logoname_eng.jpg");
		tag += '<span id="graph_text">[abcde]</span> <br>';
		tag += '<button id="btn_mainpage" type = "button" onclick="mainpage()">Main Page</button><br><br>';
	}else{
		tag += '<span id="graph_text">[나랑 맞는 교관은?]</span> <br>';
		tag += '<button id="btn_mainpage" type = "button" onclick="mainpage()">다시 해보기</button><br><br>';
	}
	
	html.innerHTML = tag;
}

function mainpage() {
	location.href='index.html';
}

function graph(a, b, c, d, e) {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
    var language = sessionStorage.getItem('language');

    if(language != 'English'){
        var data = google.visualization.arrayToDataTable([
            ['LPT', 'Position'],
            ['야전삽', c],
            ['로건', d],
            ['AGENT H', b],
            ['김계란', e],
            ['이근 대위', a]
          ]);
    }else{
    	var data = google.visualization.arrayToDataTable([
            ['abcde', 'abcde'],
            ['abcde', c],
            ['abcde', d],
            ['abcde', b],
            ['abcde', e],
            ['abcde', a]
          ]);
    }
      
    var options = {
    	chartArea:{
    		    left:10,
    		    right:10,
    		    bottom:10,
    		    top:10
    	},
    	legend: 'none',
    	pieSliceText: 'label',
    	pieStartAngle: 100,
    };

      var chart = new google.visualization.PieChart(document.getElementById('graph'));
      chart.draw(data, options);
    }
}