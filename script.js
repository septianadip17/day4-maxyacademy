document.addEventListener('DOMContentLoaded', function() {
  const jumbotron = document.getElementById('jumbotron');
  const registrationForm = document.getElementById('registrationForm');

  // Menyembunyikan formulir pendaftaran saat halaman dimuat
  registrationForm.style.display = 'none';

  // Menambahkan event listener untuk tombol "Click me!"
  const clickMeButton = document.querySelector('.btn-primary');
  clickMeButton.addEventListener('click', function(event) {
    // Hentikan tindakan default dari tombol
    event.preventDefault();

    // Tampilkan formulir pendaftaran
    registrationForm.style.display = 'block';
  });
});
