import Swal from "sweetalert2";

export function showSuccessMessage(message: string): void {
    Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500,
    });
}