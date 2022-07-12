export default {
	template: `
		<li>
			<label class="flex justify-between items-center p-2">
				{{ assignment.name }}
				<input type="checkbox" v-model="assignment.complete" class="ml-3">
			</label>
		</li>
	`,

	props: {
		assignment: Object
	}
}