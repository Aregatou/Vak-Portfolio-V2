<script>
</script>

<div id="nav-container">
	<div class="pic-container">
		<a href="#home"><img src="/images/vak-photo.png" alt="Vak Kobiashvili" /></a>
	</div>
	<h2>Vak Kobiashvili</h2>
	<h4>Developer</h4>
	<ul>
		<li><a href="#home">Home</a></li>
		<li><a href="#about-me">About Me</a></li>
		<li><a href="#WhatIDo">What I Do</a></li>
		<li><a href="#clients">Clients</a></li>
		<li><a href="#WhatICraft">What I Like</a></li>
	</ul>
	<ul>
		<li><a href="https://www.linkedin.com/in/vak-k/" target="_blank">LinkedIn</a></li>
		<li>
			<!-- <a href="https://github.com/Aregatou/Vak-Portfolio-V2" target="_blank">This site's code</a> -->
		</li>
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
				transition: $ease-transform;
				&:hover {
					transform: scale(1.05);
				}
			}
		}

		h2,
		h4 {
			margin: 0;
			text-align: center;
			color: var(--text-on-dark-bg);
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
			font-weight: 500;
		}
		h4 {
			font-style: italic;
		}
		ul {
			padding: 0;
			text-align: center;
			list-style-type: none;
			line-height: 1.8;

			a {
				@include anchor-underline;
				color: var(--text-on-dark-bg);
				text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
				display: inline-block;
				vertical-align: middle;
				font-weight: 400;
				font-size: 1.4rem;
			}
			@include respond-to(desktop) {
				line-height: 1.5;

				a {
					font-size: 1.1rem;
				}
			}
		}
	}
</style>
