<script lang="ts">
	interface Slide {
		id: string;
		src: string;
		alt: string;
		link?: {
			url: string;
			isExternal: boolean;
		};
	}

	const slides: Slide[] = [
		// { id: 'slide1', src: '/img/banner/bn1.png', alt: 'Updating Website' },
		//{
			//id: 'slide0',src: '/img/banner/siri.png',alt: 'siri',			
		//},
		{
			id: 'slide1',
			src: '/img/banner/1บุคลากรมหิดล-กลไก.jpg',
			alt: '1บุคลากรมหิดล-กลไก',
			link: {
				url: 'https://ethicsreport.ocsc.go.th/Answer/RPT0000004/8a7c2c51-2029-41b6-a3d3-2c1f5236773c',
				isExternal: true,
			},
		},
		{
			id: 'slide2',
			src: '/img/banner/2บุคลากรมหิดล-มาตรฐาน.jpg',
			alt: '2บุคลากรมหิดล-มาตรฐาน',
			link: {
				url: 'https://ethicsreport.ocsc.go.th/Answer/RPT0000004/a442b82f-aa06-4517-b11e-ca4aaabde023',
				isExternal: true,
			},
		},
		{
			id: 'slide3',
			src: '/img/banner/3ประชาชน ผู้รับบริการ.jpg',
			alt: '3ประชาชน ผู้รับบริการ',
			link: {
				url: 'https://ethicsreport.ocsc.go.th/Answer/RPT0000005/b9cbf65a-53d5-4ce1-879e-9c1bd527a000',
				isExternal: true,
			},
		},
		
		{ id: 'slide5', src: '/img/banner/bn2.png', alt: 'CRS Banner' },
		
		{
			id: 'slide6',
			src: '/img/banner/NAMTHON_2025.png',
			alt: 'CRS Dorm',
			link: {
				url: 'https://www.facebook.com/CRSNamthong',
				isExternal: true,
			},
		},
		{ id: 'slide7', src: '/img/banner/NO_Gift_2025.png', alt: 'CRS No Gift Policy' },
		//{ id: 'slide6', src: '/img/banner/tcas2568.jpg', alt: 'TCAS2568' },
		//{ id: 'slide7', src: '/img/banner/EIT_new.png', alt: 'EIT 2025' },		
	];

	let currentSlide = 0;

	const goToSlide = (event: Event) => {
		event.preventDefault();
		const btn = event.currentTarget as HTMLSelectElement;
		const carousel = document.querySelector('.carousel');
		const href = btn.getAttribute('href')!;
		const target = carousel.querySelector<HTMLDivElement>(href)!;
		const left = target.offsetLeft;
		carousel.scrollTo({ left: left, behavior: 'smooth' });
		currentSlide = slides.findIndex((slide) => slide.id === href.slice(1));
	};

	$effect(() => {
		const autoSlideInterval = setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
			const carousel = document.querySelector('.carousel');
			const target = carousel.querySelector<HTMLDivElement>(`#${slides[currentSlide].id}`)!;
			const left = target.offsetLeft;
			carousel.scrollTo({ left: left, behavior: 'smooth' });
		}, 15000); // Change slide every 15 seconds

		return () => {
			clearInterval(autoSlideInterval);
		};
	});
</script>

<div class="carousel w-full">
	{#each slides as slide, index}
		<div id={slide.id} class="carousel-item relative w-full">
			{#if slide.link}
				<a
					href={slide.link.url}
					target={slide.link.isExternal ? '_blank' : '_self'}
					class="w-full h-full"
				>
					<img src={slide.src} class="w-full aspect-[3/1]" alt={slide.alt} />
				</a>
			{:else}
				<img src={slide.src} class="w-full aspect-[3/1]" alt={slide.alt} />
			{/if}

			<div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
				<a
					onclick={goToSlide}
					href={`#${slides[(index - 1 + slides.length) % slides.length].id}`}
					class="btn btn-circle opacity-10 hover:opacity-90">❮</a
				>
				<a
					onclick={goToSlide}
					href={`#${slides[(index + 1) % slides.length].id}`}
					class="btn btn-circle opacity-10 hover:opacity-90">❯</a
				>
			</div>
		</div>
	{/each}
</div>
