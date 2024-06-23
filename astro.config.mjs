import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ghkdtjd0911.github.io/',
	base: '/road_to_engineer',
	integrations: [
		starlight({
			title: '개발자 몸부림 페이지',
			social: {
				github: 'https://github.com/ghkdtjd0911/road_to_engineer',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: '백엔드 개발자',
					autogenerate: { directory: '백엔드 개발자' },
				},
				// {
				// 	label: 'Postgres',
				// 	autogenerate: { directory: '백엔드 개발자' },
				// },
				// {
				// 	label: '소프트웨어 아키텍트',
				// 	autogenerate: { directory: '백엔드 개발자' },
				// },
			],
		}),
	]
});
