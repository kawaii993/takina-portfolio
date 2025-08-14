const config = {
	//网页元数据
	metaData: {
		title: 'Takina的个人主页🎉',
		description: '欢迎来到Takina的奇妙世界！',
		keywords: 'Takina,Takina,个人主页,个人网站',
		icon: '/favicon.ico'   //网页图标，支持外链
	},

	avatar: "/img/avatar.jpg", // 头像
	welcometitle: "Hi, I'm Takina", // 标题

	// 颜色配置
	color: {
		themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
		welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
		turntablecolor1: "#FFFF00",  // 转盘渐变色一
		turntablecolor2: "#00FFFF"   // 转盘渐变色二
	},

	brightness: 85, // 背景亮度 --%
	blur: 5, // 毛玻璃模糊效果

	// 我的标签
	tags: ['游戏运营', '前端开发', '数据分析', 'FPS', 'MMORPG', 'ARPG', 'CET-6', '剪辑', '攻略', '渠道发行', '社区运营', '活动策划'],

	// 默认背景壁纸
	background: {
		"pc": {   //pc端
			"type": "pic",   //"pic":静态壁纸;"video":动态壁纸
			"datainfo": {
				"title": "星穹铁道",
				"preview": "/img/wallpaper/static/星穹铁道/image-pre.webp",
				"url": "/img/wallpaper/static/星穹铁道/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
			},
		},
		"mobile": {   //移动端
			"type": "pic",
			"datainfo": {
				"title": "0001",
				"preview": "/img/wallpaper/static-mobile/0001/image-pre.webp",
				"url": "/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
			}
		}

	},

	//极坐标图数据
	polarChart: {
		skills: ['Vue.js', '英语六级', 'JavaScript', '数据分析', '视频剪辑', '文案输出', '竞品分析', 'MySQL', 'SOP制定', '技术理解力', '跨部门协作'],
		skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
	},

	//社交按钮
	socialPlatformIcons: [
		{ icon: "mdi-github", link: "https://github.com/kawaii993" },
		{ icon: "mdi-email", link: "mailto:zh9931207@163.com" },
		{ icon: "mdi-qqchat", link: "https://im.qq.com/" },
		{ icon: "mdi-wechat", link: "https://wx.qq.com/" },
		{ icon: "mdi-youtube", link: "https://www.youtube.com" },
		{ icon: "mdi-facebook", link: "https://www.facebook.com" }
	],

	//打字机
	typeWriterStrings: [
		"不好意思，我是不会说出游戏这么好玩，那你跟游戏过一辈子吧，这种话的，因为要跟游戏过一辈子的人是我。",
		"点击左侧头像可以播放BGM噢~。",
		"唉，人类，人累，人泪 ( ‘-ωก̀ )",
		"哈有基兮基有咪，心悦哈基咪不知。",
		"天气蒙蒙，我也萌萌。"
	],

	//音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
	musicPlayer: {
		server: 'netease',  //服务提供商 --网易云音乐
		type: 'playlist',   //歌单类型
		id: '13645886783'  //歌单id ---> music.163.com/#/playlist?id=13645886783
	},

	//壁纸数据 -----可以将壁纸文件上传到图床获取网络直链。若想调用api，请前往脚本自行修改逻辑
	wallpaper: {
		pic: [
			{ "title": "海洋女孩", "preview": "/img/wallpaper/static/海洋女孩/image-pre.webp", "url": "/img/wallpaper/static/海洋女孩/image.png" },
			{ "title": "书房夜晚", "preview": "/img/wallpaper/static/书房夜晚/image-pre.webp", "url": "/img/wallpaper/static/书房夜晚/image.png" },
			{ "title": "安逸舒适", "preview": "/img/wallpaper/static/安逸舒适/image-pre.webp", "url": "/img/wallpaper/static/安逸舒适/image.png" },
			{ "title": "jswcMaMj", "preview": "https://s21.ax1x.com/2025/07/23/pVGli59.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGli59.jpg" },
			{ "title": "pgtTqoqq", "preview": "https://s21.ax1x.com/2025/07/23/pVGlmDO.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlmDO.jpg" },
			{ "title": "cvKMKhue", "preview": "https://s21.ax1x.com/2025/07/23/pVGlNqS.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlNqS.jpg" },
			{ "title": "XpxvQVoP", "preview": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlfIJ.jpg" },
			{ "title": "fVEEjEOA", "preview": "https://s21.ax1x.com/2025/07/23/pVGlEgx.md.webp", "url": "https://s21.ax1x.com/2025/07/23/pVGlEgx.webp" },
			{ "title": "jgnIKMpd", "preview": "https://s21.ax1x.com/2025/07/23/pVGldaQ.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGldaQ.jpg" },
			{ "title": "mgqyySeh", "preview": "https://s21.ax1x.com/2025/07/23/pVGl82t.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGl82t.jpg" },
			{ "title": "dSXZfZp", "preview": "https://s21.ax1x.com/2025/07/23/pVGlaVg.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlaVg.jpg" },
		],
		picMobile: [
			{ "title": "0001", "preview": "/img/wallpaper/static-mobile/0001/image-pre.webp", "url": "/img/wallpaper/static-mobile/0001/image.png" },
			{ "title": "0002", "preview": "/img/wallpaper/static-mobile/0002/image-pre.webp", "url": "/img/wallpaper/static-mobile/0002/image.png" },
			{ "title": "0003", "preview": "/img/wallpaper/static-mobile/0003/image-pre.webp", "url": "/img/wallpaper/static-mobile/0003/image.png" },
			{ "title": "0004", "preview": "/img/wallpaper/static-mobile/0004/image-pre.webp", "url": "/img/wallpaper/static-mobile/0004/image.png" },
			{ "title": "DfNHPPcc", "preview": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1uQ0.jpg" },
			{ "title": "cZZwzhis", "preview": "https://s21.ax1x.com/2025/07/23/pVG1Vij.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVG1Vij.jpg" },
			{ "title": "aANKZHPX", "preview": "https://s21.ax1x.com/2025/07/23/pVGlIR1.md.jpg", "url": "https://s21.ax1x.com/2025/07/23/pVGlIR1.jpg" },
		],
		video: [
			{
				"title": "尼尔：机械纪元 团队",
				"preview": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team-pre.webm",
				"url": "/img/wallpaper/dynamic/尼尔：机械纪元 团队/Nier-Automata-Team.webm"
			},
			{
				"title": "向往航天的女孩",
				"preview": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane-pre.webm",
				"url": "/img/wallpaper/dynamic/向往航天的女孩/Toy-Aeroplane.webm"
			},
			{
				"title": "世界很温柔《龙族》上杉绘梨衣",
				"preview": "https://www.Leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85-pre.webm",
				"url": "https://www.Leleo.top/img/wallpaper/dynamic/%E4%B8%96%E7%95%8C%E5%BE%88%E6%B8%A9%E6%9F%94%E3%80%8A%E9%BE%99%E6%97%8F%E3%80%8B%E4%B8%8A%E6%9D%89%E7%BB%98%E6%A2%A8%E8%A1%A3/A2EF5E85.webm"
			},
		],
		videoMobile: [
			{
				"title": "幻觉镇-gaako_illust",
				"preview": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/幻觉镇-gaako_illust/Hallucination_town.mp4"
			},
			{
				"title": "chuva",
				"preview": "/img/wallpaper/dynamic-mobile/chuva/chuva-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/chuva/chuva.mp4"
			},
			{
				"title": "Doodle-小猫女仆降临",
				"preview": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12-pre.mp4",
				"url": "/img/wallpaper/dynamic-mobile/Doodle-小猫女仆降临/d12.mp4"
			},
		],
	},

	//项目卡片 其中 字段"show"控制初始卡片的text是否展开
	projectcards: [
		{ go: "🚀 前往", img: "/img/sunshine.jpg", title: "Project 1", subtitle: "1,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "🗂️ 前往", img: "/img/sunshine.jpg", title: "Project 2", subtitle: "2,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "📝 前往", img: "/img/sunshine.jpg", title: "Project 3", subtitle: "3,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "👍 前往", img: "/img/sunshine.jpg", title: "Project 4", subtitle: "4,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "🗃 前往", img: "/img/sunshine.jpg", title: "Project 5", subtitle: "5,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "🎨 前往", img: "/img/sunshine.jpg", title: "Project 6", subtitle: "6,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "💍 前往", img: "/img/sunshine.jpg", title: "Project 7", subtitle: "7,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
		{ go: "🔍 前往", img: "/img/sunshine.jpg", title: "Project 8", subtitle: "8,000 miles of wonder", text: "If you see this line, I've managed to get your attention.", url: "https://Leleo.top", show: false },
	],

	statement: ["备案号：XXICP备123456789号", "Copyright © 2025 Takina"],
}

export default config