<script setup>
// Using Mixins
/*import flash from "@/mixins/flash.js";

export default {
    mixins: [ flash ]
}*/

/* Using composables via composition api */
import { useFlash } from "@/composables/useFlash";

let { flash } = useFlash();
</script>

<template>
    <div>
        <p>
            <button @click="flash('Yatta!', 'It Works on the About page!', 'info')">Click Me</button>
        </p>
    </div>
</template>
