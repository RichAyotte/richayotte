<template>
	<a :href="href" target="_blank" class="button">
		<slot />
		<svg
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
			height="1em"
			viewBox="0 0 512 512"
		>
			<path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/>
		</svg>
	</a>
</template>

<script lang="ts" setup>
defineProps<{
	href: string
}>()
</script>

<style lang="scss" scoped>
@import '~/assets/styles/variables';

$shadow-color: rgba(0, 0, 0, 0.4);

.button {
	text-decoration: none;
	align-items: center;
	background-color: lighten($brand-grey, 10%);
	border-radius: 5px;
	border: none;
	box-shadow: 0 5px 15px $shadow-color;
	color: white;
	cursor: pointer;
	display: flex;
	font-size: 16px;
	gap: 5px;
	justify-content: center;
	outline: none;
	overflow: hidden;
	padding: 15px 25px;
	position: relative;
	transition: all 0.3s ease-in-out;

	&:hover {
		background-color: lighten($brand-grey, 13%);
		box-shadow: 0 8px 20px darken($shadow-color, 100%);
		transform: translateY(-4px);

		&:before {
			transform: skewX(45deg) translateX(300%);
		}
	}

	&:before {
		background: rgba(255, 255, 255, 0.3);
		content: '';
		height: 100%;
		left: 0;
		pointer-events: none;
		position: absolute;
		top: 0;
		transform: skewX(45deg) translateX(-150%);
		transition: all 0.3s;
		width: 0;
	}
}
</style>
