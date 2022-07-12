import { ref, watch } from "vue";

// JS docblock gist
// https://gist.github.com/mul14/c31c3bda510a552924ea027cccececb4
// https://jsdoc.app/about-getting-started.html

/**
 * Syncs vue model to localStorage
 *
 * @param {string} key
 * @param {string|null} item - optional default value
 *
 * @returns {Ref Object}
 */
export function useStorage(key, item = null) {
    let storedValue = read();

    if (storedValue) {
        item = ref(storedValue);
    } else {
        item = ref(item);
        write();
    }

    /*watch(item, () => {
        write();
    });*/

    // shortened version with deep option for watching objects
    // deep option will cost a huge performance drop for watching big objects with many attributes
    watch(item, write, { deep: true });

    function read() {
        return JSON.parse(localStorage.getItem(key));
    }

    function write() {
        if (item.value === null || item.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(item.value));
        }
    }

    return item;
}
