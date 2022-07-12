export default {
	template: `
		<div class="flex gap-2 mb-6">
			<button
				@click="$emit('update:currentTag', tag)"
				v-for="tag in tags"
				class="border rounded px-1 py-px text-xs"
				:class="{
					'border-indigT600 bg-indigo-500' : currentTag === tag
				}">
				{{ tag }}
			</button>
		</div>
	`,

	props: {
		dataTags: Array,
		currentTag: String,
		// By default v-model default prop name is ModelValue
		// To give it a custom name, do it like: v-model:currentTag=""
		// This enables us to use currentTag as our v-model prop name instead
		//modelValue: String,
	},

	computed: {
		tags() {
			//return ['science', 'math', 'reading'];

			return ['all', ...new Set(this.dataTags)];
		}
	}
}