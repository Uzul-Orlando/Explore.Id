function openModal(type) {
  closeAllModals();
  document.getElementById('modal-' + type).style.display = 'block';
}

function closeModal(type) {
  document.getElementById('modal-' + type).style.display = 'none';
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.style.display = 'none';
  });
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    closeAllModals();
  }
};

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast show ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('show');
    toast.addEventListener('transitionend', () => toast.remove());
  }, 3000);
}

function pesanPaket(nama) {
  openModal('booking');
  document.getElementById('paket-terpilih').textContent = 'Paket yang dipilih: ' + nama;
}

function kirimPemesanan() {
  const nama = document.querySelector('#modal-booking input[placeholder="Nama Lengkap"]').value;
  const email = document.querySelector('#modal-booking input[placeholder="Email Aktif"]').value;
  const telepon = document.querySelector('#modal-booking input[placeholder="No. Telepon"]').value;

  if (!nama || !email || !telepon) {
    showToast("Mohon lengkapi semua data pemesanan.", "error");
    return;
  }

  showToast("Pemesanan berhasil atas nama " + nama + "!");
  closeModal('booking');
}

function handleLogin() {
  const username = document.querySelector('#modal-login input[placeholder="Username"]').value;
  const password = document.querySelector('#modal-login input[placeholder="Password"]').value;

  if (!username || !password) {
    showToast("Username dan Password wajib diisi!", "error");
    return;
  }

  showToast("Selamat datang, " + username + "!");
  closeModal('login');
}

function handleRegister() {
  const nama = document.querySelector('#modal-register input[placeholder="Nama Lengkap"]').value;
  const email = document.querySelector('#modal-register input[placeholder="Email"]').value;
  const password = document.querySelector('#modal-register input[placeholder="Password"]').value;

  if (!nama || !email || !password) {
    showToast("Semua field pendaftaran wajib diisi!", "error");
    return;
  }

  showToast("Pendaftaran berhasil! Silakan login.");
  closeModal('register');
}
