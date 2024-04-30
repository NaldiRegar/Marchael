// Fungsi untuk memeriksa apakah input adalah angka ilmiah
function checkScientificNumber() {
    var numberInput = document.getElementById("numberInput").value.trim();
    var scientificRegex = /^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i;

    if (scientificRegex.test(numberInput)) {
        document.getElementById("result").innerText = "Yes, it's a scientific number.";
    } else {
        document.getElementById("result").innerText = "No, it's not a scientific number.";
    }
}

// Fungsi untuk menampilkan modal informasi
function showModal() {
    var modal = document.querySelector('.info-modal');
    modal.style.display = 'block';
}

// Fungsi untuk menyembunyikan modal
function hideModal() {
    var modal = document.querySelector('.info-modal');
    modal.style.display = 'none';
}

// Menambahkan event listener ke tombol "Information" untuk menampilkan modal
var infoButton = document.getElementById('infoButton');
infoButton.addEventListener('click', showModal);

// Menambahkan event listener ke tombol "Close" di modal untuk menyembunyikan modal
var closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', hideModal);
