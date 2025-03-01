<script lang="ts">
	import { onMount } from 'svelte';

	let slides = [
		{ id: 'slide1', src: '/img/banner/banner-1.png', alt: 'CRS Banner' },
		{ id: 'slide2', src: '/img/banner/banner-no-gift.png', alt: 'CRS No Gift Policy' },
		{ id: 'slide4', src: '/img/banner/banner-oit.png', alt: 'CRS OIT' },
		{ id: 'slide3', src: '/img/banner/banner-dorm.png', alt: 'CRS Dorm' },
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

	const startAutoSlide = () => {
		setInterval(() => {
			currentSlide = (currentSlide + 1) % slides.length;
			const carousel = document.querySelector('.carousel');
			const target = carousel.querySelector<HTMLDivElement>(`#${slides[currentSlide].id}`)!;
			const left = target.offsetLeft;
			carousel.scrollTo({ left: left, behavior: 'smooth' });
		}, 10000); // Change slide every 10 seconds
	};

	onMount(() => {
		startAutoSlide();
	});
</script>

<div class="carousel w-full">
	{#each slides as slide, index}
		<div id={slide.id} class="carousel-item relative w-full">
			<img src={slide.src} class="w-full" alt={slide.alt} />
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
