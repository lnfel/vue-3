import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
	components: {
		AssignmentList,
		AssignmentCreate
	},

	template: `
		<section class="flex gap-8">
			<assignment-list :assignments="filters.inProgress" title="In Progress">
				<assignment-create @add="add"></assignment-create>
			</assignment-list>
			<assignment-list
				v-if="showCompleted"
				:assignments="filters.completed"
				title="Completed"
				can-toggle
				@toggle="showCompleted = !showCompleted">
			</assignment-list>

			<!--<assignment-create @add="add"></assignment-create>-->
		</section>
	`,

	data() {
		return {
			assignments: [],
			showCompleted: true,
		}
	},

	created() {
		fetch('http://localhost:3001/assignments')
			.then(response => response.json())
			.then(assignments => {
				this.assignments = assignments;
			});
	},

	computed: {
		/*inProgress() {
			return this.assignments.filter(assignment => !assignment.complete)
		},

		completed() {
			return this.assignments.filter(assignment => assignment.complete)
		},*/

		filters() {
			return {
				inProgress: this.assignments.filter(assignment => !assignment.complete),
				completed: this.assignments.filter(assignment => assignment.complete),
			};
		}
	},

	methods: {
		add(name) {
			this.assignments.push({
				id: this.assignments.length + 1,
				name: name,
				complete: false
			});
		}
	}
}