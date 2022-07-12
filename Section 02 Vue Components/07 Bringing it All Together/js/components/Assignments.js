import AssignmentList from './AssignmentList.js';

export default {
	components: {
		AssignmentList
	},

	template: `
		<assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
		<assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
	`,

	data() {
		return {
			assignments:
			[
				{
					id: 1,
					name: "Finish project",
					complete: false
				},
				{
					id: 2,
					name: "Read chapter 4",
					complete: false
				},
				{
					id:3,
					name: "Turn in homework",
					complete: false
				}
			]
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
	}
}