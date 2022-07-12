import AssignmentList from './AssignmentList.js';

export default {
	components: {
		AssignmentList
	},

	template: `
		<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
		<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

		<form @submit.prevent="add">
			<div class="border border-gray-600 text-black">
				<input v-model="newAssignment" placeholder="New Assignment..." class="p-2" />
				<button type="submit" class="bg-white p-2 border-l">Add</button>
			</div>
		</form>
	`,

	data() {
		return {
			assignments: [
				{ id: 1, name: "Finish project", complete: false },
				{ id: 2, name: "Read chapter 4", complete: false },
				{ id:3, name: "Turn in homework", complete: false }
			],

			newAssignment: ''
		}
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
		add() {
			this.assignments.push({
				id: this.assignments.length + 1,
				name: this.newAssignment,
				complete: false
			});

			this.newAssignment = '';
		}
	}
}