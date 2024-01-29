<template>
	<button
		type="button"
		@click="emit('btnAction')"
		:class="
			props.text === 'Save' ? 'form-btn bg-save' : 'form-btn bg-delete'
		"
	>
		<span>{{ props.text }}</span>
		<img :src="props.icon" />
	</button>
</template>

<script setup lang="ts">
	// PROPS
	const props = defineProps({
		text: {
			type: String,
		},
		icon: {
			type: String,
		},
	});

	// EMITS
	const emit = defineEmits(["btnAction"]);
</script>

<style scoped lang="scss">
	.form-btn {
		@include flex(row, nowrap, space-evenly, center);
		border-radius: 2rem;
		padding: 0.2rem 0.5rem;
		width: 6rem;
		color: $c-white;
		font-weight: 300;
		margin: 1rem 0.5rem;
	}

	.bg-save {
		background-color: $c-blue;
	}

	.bg-delete {
		background-color: $c-grey;
	}
</style>
