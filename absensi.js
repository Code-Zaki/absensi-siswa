// ===== FORM SUBMIT =====
const form = document.getElementById("absensiForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const namaInput = document.getElementById("nama");
    const statusInput = document.getElementById("status");

    const nama = namaInput.value.trim();
    const status = statusInput.value;

    // Validasi sederhana
    if (nama === "" || status === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // Ambil tanggal hari ini
    const tanggal = new Date().toLocaleDateString("id-ID");

    // Buat object data
    const siswa = {
        nama: nama,
        status: status,
        tanggal: tanggal
    };

    // Masukkan ke array
    dataAbsensi.push(siswa);

    // Render ulang tabel
    renderTable();

    // Reset form
    form.reset();
});