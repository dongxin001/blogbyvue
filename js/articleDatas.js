//var artList = [
//	{
//		mainImg: 'image/articleEnjoy/mainImg01.jpg',//主图
//		articleHot: '热',//热点/新发/普通
//		HotShow: 'block',//热点注释是否显示
//		articleUrl: 'javascript:;',//文章点击跳转页面
//		authorImg: 'image/articleEnjoy/authorImg.png',//作者头像
//		authorName: '東杺',//作者名字
//		articleTitle: '如何建立个人博客？',//文章标题
//		releaseTime: '2014-06-05 10:24:00',//发布时间
//		classify: '学无止境',//分类
//		articleIntro: '想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己独立...'
//	},
//	{
//		mainImg: 'image/articleEnjoy/mainImg02.jpg',
//		articleHot: '新',
//		HotShow: 'block',
//		articleUrl: 'javascript:;',
//		authorImg: 'image/articleEnjoy/authorImg.png',
//		authorName: '東杺',
//		articleTitle: '前端MVVM框架之“Vue.js实战篇”',
//		releaseTime: '2017-03-13 17:29:56',
//		classify: 'web前端',
//		articleIntro: '前言： 看过我之前写的系列文章(Vue.js基础篇、Vue.js组件篇)，相信大家对vue.js这个前端框架有了一定的了解。 想必也想把Vue急切的运用在项目中，看看它的魅力到底有多大？别急，今天我会满足大家的想法。 我们一起来看看“Webpack+Vue”的开发模式相比以往...'
//	},
//	{
//		mainImg: 'image/articleEnjoy/mainImg03.jpg',
//		HotShow: 'none',
//		articleUrl: 'javascript:;',
//		authorImg: 'image/articleEnjoy/authorImg.png',
//		authorName: '東杺',
//		articleTitle: '利用百度数据来做SEO优化系列（二）',
//		releaseTime: '2015-05-01 17:41:00',
//		classify: 'SEO实战案列',
//		articleIntro: '最近一直忙着公司项目的上线，以及还没来得及跟大家分享，刚好趁着5.1放假，有时间就接着上次的话题来跟大家一起分享。 在利用百度数据来做SEO优化系列（一）这篇文章中提到了，现在做SEO优化，不能有以前的老思维来做seo优化了。现在要围绕“用户体验”来做...'
//	},
//	{
//		mainImg: 'image/articleEnjoy/mainImg04.jpg',
//		HotShow: 'none',
//		articleUrl: 'javascript:;',
//		authorImg: 'image/articleEnjoy/authorImg.png',
//		authorName: '東杺',
//		articleTitle: '利用百度数据来做SEO优化系列（一）',
//		releaseTime: '2014-06-05 10:24:00',
//		classify: 'SEO实战案列',
//		articleIntro: '最近在很多站长群、SEO相关的群里聊天，普遍发现一个问题：“ 哎，现在感觉做SEO优化很难啊！，好像外链不起什么作用了，每天更新原创文章，排名也不起来。 ” 我只能说一句：现在不是以前的“内容为王，外链为皇”的时代了。如果你还停留在以前（古代思维）...'
//	},
//	{
//		mainImg: 'image/articleEnjoy/mainImg05.jpg',
//		HotShow: 'none',
//		articleUrl: 'javascript:;',
//		authorImg: 'image/articleEnjoy/authorImg.png',
//		authorName: '東杺',
//		articleTitle: 'HTML5移动端手机网站开发流程',
//		releaseTime: '2017-03-13 17:29:56',
//		classify: 'html5+css3',
//		articleIntro: '最近一直在研究移动手机网站的开发，发现做手机网站没有想象中的那么难。为什么会这么说呢？我们试想下:我们连传统的PC网站都会做， 难道连一个小小的手机网站难道都搞不定吗？其实手机网站就是一个微缩版的PC网站罢了！至于为什么觉得难、觉得无从下手。 段...'
//	},
//	{
//		mainImg: 'image/articleEnjoy/mainImg06.jpg',
//		HotShow: 'none',
//		articleUrl: 'javascript:;',
//		authorImg: 'image/articleEnjoy/authorImg.png',
//		authorName: '東杺',
//		articleTitle: '学习seo的一些心得',
//		releaseTime: '2015-05-01 17:41:00',
//		classify: 'SEO优化进阶',
//		articleIntro: '从学习SEO起到现在差不多两个月时间了，也算是慢慢的走向seoer这个行业。在学习SEO这个过程中，我发现SEO这个行业相对于其它行业比较抽象。不像学其它的技术一样，你马上学出来，就能看到实战效果，而SEO却截然不同。因为SEO需要用一定时间去等结果，可能最...'
//	}
//];

/*文章推荐数据渲染*/
Vue.component('art-item',{
	data: function (){
		return {
			artList: this.artLis
		};
	},
	props:["artLis"],
	template: `<div>
		<div class="news-img-box fl">
				<a :href="artLis.articleUrl" target="_blank">
					<img class="news-list-img" :src="artLis.mainImg" width="215" height="144" :alt="artLis.articleTitle">
				</a>
				<p class="hot" :style="{display:artLis.HotShow}">
					{{artLis.articleHot}}<span class="triangle"></span>
				</p>
			</div>
			<div class="news-content fr">
				<h3 class="title-h3">
					<a :href="artLis.articleUrl" target="_blank">
						{{artLis.articleTitle}}
					</a>
				</h3>
				<div class="author-info clearfix">
					<p class="author fl">
						<a href="javascript:;">
							<img :src="artLis.authorImg" width="33" height="33" :alt="artLis.authorName">
							<span>{{artLis.authorName}}</span>
						</a>
					</p>
					<span class="date-time fl">
						发布时间：<em>{{artLis.releaseTime}}</em>
					</span>
					<span class="classify fl">
						分类：<a href="javascript:;">{{artLis.classify}}</a>
					</span>
				</div>
				<p class="news-info">{{artLis.articleIntro}}</p>
			</div>
		</div>`
});

