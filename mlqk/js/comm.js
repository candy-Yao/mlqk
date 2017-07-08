/*跑马灯*/
var msg="您好!     欢迎来到码力全开！各类考试一站式服务！";
var interval=400;
var seq=0;
function LenScroll(){
	document.nextForm.lenText.value=msg.substring(seq,msg.length)+""+msg;
	seq++;
	if(seq>msg.length)
	seq=0;
	window.setTimeout("LenScroll();",interval);
}
function txtfocus(oEvent){
	var obj=(window.event)?window.event.srcElement:oEvent.target;
	obj.style.background="#95D0F1";
}
function txtblur(oEvent){
	var obj=(window.event)?window.event.srcElement:oEvent.target;
	obj.style.background="#fff";
}
/*轮播图*/
window.onload = function() {
	var oPrev = document.getElementById('prev');
	var oNext = document.getElementById('next');
	var oText = document.getElementById('text');
	var oSpan = document.getElementById('span1');
	var oImg = document.getElementById('img1');
	var arrUrl = ['images/1.jpg', 'images/1.jpg', 'images/2.jpg'];
	var arrText = ['', '', ''];
	var num = 0;
	function Change() {
		oText.innerHTML = arrText[num];
		oImg.src = arrUrl[num];
		oSpan.innerHTML = num + 1 + '/' + arrText.length;
		}
	Change();
	oPrev.onclick = function (){
		num --;
		if(num == -1){
			num = arrText.length -1;
		}
		Change();
	}
	oNext.onclick = function (){
		num ++;
		if(num == arrText.length){
		num = 0;
	}
	Change();
	}
}//图片翻转
/*我要报名页面-图片模糊*/			
function visible(obj,i){
	if(i==0){
		 obj.style.filter='alpha(opacity=100)';
		 obj.style.opacity=1;
		}else{
		 obj.style.filter="alpha(opacity=30)";
		 obj.style.opacity=0.3;
		}
}	//鼠标移上图片变模糊
/*校舍环境滑动门*/
var imgs = [
	{
		title:"",
		url:'',
		src:'images/0.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/01.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/02.png'
	},
	{
		title:"",
		url:'',
		src:'images/03.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/04.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/05.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/06.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/11.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/08.jpg'
	},
	{
		title:"",
		url:'',
		src:'images/09.jpg'
	}
];



	