/**
 * DATA LAYER - Sistem Informasi Capstone
 * Telkom University Jakarta
 * Menggunakan localStorage sebagai mock database
 */

const DB_KEY = 'capstone_tuj_db';

// ...
const DEFAULT_DATA = {
  users: [
    {
      id: 'u1', email: 'admin@tuj.ac.id', password: 'admin123',
      role: 'admin', name: 'Admin Sistem',
      nim: null, nip: 'ADMIN001',
      createdAt: '2025-01-01'
    },
    {
      id: 'u2', email: 'budi@tuj.ac.id', password: 'mhs123',
      role: 'mahasiswa', name: 'Budi Santoso',
      nim: '1101210001', nip: null,
      kelas: 'TI-46-01', kelompok: 'A',
      createdAt: '2025-01-10'
    },
    {
      id: 'u3', email: 'sari@tuj.ac.id', password: 'mhs123',
      role: 'mahasiswa', name: 'Sari Dewi',
      nim: '1101210002', nip: null,
      kelas: 'TI-46-01', kelompok: 'A',
      createdAt: '2025-01-10'
    },
    {
      id: 'u4', email: 'rizki@tuj.ac.id', password: 'mhs123',
      role: 'mahasiswa', name: 'Rizki Pratama',
      nim: '1101210003', nip: null,
      kelas: 'TI-46-02', kelompok: 'B',
      createdAt: '2025-01-10'
    },
    {
      id: 'u5', email: 'pb.agus@tuj.ac.id', password: 'dosen123',
      role: 'dosen_pembimbing', name: 'Dr. Agus Wahyudi, M.Kom.',
      nim: null, nip: 'NIP001',
      createdAt: '2025-01-01'
    },
    {
      id: 'u6', email: 'pb.lina@tuj.ac.id', password: 'dosen123',
      role: 'dosen_pembimbing', name: 'Dr. Lina Kartika, S.T., M.T.',
      nim: null, nip: 'NIP002',
      createdAt: '2025-01-01'
    },
    {
      id: 'u7', email: 'pj.rudi@tuj.ac.id', password: 'dosen123',
      role: 'dosen_penguji', name: 'Prof. Dr. Rudi Hermawan, M.Sc.',
      nim: null, nip: 'NIP003',
      createdAt: '2025-01-01'
    },
    {
      id: 'u8', email: 'pj.yuni@tuj.ac.id', password: 'dosen123',
      role: 'dosen_penguji', name: 'Dr. Yuni Astuti, M.Kom.',
      nim: null, nip: 'NIP004',
      createdAt: '2025-01-01'
    },
    {
      id: 'u9', email: 'ahmad@tuj.ac.id', password: 'mhs123',
      role: 'mahasiswa', name: 'Ahmad Fauzi',
      nim: '1101210004', nip: null,
      kelas: 'TI-46-01', kelompok: 'A',
      createdAt: '2025-01-10'
    }
  ],

  assignments: [
    { id: 'as1', mahasiswaId: 'u2', dosenPembimbingId: 'u5', dosenPengujiId: 'u7' },
    { id: 'as2', mahasiswaId: 'u3', dosenPembimbingId: 'u5', dosenPengujiId: 'u8' },
    { id: 'as3', mahasiswaId: 'u4', dosenPembimbingId: 'u6', dosenPengujiId: 'u7' },
    { id: 'as4', mahasiswaId: 'u9', dosenPembimbingId: 'u6', dosenPengujiId: null },
  ],

  kriteriaPenilaian: [
    { id: 'k1', nama: 'Presentasi & Komunikasi', bobot: 25, aktif: true, createdAt: '2025-01-15' },
    { id: 'k2', nama: 'Kualitas Laporan', bobot: 30, aktif: true, createdAt: '2025-01-15' },
    { id: 'k3', nama: 'Implementasi Sistem', bobot: 30, aktif: true, createdAt: '2025-01-15' },
    { id: 'k4', nama: 'Inovasi & Kreativitas', bobot: 15, aktif: true, createdAt: '2025-01-15' }
  ],

  kriteriaPeerReview: [
    { id: 'pr1', aspek: 'Kontribusi terhadap kelompok', deskripsi: 'Seberapa besar kontribusi mahasiswa dalam proyek kelompok', aktif: true },
    { id: 'pr2', aspek: 'Kerjasama & Komunikasi', deskripsi: 'Kemampuan bekerja sama dan berkomunikasi dalam tim', aktif: true },
    { id: 'pr3', aspek: 'Kualitas Pekerjaan', deskripsi: 'Kualitas output/deliverables yang dihasilkan', aktif: true },
    { id: 'pr4', aspek: 'Ketepatan Waktu', deskripsi: 'Kemampuan menyelesaikan tugas tepat waktu', aktif: true }
  ],

  laporan: [
    {
      id: 'l1', mahasiswaId: 'u2',
      judul: 'Sistem Informasi Manajemen Perpustakaan Berbasis Web',
      fileName: 'Laporan_Capstone_Project_Budi_Santoso.pdf',
      fileSize: '2.4 MB',
      uploadAt: '2025-03-10',
      statusPembimbing: 'disetujui',
      catatanPembimbing: 'Laporan sudah baik, silahkan lanjut ke tahap ujian.',
      tanggalKonfirmasi: '2025-03-12'
    },
    {
      id: 'l2', mahasiswaId: 'u3',
      judul: 'Aplikasi E-Commerce UMKM Berbasis Mobile',
      fileName: 'Laporan_Capstone_Project_Sari_Dewi.pdf',
      fileSize: '3.1 MB',
      uploadAt: '2025-03-11',
      statusPembimbing: 'menunggu',
      catatanPembimbing: null,
      tanggalKonfirmasi: null
    },
    {
      id: 'l3', mahasiswaId: 'u4',
      judul: 'Sistem Pemantauan Lingkungan IoT',
      fileName: 'Laporan_Capstone_Project_Rizki_Pratama.pdf',
      fileSize: '1.8 MB',
      uploadAt: '2025-03-09',
      statusPembimbing: 'ditolak',
      catatanPembimbing: 'Bab 3 perlu diperbaiki, metodologi kurang lengkap. Harap perbaiki dan upload ulang.',
      tanggalKonfirmasi: '2025-03-11'
    }
  ],

  penilaian: [
    {
      id: 'pn1', mahasiswaId: 'u2', dosenPengujiId: 'u7',
      nilai: { k1: 88, k2: 85, k3: 90, k4: 82 },
      nilaiAkhir: 87,
      catatan: 'Presentasi sangat baik, implementasi sistem sudah lengkap.',
      tanggalInput: '2025-03-20',
      status: 'final'
    }
  ],

  peerReview: [
    {
      id: 'peer1',
      reviewerId: 'u2',
      revieweeId: 'u3',
      nilai: { pr1: 4, pr2: 5, pr3: 4, pr4: 4 },
      catatan: 'Rekan yang baik dan kooperatif.',
      tanggalIsi: '2025-03-15'
    }
  ],

  periodeCapstone: {
    nama: 'Semester Ganjil 2026/2027',
    mulai: '2026-08-01',
    selesai: '2027-01-31',
    tahunAkademik: '2026/2027',
    aktif: true
  }
};

// ─── DB Methods ───────────────────────────────────────────────────────────────

const DB = {
  _data: null,

  load() {
    try {
      const raw = localStorage.getItem(DB_KEY);
      if (raw) {
        this._data = JSON.parse(raw);
        // Paksa migrasi jika nama semester belum diperbarui ke Ganjil 2026/2027
        if (this._data.periodeCapstone && this._data.periodeCapstone.nama !== 'Semester Ganjil 2026/2027') {
          this._data.periodeCapstone.nama = 'Semester Ganjil 2026/2027';
          this._data.periodeCapstone.tahunAkademik = '2026/2027';
          this._data.periodeCapstone.mulai = '2026-08-01';
          this._data.periodeCapstone.selesai = '2027-01-31';
          this.save();
        }
      } else {
        this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        this.save();
      }
    } catch (e) {
      console.error('DB load error:', e);
      this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    return this;
  },

  save() {
    localStorage.setItem(DB_KEY, JSON.stringify(this._data));
  },

  reset() {
    this._data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    this.save();
  },

  get(table) {
    if (!this._data) this.load();
    return this._data[table] || [];
  },

  getOne(table, id) {
    return this.get(table).find(item => item.id === id) || null;
  },

  add(table, item) {
    if (!this._data[table]) this._data[table] = [];
    const newItem = { id: generateId(), ...item, createdAt: new Date().toISOString().split('T')[0] };
    this._data[table].push(newItem);
    this.save();
    return newItem;
  },

  update(table, id, updates) {
    const idx = this._data[table].findIndex(item => item.id === id);
    if (idx === -1) return null;
    this._data[table][idx] = { ...this._data[table][idx], ...updates };
    this.save();
    return this._data[table][idx];
  },

  delete(table, id) {
    const idx = this._data[table].findIndex(item => item.id === id);
    if (idx === -1) return false;
    this._data[table].splice(idx, 1);
    this.save();
    return true;
  },

  getConfig(key) {
    if (!this._data) this.load();
    return this._data[key] || null;
  },

  setConfig(key, value) {
    this._data[key] = value;
    this.save();
  }
};

function generateId() {
  return 'id_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// ─── Specific Query Helpers ───────────────────────────────────────────────────

const DataService = {

  // Users
  getUserByEmail(email) {
    return DB.get('users').find(u => u.email.toLowerCase() === email.toLowerCase());
  },
  getUserById(id) { return DB.getOne('users', id); },
  getMahasiswaList() { return DB.get('users').filter(u => u.role === 'mahasiswa'); },
  getDosenPembimbingList() { return DB.get('users').filter(u => u.role === 'dosen_pembimbing'); },
  getDosenPengujiList() { return DB.get('users').filter(u => u.role === 'dosen_penguji'); },

  // Assignments
  getAssignmentByMahasiswa(mahasiswaId) {
    return DB.get('assignments').find(a => a.mahasiswaId === mahasiswaId) || null;
  },
  getMahasiswaByPembimbing(dosenId) {
    const asgns = DB.get('assignments').filter(a => a.dosenPembimbingId === dosenId);
    return asgns.map(a => ({ ...DB.getOne('users', a.mahasiswaId), assignment: a })).filter(Boolean);
  },
  getMahasiswaByPenguji(dosenId) {
    const asgns = DB.get('assignments').filter(a => a.dosenPengujiId === dosenId);
    return asgns.map(a => ({ ...DB.getOne('users', a.mahasiswaId), assignment: a })).filter(Boolean);
  },
  createOrUpdateAssignment(mahasiswaId, updates) {
    const existing = DB.get('assignments').find(a => a.mahasiswaId === mahasiswaId);
    if (existing) {
      return DB.update('assignments', existing.id, updates);
    } else {
      return DB.add('assignments', { mahasiswaId, ...updates });
    }
  },

  // Laporan
  getLaporanByMahasiswa(mahasiswaId) {
    const list = DB.get('laporan').filter(l => l.mahasiswaId === mahasiswaId);
    return list.sort((a, b) => new Date(b.uploadAt) - new Date(a.uploadAt));
  },
  getLaporanById(id) { return DB.getOne('laporan', id); },
  uploadLaporan(mahasiswaId, data) {
    return DB.add('laporan', { mahasiswaId, statusPembimbing: 'menunggu', catatanPembimbing: null, tanggalKonfirmasi: null, ...data });
  },
  konfirmasiLaporan(laporanId, status, catatan) {
    return DB.update('laporan', laporanId, {
      statusPembimbing: status,
      catatanPembimbing: catatan || null,
      tanggalKonfirmasi: new Date().toISOString().split('T')[0]
    });
  },

  // Penilaian
  getPenilaianByMahasiswa(mahasiswaId) {
    return DB.get('penilaian').filter(p => p.mahasiswaId === mahasiswaId);
  },
  getPenilaianByPenguji(dosenId) {
    return DB.get('penilaian').filter(p => p.dosenPengujiId === dosenId);
  },
  getPenilaianByMahasiswaAndPenguji(mahasiswaId, dosenId) {
    return DB.get('penilaian').find(p => p.mahasiswaId === mahasiswaId && p.dosenPengujiId === dosenId) || null;
  },
  simpanPenilaian(data) {
    const existing = this.getPenilaianByMahasiswaAndPenguji(data.mahasiswaId, data.dosenPengujiId);
    if (existing) {
      return DB.update('penilaian', existing.id, data);
    } else {
      return DB.add('penilaian', data);
    }
  },
  hitungNilaiAkhir(nilaiObj) {
    const kriteria = DB.get('kriteriaPenilaian').filter(k => k.aktif);
    let total = 0, totalBobot = 0;
    kriteria.forEach(k => {
      if (nilaiObj[k.id] !== undefined) {
        total += (nilaiObj[k.id] * k.bobot);
        totalBobot += k.bobot;
      }
    });
    return totalBobot > 0 ? Math.round(total / totalBobot) : 0;
  },

  // Peer Review
  getPeerReviewByReviewer(reviewerId) {
    return DB.get('peerReview').filter(p => p.reviewerId === reviewerId);
  },
  getPeerReviewByReviewee(revieweeId) {
    return DB.get('peerReview').filter(p => p.revieweeId === revieweeId);
  },
  getPeerReviewByPair(reviewerId, revieweeId) {
    return DB.get('peerReview').find(p => p.reviewerId === reviewerId && p.revieweeId === revieweeId) || null;
  },
  simpanPeerReview(data) {
    const existing = this.getPeerReviewByPair(data.reviewerId, data.revieweeId);
    if (existing) {
      return DB.update('peerReview', existing.id, { ...data, tanggalIsi: new Date().toISOString().split('T')[0] });
    } else {
      return DB.add('peerReview', { ...data, tanggalIsi: new Date().toISOString().split('T')[0] });
    }
  },

  // CRUD Kriteria Penilaian
  getKriteriaPenilaian() { return DB.get('kriteriaPenilaian'); },
  addKriteriaPenilaian(data) { return DB.add('kriteriaPenilaian', data); },
  updateKriteriaPenilaian(id, data) { return DB.update('kriteriaPenilaian', id, data); },
  deleteKriteriaPenilaian(id) { return DB.delete('kriteriaPenilaian', id); },
  getTotalBobot() {
    return DB.get('kriteriaPenilaian').filter(k => k.aktif).reduce((sum, k) => sum + (k.bobot || 0), 0);
  },

  // CRUD Kriteria Peer Review
  getKriteriaPeerReview() { return DB.get('kriteriaPeerReview'); },
  addKriteriaPeerReview(data) { return DB.add('kriteriaPeerReview', data); },
  updateKriteriaPeerReview(id, data) { return DB.update('kriteriaPeerReview', id, data); },
  deleteKriteriaPeerReview(id) { return DB.delete('kriteriaPeerReview', id); },

  // Users CRUD
  addUser(userData) { return DB.add('users', userData); },
  updateUser(id, data) { return DB.update('users', id, data); },
  deleteUser(id) { return DB.delete('users', id); },

  // Periode
  getPeriode() { return DB.getConfig('periodeCapstone'); },
  setPeriode(data) { return DB.setConfig('periodeCapstone', data); }
};
