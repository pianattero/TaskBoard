<template>
	<button type="button" class="btn-container">
		<p v-if="props.iconText" class="icon-btn icon-text">
			{{ props.iconText }}
		</p>

		<img v-else="props.iconImg" class="icon-btn" :src="props.iconImg" />
	</button>
</template>

<script setup lang="ts">
	// PROPS
	const props = defineProps({
		iconText: {
			type: String,
		},
		iconImg: {
			type: String,
		},
	});
</script>

<style scoped lang="scss">
	.btn-container {
		margin: 0 0.2rem;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: $border-radius;

		.icon-btn {
			padding: 0.5rem;
			width: 100%;
			height: 100%;
		}

		.icon-text {
			font-size: 18px;
			text-align: center;
		}
	}
</style>
