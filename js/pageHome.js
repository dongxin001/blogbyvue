//网站欣赏
var allLow = [
	{title: '【蘑菇街首页】', cont: '美丽联合集团是女性时尚媒体和时尚消费平台,通过整合现在已有的资源,包括电商、社区、红人、内容等等,来服务于不同的女性用户。蘑菇街是集团旗下定位于年轻女性用户的电子商务网站。', Url: 'https://dongxin001.github.io/mgjpc/', img: 'image/student_obj9.jpg'},
	{title: '【jQuery首页】', cont: 'jQuery是一个快速、简洁的JavaScript框架。它封装JavaScript常用的功能代码，提供一种简便的JavaScript设计模式，优化HTML文档操作、事件处理、动画设计和Ajax交互。', Url: 'https://dongxin001.github.io/jquery/', img: 'image/student_obj3.jpg'},
	{title: '【UC浏览器首页】', cont: 'UC浏览器是全球5亿用户共同选择的智能手机浏览器,登陆UC官网免费下载UC浏览器安卓版/iPhone版/ipad版/TV版,UC浏览器电脑版极速来袭,给您超快感的上网体验!', Url: 'https://dongxin001.github.io/ucbrowser/', img: 'image/student_obj2.jpg'}
];

//网页设计流程
var webDesignCont = [
	{title: '第一节：网页入门', Url: 'javascript:;'},
	{title: '第二节：常用的HTML标签', Url: 'javascript:;'},
	{title: '第三节：HTML表单', Url: 'javascript:;'},
	{title: '第四节：CSS入门', Url: 'javascript:;'},
	{title: '第五节：常用的CSS样式', Url: 'javascript:;'},
	{title: '第六节：CSS浮动', Url: 'javascript:;'},
	{title: '第七节：HTML表格', Url: 'javascript:;'}
];
//热门推荐
var hotSearchCont = [//热搜相关
	{title: '浅谈：html5和html的区别', Url: 'javascript:;'},
	{title: '如何建立个人博客？', Url: 'javascript:;'},
	{title: 'HTML5移动端手机网站开发流程', Url: 'javascript:;'},
	{title: '关于响应式布局', Url: 'javascript:;'},
	{title: 'dedecms5.7安装百度(ueditor)编辑器的方法', Url: 'javascript:;'},
	{title: '简单三步-实现dede站内搜索功', Url: 'javascript:;'}
];
var creatSiteCont = [//建站相关
	{title: '新手须知：域名该如何选择', Url: 'javascript:;'},
	{title: '利用百度数据来做SEO优化系列（一）', Url: 'javascript:;'},
	{title: '网站代码该如何优化？', Url: 'javascript:;'},
	{title: '轻松教你如何查看网站日志', Url: 'javascript:;'},
	{title: '一个网站的开发流程', Url: 'javascript:;'},
	{title: '关于网站空间服务器的选择', Url: 'javascript:;'}
];
var artCifyItem = ['HTML/CSS','JavaScript','Node.js','性能优化','类库框架','网站建设','推荐工具','经典实例'];

//存取localStorage中的数据
var store = {
	save(key,value){
		localStorage.setItem(key,JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || [];
	}
}
//取出所有的值
var list = store.fetch("iTest");

new Vue({
	el: '#ihome',
	data: {
		activeText: '热搜排行',
		allLow: allLow,//网站欣赏
		artList: [],//文章推荐
		artCodeList: [],//二级页面文章荐
		artChatList: [],//聊聊代码
		diaryItem: [],//碎言碎语
		wContLis: webDesignCont,//网页设计流程
		hotSearchLis: hotSearchCont,//热搜相关
		creatSiteLis: creatSiteCont,//建站相关
		artCifyItem: artCifyItem,//文章分类
		newTodoText: '',//留言板
		list: list,//留言板
	},
	watch:{
		list:{//深度监控list这个属性，当这个属性对应的值发生变化就会执行函数
			handler:function(){
				store.save("iTest",this.list);
			},
			deep:true
		}
	},
	mounted: function (){
		$.ajax({//首页文章推荐
			url: 'http://easy-mock.com/mock/590b372187cce4690feccdea/dongxin/articl',
			success: (data) =>{
				this.artList = data;
			}
		});
		$.ajax({//二级页面文章分类
			url: 'http://easy-mock.com/mock/590b372187cce4690feccdea/dongxin/artclass',
			success: (data) =>{
				this.artCodeList = data;
			}
		});
		$.ajax({//二级页面聊聊代码
			url: 'http://easy-mock.com/mock/590b372187cce4690feccdea/dongxin/chatcode',
			success: (data) =>{
				this.artChatList = data;
			}
		});
		$.ajax({//碎言碎语
			url: 'http://easy-mock.com/mock/590b372187cce4690feccdea/dongxin/diary',
			success: (data) =>{
				this.diaryItem = data;
			}
		})
	},
	methods: {
		clickActive: function (ev){
			var eVal = ev.target.innerText;
			this.activeText = eVal;
			if(eVal == '热搜排行'){
				$('.tabContItem').css('left', 0);
			}else if(eVal == '建站相关'){
				$('.tabContItem').css('left', -290);
			}
		},
		addNewTodo: function(event){
			event.preventDefault();//阻止元素发生默认的行为
			event.cancelBubble=true;//阻止浏览器默认的事件冒泡行为,支持标准浏览器
			event.stopPropagation();//阻止浏览器默认的事件冒泡行为，支持IE
			if(this.newTodoText == ''){
				alert('请规范输入内容！');
				this.newTodoText = '';
			}else{
				this.list.push({
					cont: this.newTodoText
				});
				this.newTodoText = '';
			}
		},
		removeTodo: function(event){
			//console.log(event.target, this.items);
			var index = $(event.target).attr('index');
			//console.log(index);
			this.list.splice(index,1);
		}
	}
})



