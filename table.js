// ===== RENDER TABEL =====
function renderTable() {
    const tbody = document.querySelector("#tabelAbsensi tbody");

    // Kosongkan isi tabel dulu
    tbody.innerHTML = "";

    dataAbsensi.forEach((item, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td class="status-${item.status}">${item.status}</td>
            <td>${item.tanggal}</td>
        `;

        tbody.appendChild(row);
    });
}