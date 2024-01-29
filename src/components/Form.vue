<template>
	<form>
		<div>
			<div>
				<label>Task Name</label>
				<input
					type="text"
					maxlength="50"
					placeholder="Task name"
					v-model="name"
					:class="
						!name && showValidationErrors && 'validation-border'
					"
				/>
				<div
					v-if="!name && showValidationErrors"
					class="validation-text"
				>
					<p>The name field is required</p>
				</div>
			</div>
			<div>
				<label>Description</label>
				<textarea
					type="text"
					maxlength="100"
					placeholder="Enter a short description"
					v-model="description"
				/>
			</div>
			<div>
				<label>Icon</label>
				<div class="select">
					<IconBtn
						v-for="(icon, index) in iconsList"
						:key="index"
						:icon-text="icon"
						:class="iconColor(icon)"
						@click="iconSelected = icon"
					/>
				</div>
			</div>
			<div>
				<label>Status</label>
				<div class="select">
					<StatusCard
						v-for="status in statusList"
						:key="status.name"
						:name="status.name"
						:icon="status.icon"
						:bg-color="status.iconBgColor"
						:class="statusBorderColor(status.name)"
						@click="statusSelected = status.name"
					/>
				</div>
			</div>
		</div>
		<div class="form-btns">
			<FormBtn
				v-if="formDataStore.editMode"
				:text="'Delete'"
				:icon="'src/assets/icons/Trash.svg'"
				@btn-action="
					formDataStore.deleteTask(formDataStore.taskSelectedId!)
				"
			/>
			<FormBtn
				:text="'Save'"
				:icon="'src/assets/icons/Done_round.svg'"
				@btn-action="validateForm"
			/>
		</div>
	</form>
</template>

<script setup lang="ts">
	// IMPORTS
	import { computed, onMounted, ref, type Ref } from "vue";
	import uniqid from "uniqid";
	import { useFormDataStore } from "@/stores/formDataStore";
	import { statusList } from "@/model/statusList";
	import { iconsList } from "@/model/iconsList";

	// STORES
	const formDataStore = useFormDataStore();
	// - Form Data
	const { editTask, addTask } = formDataStore;

	//HOOKS
	onMounted(() => {
		iconSelected.value = iconsList[0];
		statusSelected.value = statusList[3].name;
		if (formDataStore.editMode) {
			name.value = formDataStore.taskSelected!.name;
			description.value = formDataStore.taskSelected!.description;
			iconSelected.value = formDataStore.taskSelected!.icon;
			statusSelected.value = formDataStore.taskSelected!.status;
		}
	});

	// COMPUTED
	const statusBorderColor = computed(() => {
		return (name: string) => {
			return statusSelected.value && statusSelected.value === name
				? "active-border"
				: "inactive-border";
		};
	});

	const iconColor = computed(() => {
		return (icon: string) => {
			return iconSelected.value && iconSelected.value === icon
				? "active-icon"
				: "inactive-icon";
		};
	});

	// DATA
	const name: Ref<String> = ref("");
	const description: Ref<String> = ref("");
	const iconSelected: Ref<String> = ref("");
	const statusSelected: Ref<String> = ref("");
	const showValidationErrors: Ref<Boolean> = ref(false);

	// METHODS
	const createTask = () => {
		const task: any = {
			id: uniqid(),
			name: name.value,
			description: description.value,
			icon: iconSelected.value,
			status: statusSelected.value,
		};
		if (formDataStore.editMode && formDataStore.taskSelectedId) {
			task.id = formDataStore.taskSelectedId;
		}
		formDataStore.editMode ? editTask(task) : addTask(task);
	};

	const validateForm = () => {
		name.value =
			typeof name.value === "string" && name.value.trim().length > 0
				? name.value
				: "";

		if (name.value) {
			createTask();
		} else {
			showValidationErrors.value = true;
		}
	};
</script>

<style scoped lang="scss">
	form {
		@include flex(column, nowrap, space-between, flex-start);
		height: 75vh;

		label {
			display: inline-block;
			font-size: 0.75rem;
			color: $c-grey;
		}

		input,
		textarea {
			display: block;
			background-color: $c-bg-default;
			color: $c-title-description;
			border: $border;
			border-radius: $border-radius;
			padding: 0.6rem;
			width: 100%;
			font-family: "Outfit", sans-serif;
		}

		.validation-text {
			color: $c-red;
			font-size: small;
			margin-left: 0.2rem;
		}

		.validation-border {
			border: 0.1rem solid $c-red;
		}

		.select {
			@include flex(row, wrap, flex-start, center);
			max-width: 100%;

			.inactive-border {
				border: $border;
			}
			.active-border {
				border: 0.15rem solid $c-blue;
			}

			.inactive-icon {
				background-color: $c-light-grey;
			}
			.active-icon {
				background-color: $c-light-orange;
			}
		}

		.form-btns {
			@include flex(row, nowrap, flex-end, center);
			width: 100%;
		}
	}
</style>
