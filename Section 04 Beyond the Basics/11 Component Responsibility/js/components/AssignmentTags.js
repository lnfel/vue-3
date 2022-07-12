export default {
	template: `
		<div class="flex gap-2 mb-6">
			<button
				@click="$emit('change', tag)"
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
	},

	computed: {
		tags() {
			//return ['science', 'math', 'reading'];

			return ['all', ...new Set(this.dataTags)];
		}
	}
}