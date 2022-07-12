<script setup>
/* Using mixins */
/*import flash from "@/mixins/flash.js";

export default {
    mixins: [ flash ]
}*/

/* Using composables */
/*import { useFlash } from "@/composables/useFlash";

export default {
    setup() {
        let { flash } = useFlash();

        return { flash };
    },
}*/

/* Or with composition api, simply */
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
    <main>
        <p>
            <button @click="flash('Test', 'It Works on the About page!')">Click Me</button>
        </p>
    </main>
</template>
