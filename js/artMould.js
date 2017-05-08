/*二级页面文章数据渲染*/
//网站设计
Vue.component('art-code',{
	data: function (){
		return {
			artCodeList: this.codeLis
		};
	},
	props:["codeLis"],
	template: `<div>
		<div class="news-img-box fl">
				<a :href="codeLis.articleUrl" target="_blank">
					<img class="news-list-img" :src="codeLis.mainImg" width="215" height="144" :alt="codeLis.articleTitle">
				</a>
			</div>
			<div class="news-content fr">
				<h3 class="title-h3">
					<a :href="codeLis.articleUrl" target="_blank">
						{{codeLis.articleTitle}}
					</a>
				</h3>
				<div class="author-info clearfix">
					<p class="author fl">
						<a href="javascript:;">
							<img :src="codeLis.authorImg" width="33" height="33" :alt="codeLis.authorName">
							<span>{{codeLis.authorName}}</span>
						</a>
					</p>
					<span class="date-time fl">
						发布时间：<em>{{codeLis.releaseTime}}</em>
					</span>
					<span class="classify fl">
						分类：<a href="javascript:;">{{codeLis.classify}}</a>
					</span>
				</div>
				<p class="news-info">{{codeLis.articleIntro}}</p>
			</div>
		</div>`
});
//聊聊代码
Vue.component('art-chat',{
	data: function (){
		return {
			codeList: this.chatLis
		};
	},
	props:["chatLis"],
	template: `<div>
		<div class="news-img-box fl">
				<a :href="chatLis.articleUrl" target="_blank">
					<img class="news-list-img" :src="chatLis.mainImg" width="215" height="144" :alt="chatLis.articleTitle">
				</a>
			</div>
			<div class="news-content fr">
				<h3 class="title-h3">
					<a :href="chatLis.articleUrl" target="_blank">
						{{chatLis.articleTitle}}
					</a>
				</h3>
				<div class="author-info clearfix">
					<p class="author fl">
						<a href="javascript:;">
							<img :src="chatLis.authorImg" width="33" height="33" :alt="chatLis.authorName">
							<span>{{chatLis.authorName}}</span>
						</a>
					</p>
					<span class="date-time fl">
						发布时间：<em>{{chatLis.releaseTime}}</em>
					</span>
					<span class="classify fl">
						分类：<a href="javascript:;">{{chatLis.classify}}</a>
					</span>
				</div>
				<p class="news-info">{{chatLis.articleIntro}}</p>
			</div>
		</div>`
});
/*

//碎言碎语
Vue.component('art-item',{
	data: function (){
		return {
			chatList: this.codeLis
		};
	},
	props:["codeLis"],
	template: `<div>
		<div class="news-img-box fl">
				<a :href="codeLis.articleUrl" target="_blank">
					<img class="news-list-img" :src="codeLis.mainImg" width="215" height="144" :alt="codeLis.articleTitle">
				</a>
				<p class="hot" style="display:codeLis.HotShow;">
					{{codeLis.articleHot}}<span class="triangle"></span>
				</p>
			</div>
			<div class="news-content fr">
				<h3 class="title-h3">
					<a :href="codeLis.articleUrl" target="_blank">
						{{codeLis.articleTitle}}
					</a>
				</h3>
				<div class="author-info clearfix">
					<p class="author fl">
						<a href="javascript:;">
							<img :src="codeLis.authorImg" width="33" height="33" :alt="codeLis.authorName">
							<span>{{codeLis.authorName}}</span>
						</a>
					</p>
					<span class="date-time fl">
						发布时间：<em>{{codeLis.releaseTime}}</em>
					</span>
					<span class="classify fl">
						分类：<a href="javascript:;">{{codeLis.classify}}</a>
					</span>
				</div>
				<p class="news-info">{{codeLis.articleIntro}}</p>
			</div>
		</div>`
});
//留言板
Vue.component('art-item',{
	data: function (){
		return {
			codeList: this.codeLis
		};
	},
	props:["codeLis"],
	template: `<div>
		<div class="news-img-box fl">
				<a :href="codeLis.articleUrl" target="_blank">
					<img class="news-list-img" :src="codeLis.mainImg" width="215" height="144" :alt="codeLis.articleTitle">
				</a>
				<p class="hot" style="display:codeLis.HotShow;">
					{{codeLis.articleHot}}<span class="triangle"></span>
				</p>
			</div>
			<div class="news-content fr">
				<h3 class="title-h3">
					<a :href="codeLis.articleUrl" target="_blank">
						{{codeLis.articleTitle}}
					</a>
				</h3>
				<div class="author-info clearfix">
					<p class="author fl">
						<a href="javascript:;">
							<img :src="codeLis.authorImg" width="33" height="33" :alt="codeLis.authorName">
							<span>{{codeLis.authorName}}</span>
						</a>
					</p>
					<span class="date-time fl">
						发布时间：<em>{{codeLis.releaseTime}}</em>
					</span>
					<span class="classify fl">
						分类：<a href="javascript:;">{{codeLis.classify}}</a>
					</span>
				</div>
				<p class="news-info">{{codeLis.articleIntro}}</p>
			</div>
		</div>`
});*/


