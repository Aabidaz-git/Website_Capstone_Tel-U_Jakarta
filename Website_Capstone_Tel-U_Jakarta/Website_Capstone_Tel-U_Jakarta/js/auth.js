/**
 * AUTH - Session management & utilities
 */

const AUTH_KEY = 'capstone_session';

const Auth = {
  login(email, password) {
    DB.load();
    const user = DataService.getUserByEmail(email);
    if (!user) return { success: false, message: 'Email tidak ditemukan.' };
    if (user.password !== password) return { success: false, message: 'Password salah.' };
    sessionStorage.setItem(AUTH_KEY, JSON.stringify({ id: user.id, role: user.role }));
    return { success: true, user };
  },

  logout() {
    sessionStorage.removeItem(AUTH_KEY);
    if (window.location.pathname.includes('/pages/')) {
      window.location.href = '../index.html';
    } else {
      window.location.href = 'index.html';
    }
  },

  getSession() {
    try {
      const raw = sessionStorage.getItem(AUTH_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch { return null; }
  },

  getCurrentUser() {
    const session = this.getSession();
    if (!session) return null;
    DB.load();
    return DataService.getUserById(session.id);
  },

  requireAuth(allowedRoles) {
    DB.load();
    const user = this.getCurrentUser();
    if (!user) {
      window.location.href = '../index.html';
      return null;
    }
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      window.location.href = '../index.html';
      return null;
    }
    return user;
  }
};

// ─── Utility Functions ────────────────────────────────────────────────────────

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
}

function formatDateShort(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

function getRoleLabel(role) {
  const map = {
    admin: 'Administrator',
    mahasiswa: 'Mahasiswa',
    dosen_pembimbing: 'Dosen Pembimbing',
    dosen_penguji: 'Dosen Penguji'
  };
  return map[role] || role;
}

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

function getLaporanStatusBadge(status) {
  const map = {
    menunggu:  '<span class="badge badge-warning">⏳ Menunggu Konfirmasi</span>',
    disetujui: '<span class="badge badge-success">✅ Disetujui</span>',
    ditolak:   '<span class="badge badge-danger">❌ Ditolak</span>',
    null:      '<span class="badge badge-secondary">📄 Belum Upload</span>'
  };
  return map[status] || '<span class="badge badge-secondary">-</span>';
}

function getPenilaianStatusBadge(status) {
  const map = {
    draft:  '<span class="badge badge-warning">📝 Draft</span>',
    final:  '<span class="badge badge-success">✅ Final</span>'
  };
  return map[status] || '<span class="badge badge-secondary">-</span>';
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function showModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.add('show'); document.body.style.overflow = 'hidden'; }
}

function hideModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('show'); document.body.style.overflow = ''; }
}

function confirmDialog(message, onConfirm) {
  if (window.confirm(message)) onConfirm();
}

function getCurrentDate() {
  return new Date().toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

// Close modal on backdrop click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('show');
    document.body.style.overflow = '';
  }
});
