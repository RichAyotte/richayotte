<template>
<section class="home-section">
	<div>
		<img
			class="headshot"
			src="~/assets/images/headshot.jpg"
			alt="Photo of Richard Ayotte"
		/>
		<h1 class="title">Richard Ayotte</h1>
		<h2 class="subtitle">Software Engineer</h2>
		<div class="links">
			<button-link href="https://www.linkedin.com/in/richayotte/">LinkedIn</button-link>
			<button-link href="https://stackoverflow.com/users/382228/richard-ayotte">Stack Overflow</button-link>
			<button-link href="https://github.com/RichAyotte">Github</button-link>
			<button-link href="https://twitter.com/RichAyotte">𝕏</button-link>
		</div>
<pre class="card"><code>const i = {
	paints: [<strong>
		`TypeScript`,
		`JavaScript`,
		`CSS`,
		`Vue`,
		`React`,
		`GraphQL`,
		`SQL`,
		`Fastify`,
		`Redis`,
	</strong>],
	brushes: [<strong>
		`Debian Sid`,
		`Sublime Text`,
		`Hyprland`,
		`Git`,
		`Jest`,
	</strong>],
	surfaces: [<strong>
		`Node.js`,
		`Browsers`,
	</strong>],
	cleaners: [<strong>
		`Running`,
		`Chess`,
		`Philosophy`,
	</strong>],
}
</code></pre>
	</div>
</section>
</template>

<script lang="ts" setup>
import ButtonLink from '~/components/button-link.vue';
</script>

<style lang="scss" scoped>
@use 'sass:color';
@import '~/assets/styles/variables';
@import 'include-media';

.home-section {
	align-content: center;
	text-align: center;
}

.headshot {
	border-radius: 10px;
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
	display: block;
	margin: 5rem auto;
	transform: rotate(-8deg);
	width: clamp(200px, 30vw, 300px);
}

.title {
	font-size: clamp(2.1rem, 7vw, 4.5rem);
	letter-spacing: 0.1rem;
	margin: 0;
}

.subtitle {
	color: lighten($brand-grey, 25%);
	font-size: clamp(1.5rem, 4vw, 2.5rem);
	letter-spacing: 0.1rem;
	margin: 0;
	text-transform: lowercase;
}

.links {
	align-content: center;
	display: flex;
	flex-flow: column wrap;
	gap: 1rem;
	justify-content: center;
	margin: 30px 20px;
	@include media('>380px') {
		flex-direction: row;
	}
	a {
		font-size: clamp(1em, 1.1vw, 3em);
	}
}

.card {
	background-color: $brand-orange;
	border-radius: 10px;
	border: 3px solid darken($brand-orange, 10%);
	color: white;
	display: inline-block;
	font-size: clamp(1em, 2.5vw, 1.2em);
	mix-blend-mode: multiply;
	padding: clamp(5px, 4vw, 45px);
	position: relative;
	tab-size: 4;
	text-align: left;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
	width: clamp(300px, 80vw, 600px);
	@include media('<=1500px') {
		&::before {
			background-image: url(/assets/images/ayotte-software-logo-greyscale-rotated90.svg);
			background-position: 95% center;
			background-repeat: no-repeat;
			background-size: auto 95%;
			bottom: 0;
			content: "";
			left: 0;
			position: absolute;
			right: 0;
			top: 0;
			z-index: -1;
		}
	}
}

</style>
