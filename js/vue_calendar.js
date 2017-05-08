new Vue({
	el: '#calendar',
	data: {
		currentDay: 1,
		currentMonth: 1,
		currentYear: 1970,
		currentWeek: 1,
		days: [],
	},
	created: function() {
		this.initData(null);
	},
	methods: {
		initData: function(cur) {
			var date;
			if (cur) {
				date = new Date(cur);
			} else {
				date = new Date();
			}
			this.currentDay = date.getDate();
			this.currentYear = date.getFullYear();
			this.currentMonth = date.getMonth() + 1;
			this.currentWeek = date.getDay(); // 1...6,0
			if (this.currentWeek == 0) {
				this.currentWeek = 7;
			}
			var str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay);
			console.log("today:" + str + "," + this.currentWeek);
			this.days.length = 0;
			// 今天是周日，放在第一行第7个位置，前面6个
			for (var i = this.currentWeek - 1; i >= 0; i--) {
				var d = new Date(str);
				d.setDate(d.getDate() - i);
				console.log("y:" + d.getDate());
				this.days.push(d);
			}
			for (var i = 1; i <= 35 - this.currentWeek; i++) {
				var d = new Date(str);
				d.setDate(d.getDate() + i);
				this.days.push(d);
			}
		},
		pick: function(date) {
			alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()));
		},
		pickPre: function(year, month) {
			console.log(year, month)
			// setDate(0); 上月最后一天
			// setDate(-1); 上月倒数第二天
			// setDate(dx) 参数dx为 上月最后一天的前后dx天
			var d = new Date(this.formatDate(year, month, 1));
			d.setDate(0);
			this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
		},
		pickNext: function(year, month) {
			console.log(year, month)
			var d = new Date(this.formatDate(year, month, 1));
			d.setDate(35);
			this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
		},
		pickYear: function(year, month) {
			alert(year + "," + month);
		},

		// 返回 类似 2016-01-02 格式的字符串
		formatDate: function(year, month, day) {
			var y = year;
			var m = month;
			if (m < 10) m = "0" + m;
			var d = day;
			if (d < 10) d = "0" + d;
			return y + "-" + m + "-" + d
		},
	},
});