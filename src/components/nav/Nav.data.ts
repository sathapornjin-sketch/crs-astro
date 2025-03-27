export const nav = [
	{
		name: 'หน้าแรก',
		link: '/',
	},
	{
		name: 'เกี่ยวกับวิทยาลัย',
		link: '/about/history',
		sub: [
			{
				name: 'ประวัติวิทยาลัย',
				link: '/about/history',
			},
			{
				name: 'วิสัยทัศน์ พันธกิจ ค่านิยม',
				link: '/about/vision',
			},
			{
				name: 'โครงสร้างองค์กร',
				link: '/about/organization',
			},
			{
				name: 'คณะผู้บริหาร',
				link: '/about/executives',
			},
			{
				name: 'บุคลากร',
				link: '/about/personnel',
			},
			{
				name: 'คณาจารย์',
				link: '/about/teachers',
			},
		],
	},
	{
		name: 'หลักสูตรที่เปิดสอน',
		link: '/education/syllabus',
		sub: [
			{
				name: 'หลักสูตร',
				link: '/education/syllabus',
			},
			{
				name: 'TCAS',
				link: '/education/tcas',
			},
		],
	},
	{
		name: 'นักศึกษาปัจจุบัน',
		link: '/internal/students',
	},
	{
		name: 'อาจารย์-เจ้าหน้าที่',
		link: '/internal/personnel',
	},
	{
		name: 'ติดต่อเรา',
		link: '/contact',
		sub: [
			{
				name: 'ข้อมูลการติดต่อ',
				link: '/contact',
			},
			{
				name: 'สายตรงคณบดี',
				link: '/contact/dean',
			},
			{
				name: 'ร้องเรียนการทุจริต',
				link: '/contact/whistleblower',
			},
		],
	},
	{
		name: 'ITA',
		link: '/ita',
	},
];
