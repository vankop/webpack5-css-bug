<template>
	<i class="icon" :class="classNames" @click="$emit('click', $event)">
		{{unicode}}
	</i>
</template>

<script>
	export default {
		props: ['name', 'size', 'active', 'clickable'],
		data() {
			const unicode = 10;
			const classNames = ''
			return {unicode, classNames}
		}
	};
</script>

<style>
	.icon {
		cursor: default;
		color: black;
		speak: none;
		font-family: iconfont;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		font-size: 24px;
		user-select: none;
		text-transform: none;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon.small {
		font-size: 16px;
	}

	.icon.active {
		color: green;
	}

	.icon.clickable {
		cursor: pointer;
	}
</style>
