import Assignment from './Assignment.js';
import AssignmentTags from './AssignmentTags.js';

export default {
	components: {
		Assignment, AssignmentTags
	},

	template: `
		<section v-show="assignments.length" class="mb-8">
			<h2 class="font-bold mb-2">
				{{ title }}
				<span>({{ filteredAssignments.length }})</span>
			</h2>

			<assignment-tags
				:data-tags="assignments.map(a => a.tag)"
				:current-tag="currentTag"
				@change="currentTag = $event" />

			<ul class="border border-gray-600 divide-y divide-gray-600">
				<assignment
					v-for="assignment in filteredAssignments"
					:key="assignment.id"
					:assignment="assignment">
				</assignment>
			</ul>

			<!-- 
			<pre>
				{{ assignments }}
			</pre>
			 -->
		</section>
	`,

	props: {
		assignments: Array,
		title: String
	},

	data() {
		return {
			currentTag: 'all'
		};
	},

	computed: {
		filteredAssignments() {
			if (this.currentTag === 'all') {
				return this.assignments;
			}
			return this.assignments.filter(a => a.tag === this.currentTag);
		},

		//tags() {
			//return ['science', 'math', 'reading'];

			//return ['all', ...new Set(this.assignments.map(a => a.tag))];
		//}
	}
}