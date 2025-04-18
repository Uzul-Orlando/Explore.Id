// Fungsi untuk membuka modal berdasarkan jenisnya (login, register, booking)
function openModal(type) {
  closeAllModals();
  document.getElementById('modal-' + type).style.display = 'block';
}

// Fungsi untuk menutup modal berdasarkan jenisnya
function closeModal(type) {
  document.getElementById('modal-' + type).style.display = 'none';
}

// Fungsi untuk menutup semua modal yang terbuka
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });
}

// Menutup modal jika area luar modal diklik (background, bukan content)
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    closeAllModals();
  }
};

// Fungsi untuk menampilkan toast dengan pesan dan tipe (default: success)
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast show ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Menghapus toast setelah 3 detik
  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}

// Fungsi untuk memesan paket wisata
function pesanPaket(nama) {
  openModal('booking');
  document.getElementById('paket-terpilih').textContent = 'Paket yang dipilih: ' + nama;
}

// Fungsi untuk mengirim pemesanan
function kirimPemesanan() {
  const nama = document.querySelector('#modal-booking input[placeholder="Nama Lengkap"]').value;
  const email = document.querySelector('#modal-booking input[placeholder="Email Aktif"]').value;
  const telepon = document.querySelector('#modal-booking input[placeholder="No. Telepon"]').value;

  if (!nama || !email || !telepon) {
    showToast("Mohon lengkapi semua data pemesanan.", "error");
    return;
  }

  // Kirim pesan pemesanan berhasil
  showToast("Pemesanan berhasil atas nama " + nama + "!", "success");
  closeModal('booking');
}

// Fungsi untuk menangani login
function handleLogin() {
  const username = document.querySelector('#modal-login input[placeholder="Username"]').value;
  const password = document.querySelector('#modal-login input[placeholder="Password"]').value;

  if (!username || !password) {
    showToast("Username dan Password wajib diisi!", "error");
    return;
  }

  showToast("Selamat datang, " + username + "!", "success");
  closeModal('login');
}

// Fungsi untuk menangani register
function handleRegister() {
  const nama = document.querySelector('#modal-register input[placeholder="Nama Lengkap"]').value;
  const email = document.querySelector('#modal-register input[placeholder="Email"]').value;
  const password = document.querySelector('#modal-register input[placeholder="Password"]').value;

  if (!nama || !email || !password) {
    showToast("Semua field pendaftaran wajib diisi!", "error");
    return;
  }

  showToast("Pendaftaran berhasil! Silakan login.", "success");
  closeModal('register');
}

// Fungsi untuk menutup modal saat tombol close diklik
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => {
    const modalType = button.closest('.modal').id.replace('modal-', '');
    closeModal(modalType);
  });
});
