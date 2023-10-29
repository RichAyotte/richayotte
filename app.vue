<template>
	<VitePwaManifest />
	<main>
		<section-home />
	</main>
</template>

<style lang="scss" scoped>
@import 'include-media';

main {
	@include media('>1500px') {
		&::before {
			background-image: url(/assets/images/ayotte-software-logo-greyscale-rotated90.svg);
			background-position: right center;
			background-repeat: no-repeat;
			background-size: auto 100%;
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
