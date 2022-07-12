import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {
	components: {
		Assignments, Panel
	},

	template: `
		<div class="grid  gap-6">
			<assignments></assignments>

			<!--<panel>
				<template v-slot:heading>
					Heading
				</template>

				<template v-slot:default>
					This is my default content
				</template>
			</panel>

			<panel>
				<template v-slot:default>
					This is my default content
				</template>
			</panel>

			<panel>
				<template v-slot:heading>
					Heading
				</template>

				<template v-slot:default>
					This is my default content
				</template>

				<template v-slot:footer>
					Click here to learn more
				</template>
			</panel>

			<panel theme="light">
				<template v-slot:heading>
					Heading
				</template>

				<template v-slot:default>
					This is my default content
				</template>

				<template v-slot:footer>
					Click here to learn more
				</template>
			</panel>-->
		</div>
	`
} 
