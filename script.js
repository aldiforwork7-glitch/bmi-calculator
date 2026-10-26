
const beratInput = document.getElementById("berat");
const tinggiInput = document.getElementById("tinggi");

const tombolHitung = document.getElementById("hitung");
const tombolReset = document.getElementById("reset");

const hasil = document.getElementById("hasil");
const nilai = document.getElementById("nilai");
const kategori = document.getElementById("kategori");
const saran = document.getElementById("saran");
const pesan = document.getElementById("pesan");

tombolHitung.addEventListener("click", function () {
    const berat = Number(beratInput.value);
    const tinggi = Number(tinggiInput.value);

    pesan.textContent = "";
    hasil.hidden = true;

    if (
        beratInput.value.trim() === "" ||
        tinggiInput.value.trim() === "" ||
        !Number.isFinite(berat) ||
        !Number.isFinite(tinggi) ||
        berat <= 0 ||
        tinggi <= 0
    ) {
        pesan.textContent =
            "Masukkan berat dan tinggi badan yang valid.";
        return;
    }

    const tinggiMeter = tinggi / 100;
    const bmi = berat / (tinggiMeter * tinggiMeter);

    let status;
    let keterangan;

    if (bmi < 18.5) {
        status = "Berat Badan Kurang";
        keterangan =
            "Perhatikan kecukupan nutrisi dan pertimbangkan konsultasi dengan tenaga kesehatan.";
    } else if (bmi < 25) {
        status = "Berat Badan Normal";
        keterangan =
            "Pertahankan pola makan seimbang dan aktivitas fisik rutin.";
    } else if (bmi < 30) {
        status = "Berat Badan Berlebih";
        keterangan =
            "Pertimbangkan kebiasaan makan seimbang dan aktivitas fisik rutin.";
    } else {
        status = "Obesitas";
        keterangan =
            "Pertimbangkan berkonsultasi dengan tenaga kesehatan untuk evaluasi lebih lanjut.";
    }

    nilai.textContent = bmi.toFixed(1);
    kategori.textContent = status;
    saran.textContent = keterangan;

    hasil.hidden = false;
});

tombolReset.addEventListener("click", function () {
    beratInput.value = "";
    tinggiInput.value = "";

    hasil.hidden = true;
    pesan.textContent = "";
});
