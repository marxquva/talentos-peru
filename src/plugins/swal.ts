import Swal from 'sweetalert2'
const swal = Swal.mixin({
  confirmButtonColor: '#E53935',
  cancelButtonColor: '#9E9E9E',
  buttonsStyling: true,
  customClass: {
    confirmButton: 'swal-confirm-btn',
    cancelButton: 'swal-cancel-btn',
  },
})

export default swal
