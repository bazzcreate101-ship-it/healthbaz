import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">💊</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Healthbazz</h1>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition">Fitur</a>
            <a href="#categories" className="text-gray-600 hover:text-primary transition">Kategori</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition">Cara Kerja</a>
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
              Masuk
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600">☰</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="gradient-primary text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Kesehatan Anda adalah Prioritas Kami
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Pesan obat secara online dengan pengiriman cepat. Dapatkan resep Anda diisi dan dikirim ke pintu rumah Anda dengan aman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
                  Pesan Sekarang
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                  Konsultasi Dokter
                </button>
              </div>
              <div className="flex gap-8 mt-10 text-sm">
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="opacity-75">Obat</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">50K+</p>
                  <p className="opacity-75">Pelanggan</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="opacity-75">Tersedia</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl border border-white/30 flex items-center justify-center">
                  <div className="text-6xl">💉</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 -mt-12 relative z-10">
            <div className="flex items-center gap-3 border-2 border-gray-200 rounded-xl px-4 py-3 focus-within:border-primary transition">
              <span className="text-2xl">🔍</span>
              <input 
                type="text" 
                placeholder="Cari obat, vitamin, suplemen..." 
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Pilih Healthbazz?
            </h2>
            <p className="text-lg text-gray-600">
              Kami menyediakan pengalaman farmasi terbaik dengan kualitas dan keandalan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Pengiriman Cepat',
                desc: 'Obat dikirim dalam 30-60 menit'
              },
              {
                icon: '🔒',
                title: 'Aman & Terpercaya',
                desc: 'Obat asli dengan resep terverifikasi'
              },
              {
                icon: '💰',
                title: 'Harga Terbaik',
                desc: 'Harga kompetitif dengan diskon rutin'
              },
              {
                icon: '👨‍⚕️',
                title: 'Dukungan Ahli',
                desc: 'Konsultasi apoteker 24/7 tersedia'
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-light rounded-2xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jelajahi Kategori
            </h2>
            <p className="text-lg text-gray-600">
              Temukan apa yang Anda butuhkan dari pilihan lengkap kami
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: '💊', name: 'Obat', count: '2.500+' },
              { icon: '🧬', name: 'Vitamin', count: '800+' },
              { icon: '🩹', name: 'Pertolongan Pertama', count: '600+' },
              { icon: '💄', name: 'Perawatan Pribadi', count: '1.200+' },
              { icon: '🏥', name: 'Alat Medis', count: '400+' }
            ].map((cat, idx) => (
              <button
                key={idx}
                className="p-6 bg-white rounded-2xl hover:shadow-xl hover:border-primary border-2 border-transparent transition group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition">{cat.icon}</div>
                <p className="font-bold text-gray-900">{cat.name}</p>
                <p className="text-sm text-gray-500">{cat.count}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cara Kerja Healthbazz
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Cari & Jelajahi',
                desc: 'Temukan obat dengan pencarian mudah kami'
              },
              {
                step: '2',
                title: 'Unggah Resep',
                desc: 'Unggah resep digital jika diperlukan'
              },
              {
                step: '3',
                title: 'Tambah ke Keranjang',
                desc: 'Pilih jumlah dan lanjutkan ke pembayaran'
              },
              {
                step: '4',
                title: 'Terima di Rumah',
                desc: 'Terima di rumah dengan pengiriman gratis'
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden md:block absolute right-0 top-20 -translate-x-8 text-3xl text-primary">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Unduh aplikasi atau kunjungi website kami untuk memesan obat sekarang
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition">
              Unduh Aplikasi
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
              Kunjungi Website
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span>💊</span>
                </div>
                <h3 className="font-bold text-lg">Healthbazz</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Mitra apotek terpercaya Anda untuk pengiriman obat yang cepat dan andal.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan Cepat</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Beranda</a></li>
                <li><a href="#" className="hover:text-primary transition">Kategori</a></li>
                <li><a href="#" className="hover:text-primary transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-primary transition">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-primary transition">Kebijakan Privasi</a></li>
                <li><a href="#" className="hover:text-primary transition">Syarat Layanan</a></li>
                <li><a href="#" className="hover:text-primary transition">Kebijakan Pengembalian</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📧 support@healthbazz.com</li>
                <li>📞 1-800-HEALTH-1</li>
                <li>🕐 Tersedia 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Healthbazz. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
