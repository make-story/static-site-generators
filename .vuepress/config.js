// config.js
// https://vuepress.vuejs.org/config/
module.exports = {
	title: 'vuepress-stater', // 사이트 타이틀
	description: 'vuepress로 만든 문서입니다.',
	themeConfig: {
		//logo: '', // 로고 이미지
		nav: [
			{ 
				text: 'Home', 
				link: '/' 
			}
		],
		sidebar: 'auto' // h1~h6 같은 heading tag를 기준으로 sidebar를 만들어줌
	}
}