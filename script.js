document.addEventListener("DOMContentLoaded", function () {
  const jumbotron = document.getElementById("jumbotron");
  const registrationForm = document.getElementById("registrationForm");

  // Menyembunyikan formulir pendaftaran saat halaman dimuat
  registrationForm.style.display = "none";

  // Menambahkan event listener untuk tombol "Click me!"
  const clickMeButton = document.querySelector(".btn-primary");
  clickMeButton.addEventListener("click", function (event) {
    // Hentikan tindakan default dari tombol
    event.preventDefault();

    // Tampilkan formulir pendaftaran
    registrationForm.style.display = "block";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stopButton = document.getElementById("stopButton");
  const spinners = document.querySelectorAll(".spinner-border");

  // Tambahkan event listener klik untuk tombol "Stop"
  stopButton.addEventListener("click", function () {
    // Toggle tampilan spinner
    spinners.forEach((spinner) => {
      spinner.classList.toggle("d-none");
    });

    // Toggle teks tombol antara "Stop" dan "Start"
    stopButton.textContent =
      stopButton.textContent === "Stop" ? "Start" : "Stop";

    // Toggle warna tombol antara "btn-danger" dan "btn-success"
    stopButton.classList.toggle("btn-danger");
    stopButton.classList.toggle("btn-success");
  });
});
