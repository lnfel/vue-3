import swal from 'sweetalert';

export default {
    methods: {
        flash(title, message, level = 'success') {
            return swal(title, message, level);
        }
    }
}
