// ===== ELEMENT =====
const exportBtn = document.getElementById("exportBtn");
const modal = document.getElementById("modalExport");
const batalBtn = document.getElementById("batalExport");
const konfirmasiBtn = document.getElementById("konfirmasiExport");
const namaFileInput = document.getElementById("namaFile");

// ===== BUKA MODAL =====
exportBtn.addEventListener("click", function () {

    if (dataAbsensi.length === 0) {
        alert("Belum ada data untuk diexport!");
        return;
    }

    modal.style.display = "flex";
});

// ===== TUTUP MODAL =====
batalBtn.addEventListener("click", function () {
    modal.style.display = "none";
    namaFileInput.value = "";
});

// ===== KONFIRMASI EXPORT =====
konfirmasiBtn.addEventListener("click", function () {

    let namaFile = namaFileInput.value.trim();

    if (namaFile === "") {
        alert("Nama file tidak boleh kosong!");
        return;
    }

    // Tambahkan ekstensi .xlsx
    namaFile = namaFile + ".xlsx";

    // ===== FORMAT DATA UNTUK EXCEL =====
    const dataExcel = [
        ["REKAP ABSENSI SISWA"],
        [],
        ["No", "Nama", "Status", "Tanggal"]
    ];

    dataAbsensi.forEach((item, index) => {
        dataExcel.push([
            index + 1,
            item.nama,
            item.status,
            item.tanggal
        ]);
    });

    // ===== BUAT WORKSHEET =====
    const worksheet = XLSX.utils.aoa_to_sheet(dataExcel);

    // Lebar kolom agar rapi
    worksheet["!cols"] = [
        { wch: 5 },
        { wch: 25 },
        { wch: 15 },
        { wch: 15 }
    ];

    // Merge title
    worksheet["!merges"] = [
        {
            s: { r: 0, c: 0 },
            e: { r: 0, c: 3 }
        }
    ];

    // ===== BUAT WORKBOOK =====
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Absensi");

    // ===== DOWNLOAD FILE =====
    XLSX.writeFile(workbook, namaFile);

    // Tutup modal
modal.style.display = "none";
namaFileInput.value = "";
});