window.onload = function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Tampilkan notifikasi menggunakan iziToast
        iziToast.success({
            title: 'Success',
            message: 'Mantap, kamu berhasil mendaftar!',
            position: 'bottomLeft'
        });
    });
};
