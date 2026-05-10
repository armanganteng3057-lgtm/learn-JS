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

sapaUser("Arman", 19);
sapaUser("Nabila", 17);
sapaUser("Irma", 25);