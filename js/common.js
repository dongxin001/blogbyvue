/*
 * 获取当前时间
 */
function timeLine(s) {
    return s < 10 ? '0' + s: s;
}

setInterval(function(){
	var myDate = new Date();
	//获取当前年
	var year=myDate.getFullYear();
	//获取当前月
	var month=myDate.getMonth()+1;
	//获取当前日
	var date=myDate.getDate(); 
	var h=myDate.getHours();       //获取当前小时数(0-23)
	var m=myDate.getMinutes();     //获取当前分钟数(0-59)
	var s=myDate.getSeconds();  
	
//	var nowTime = year +'-'+ timeLine(month) + "-" + timeLine(date) + " " + timeLine(h) + ':' + timeLine(m) + ":" + timeLine(s);
	var nowTime = timeLine(h) + ' : ' + timeLine(m) + " : " + timeLine(s);
$('.nowTime').text(nowTime);
}, 1000);

