<script>
	import { onMount } from 'svelte';
	onMount(() => {
		// This is a fallback for smooth scrolling when "scroll-behavior: smooth" isn't supported
		const anchors = document.querySelectorAll('a[href^="#"]');
		anchors.forEach((anchor) => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href');
				const target = document.querySelector(targetId);
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
			});
		});
	});
</script>

<div id="nav-container">
	<div class="pic-container">
		<img src="/images/vak-photo.png" alt="Vak Kobiashvili" />
	</div>
	<h2>Vak Kobiashvili</h2>
	<h4>Developer in MD</h4>
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
	</ul>
</div>

<style lang="scss">
	#nav-container {
		position: fixed;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding: 10px;
		height: 100vh;

		.pic-container {
			margin: 0 auto 30px;
			img {
				width: 100%;
				max-width: 200px;
				border-radius: 50%;
				border: 5px solid $primary-red;
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
				transition: transform 0.2s ease-in-out;
				&:hover {
					transform: translateY(-5px);
				}
			}
		}

		h2,
		h4 {
			margin: 0;
			text-align: center;
			color: $white;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
		}
		ul {
			padding: 0;
			text-align: center;
			list-style-type: none;
		}
		a {
			color: $white;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
			position: relative;
			display: inline-block;
			overflow: hidden;
			vertical-align: middle;
			font-weight: 700;
			text-decoration: none;
			font-size: 1.1rem;
			&::after {
				content: '';
				position: absolute;
				width: 0;
				height: 2px;
				display: block;
				margin-top: 2px;
				right: 50%;
				bottom: 0;
				background: $primary-red;
				transition: width 0.5s ease, right 0.5s ease;
			}
			&:hover::after {
				width: 100%;
				right: 0;
			}
		}
	}
</style>
