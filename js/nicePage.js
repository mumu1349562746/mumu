window.nicePage = {
	table: "div",
	bar: "bar",
	limit: "10",
	color: "#1E9FFF",
	layout: ["count", "prev", "page", "next", "limit", "skip"],
	setCfg: function(b) {
		nicePage.table = b.table;
		nicePage.bar = b.bar;
		nicePage.limit = b.limit;
		nicePage.color = b.color;
		nicePage.layout = b.layout
		nicePage.jump = b.jump
		nicePage.count = b.count
	},
};
$(function() {
	layui.use("laypage", function() {
		var a = layui.laypage;
		a.render({
			elem: nicePage.bar,
			limit: nicePage.limt,
			theme: nicePage.color,
			count: nicePage.count,
			layout: nicePage.layout,
			jump: nicePage.jump,
			prev:'<',
			next:'>',
			theme:'page'
		})
	})
});
