// 1. BIKIN DULU KOTAK DATANYA
let daftarTeman = [
  { nama: "Arman", umur: 19 },
  { nama: "Nabila", umur: 17 },
  { nama: "Irma", umur: 25 }
];

// 2. MESIN KARTU NAMA
function sapaUser(nama, umur) {
  console.log("--- Kartu Nama ---");
  console.log("Halo bro", nama);
  console.log("Umur lu:", umur, "tahun");

  if (umur >= 18) {
    console.log("Status: Udah dewasa, gas ngoding sampe pagi");
  } else {
    console.log("Status: Masih bocil, tapi gpp belajar dulu");
  }
  console.log("------------------");
}

// 3. LOOP: BACA SEMUA ORANG DI KOTAK
for (let i = 0; i < daftarTeman.length; i++) {
  sapaUser(daftarTeman[i].nama, daftarTeman[i].umur);
}