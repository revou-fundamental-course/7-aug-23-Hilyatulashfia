
function isPositiveNumber(value) {
    return parseFloat(value) >= 0;
}

function formatNumber(number) {
    return Number.isInteger(number) ? number.toString() : number.toFixed(2);
}

function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas-input').value);
    var tinggi = parseFloat(document.getElementById('tinggi-input').value);

    if (isPositiveNumber(alas) && isPositiveNumber(tinggi)) {
        var luas = 0.5 * alas * tinggi;
        var keterangan = 'L = 1/2 x ' + alas + ' x ' + tinggi + '<br>L = ' + formatNumber(luas);
        document.getElementById('hasil-luas').innerText = 'Luas: ' + formatNumber(luas);
        document.getElementById('keterangan-luas').innerHTML = keterangan;
    } else {
        alert('Masukkan angka positif untuk alas dan tinggi.');
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1-input').value);
    var sisi2 = parseFloat(document.getElementById('sisi2-input').value);
    var sisi3 = parseFloat(document.getElementById('sisi3-input').value);

    if (isPositiveNumber(sisi1) && isPositiveNumber(sisi2) && isPositiveNumber(sisi3)) {
        var keliling = sisi1 + sisi2 + sisi3;
        var keterangan = 'K = ' + sisi1 + ' + ' + sisi2 + ' + ' + sisi3 + '<br>K = ' + formatNumber(keliling);
        document.getElementById('hasil-keliling').innerText = 'Keliling: ' + formatNumber(keliling);
        document.getElementById('keterangan-keliling').innerHTML = keterangan;
    } else {
        alert('Masukkan angka positif untuk panjang sisi A, B, dan C.');
    }
}


function toggleForm() {
    var luasSection = document.getElementById('luas-section');
    var kelilingSection = document.getElementById('keliling-section');
    luasSection.classList.toggle('hidden');
    kelilingSection.classList.toggle('hidden');
}

function resetForm() {
    document.getElementById('alas-input').value = "";
    document.getElementById('tinggi-input').value = "";
    document.getElementById('sisi1-input').value = "";
    document.getElementById('sisi2-input').value = "";
    document.getElementById('sisi3-input').value = "";
    document.getElementById('hasil-luas').innerText = "";
    document.getElementById('hasil-keliling').innerText = "";
    document.getElementById('keterangan-luas').innerHTML = "";
    document.getElementById('keterangan-keliling').innerHTML = "";
}

function showLuasSection() {
    document.getElementById('luas-section').classList.remove('hidden');
    document.getElementById('keliling-section').classList.add('hidden');
}

function showKelilingSection() {
    document.getElementById('keliling-section').classList.remove('hidden');
    document.getElementById('luas-section').classList.add('hidden');
}
