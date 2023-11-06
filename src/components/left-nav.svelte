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

<div id="info-container">
	<div class="profile-pic-container">
		<img src="/images/vak-photo.png" alt="Vak Kobiashvili" />
	</div>
	<h2>Vak Kobiashvili</h2>
	<h4>Developer in MD</h4>
	<ul>
		<li><a href="#home">Home</a></li>
	</ul>
</div>

<style lang="scss">
	#info-container {
		position: relative;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		padding: 10px;
		height: 100vh;

		.profile-pic-container {
			margin: 0 auto 30px;
			img {
				width: 100%;
				max-width: 200px;
				border-radius: 50%;
				border: 5px solid #ffffff;
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
			}
		}

		h2,
		h4 {
			margin: 0;
			text-align: center;
		}
		ul {
			padding: 0;
			text-align: center;
			list-style-type: none;
		}
	}
</style>
