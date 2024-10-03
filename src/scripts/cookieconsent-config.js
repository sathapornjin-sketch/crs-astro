import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

// Enable dark mode
// document.documentElement.classList.add('cc--darkmode');

CookieConsent.run({
	guiOptions: {
		consentModal: {
			layout: 'bar',
			position: 'bottom',
			equalWeightButtons: true,
			flipButtons: false,
		},
		preferencesModal: {
			layout: 'bar',
			position: 'right',
			equalWeightButtons: true,
			flipButtons: false,
		},
	},
	categories: {
		necessary: {
			readOnly: true,
		},
		analytics: {},
	},
	language: {
		default: 'en',
		autoDetect: 'browser',
		translations: {
			en: {
				consentModal: {
					title: '🍪 We use cookies!',
					description:
						'เราใช้คุกกี้ในการให้บริการและปรับปรุงบริการของเรา ตลอดจนเพิ่มประสิทธิภาพให้แก่ประสบการณ์การเรียกดูข้อมูลของคุณ',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					showPreferencesBtn: 'Manage preferences',
					footer: '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
				},
				preferencesModal: {
					title: 'Consent Preferences Center',
					acceptAllBtn: 'Accept all',
					acceptNecessaryBtn: 'Reject all',
					savePreferencesBtn: 'Save preferences',
					closeIconLabel: 'Close modal',
					serviceCounterLabel: 'Service|Services',
					sections: [
						{
							title: 'Cookie usage 📢',
							description:
								'เราใช้คุกกี้เพื่อการทำงานของเว็บไซต์และเพิ่มประสิทธิภาพให้แก่ประสบการณ์การเรียกดูข้อมูลของผู้ใช้ และผู้ใช้สามารถเลือกตั้งค่าคุกกี้ได้เอง สำหรับรายละเอียดเพิ่มเติมเกี่ยวกับคุกกี้และข้อมลสำคัญอื่น ๆ สามารถคลิกอ่านตัวเต็มได้ : การคุ้มครองข้อมูลส่วนบุคคล',
						},
						{
							title: 'คุกกี้ที่จำเป็น <span class="pm__badge">Always Enabled</span>',
							description:
								'เป็นคุกกี้ที่จำเป็นสำหรับการทำงานของเว็บไซต์ หากไม่มีคุกกี้เหล่านี้เว็บไซต์จะทำงานไม่ถูกต้อง',
							linkedCategory: 'necessary',
						},
						{
							title: 'คุกกี้เพื่อการวิเคราะห์ <span class="on-i"></span>
										<span class="off-i"></span>',
							description:
								'คุกกี้เพื่อการวิเคราะห์/เพื่อประสิทธิภาพ คุกกี้เหล่านี้ช่วยให้เราจดจำและนับจำนวนผู้เข้าชมเว็บไซต์และทราบว่าผู้เข้าชมไปยังหน้าต่างๆ ในเว็บไซต์อย่างไร สิ่งนี้จะช่วยให้เราปรับปรุงการทำงานของเว็บไซต์ให้ดียิ่งขึ้นได้ในอนาคต ตัวอย่างเช่น ทำให้ผู้ใช้งานพบสิ่งที่ต้องการเข้าถึงได้ง่ายขึ้น',
							linkedCategory: 'necessary',
						},
						// {
						// 	title: 'Analytics Cookies',
						// 	description:
						// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
						// 	linkedCategory: 'analytics',
						// },
						// {
						// 	title: 'More information',
						// 	description:
						// 		'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
						// },
					],
				},
			},
		},
	},
});
