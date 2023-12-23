// Promise adalah adalah object yang meawakili nilai yang belum tersedia, namun akan tersedia pada suatu waktu dimasa depan
// promise dapat diibaratkan seperti janji, janji ini punya tiga kemungkinan yaitu ditepati, diingkari, dan tertunda
// tiga kemungkinan tadi di wakili oleh callback function yaitu resolve (ditepati), reject (diingkari), dan pending (tertunda)

/* <===============================================================================> */
/* <===============================================================================> */

// Fungsi yang mengembalikan Promise
function fetchData(isSuccess) {
    return new Promise((resolve, reject) => {
      // Simulasi operasi asynchronous
      setTimeout(() => {
        if (isSuccess) {
          resolve('Data berhasil diambil');
        } else {
          reject('Gagal mengambil data');
        }
      }, 2000); // Simulasi waktu yang dibutuhkan untuk operasi asynchronous
    });
  }
  
  // Menggunakan Promise dengan .then() dan .catch()
  fetchData(true)
    .then((result) => {
      console.log('Resolve:', result);
    })
    .catch((error) => {
      console.error('Reject:', error);
    });
  
  // Contoh chaining dengan Promise
  fetchData(false)
    .then((result) => {
      console.log('Resolve:', result); // Tidak akan terpanggil karena operasi gagal
      return 'Data tambahan'; // Memberikan nilai yang akan di-pass ke .then() berikutnya
    })
    .then((additionalData) => {
      console.log('Additional Data:', additionalData);
    })
    .catch((error) => {
      console.error('Reject:', error); // Akan terpanggil karena operasi gagal
    });
  