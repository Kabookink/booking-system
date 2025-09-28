"use client";
import { useState, useEffect } from "react";

const initialItems = [
  { id: 1, name: "Anna S.", date: "16 September 2025", where: "Makan di Tempat", text: "Tempatnya enak, tenang, dan Bersih", mood: 4 },
  { id: 2, name: "Budi R.", date: "12 September 2025", where: "Bawa Pulang", text: "Pelayanan cepat dan ramah", mood: 5 },
  { id: 3, name: "Siti A.", date: "08 September 2025", where: "Makan di Tempat", text: "Suasananya cocok untuk keluarga", mood: 4 },
  { id: 4, name: "Dewi K.", date: "05 September 2025", where: "Makan di Tempat", text: "Kopinya juara! Pasti kembali lagi.", mood: 5 },
  { id: 5, name: "Eko P.", date: "02 September 2025", where: "Bawa Pulang", text: "Packaging rapi dan pesanan cepat sampai.", mood: 4 },
];

export default function Testimoni() {
  const [items, setItems] = useState(initialItems);
  const [currentIndex, setCurrentIndex] = useState(0); // Mengganti nama `index` agar lebih jelas
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    where: "Makan di Tempat",
    experience: "",
    ratings: { pelayanan: "", kebersihan: "", ketepatan: "", kecepatan: "" },
    comments: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const itemsToShow = 3; // Tentukan berapa item yang tampil di layar besar
  const maxIndex = items.length > itemsToShow ? items.length - itemsToShow : 0;

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowModal(false);
    }
    if (showModal) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => {
        document.getElementById("review-name")?.focus();
      }, 50);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [showModal]);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      date: "",
      where: "Makan di Tempat",
      experience: "",
      ratings: { pelayanan: "", kebersihan: "", ketepatan: "", kecepatan: "" },
      comments: "",
    });
  };

  // ## PERUBAHAN 2: Logika `handleFormSubmit` diperbarui ##
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name || !form.comments) return alert("Nama dan Komentar wajib diisi!");

    setSubmitting(true);

    const moodMap = { sad: 1, meh: 2, neutral: 3, happy: 4, "very-happy": 5 };
    const newMood = moodMap[form.experience] || 3;

    const newTestimonial = {
      id: Date.now(),
      name: form.name,
      date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
      where: form.where,
      text: form.comments,
      mood: newMood,
    };

    // 3. Tambahkan testimoni baru ke awal daftar `items`
    setItems([newTestimonial, ...items]);

    // 4. Lanjutkan proses seperti biasa
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setShowModal(false);
      alert("Terima kasih atas ulasan Anda!");
    }, 500); // Waktu bisa dipercepat
  };

  return (
    <section className="relative bg-[#eafaf3] py-12 px-6 md:px-10 lg:px-16">
      {/* Container Utama Testimoni */}
      <div className="max-w-7xl mx-auto bg-[#3b8271] rounded-2xl p-8 md:p-12 text-white relative shadow-lg">
        {/* Header dengan Ikon dan Tombol Navigasi */}
        <div className="flex justify-between items-center mb-8">
          <div className="bg-white/10 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Testimoni</h2>
          <div className="flex gap-3">
            <button aria-label="prev" onClick={prev} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform hover:scale-110">
              ←
            </button>
            <button aria-label="next" onClick={next} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white transition-transform hover:scale-110">
              →
            </button>
          </div>
        </div>

        {/* Konten Kartu Testimoni */}
        {/* ## PERUBAHAN 2: Struktur JSX Carousel ## */}
        <div className="relative overflow-hidden">
          {/* Ini adalah "track" yang akan bergerak */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
            {items.map((it) => (
              // Setiap kartu sekarang memiliki lebar yang ditentukan dan tidak akan menyusut
              <div key={it.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <blockquote className="bg-[#eafaf3] text-[#225c4b] p-6 rounded-2xl shadow-md h-full flex flex-col">
                  <span className="text-4xl text-[#3b8271]">“</span>
                  <div className="text-center -mt-4">
                    <div className="font-bold text-lg">{it.name}</div>
                    <div className="font-semibold text-gray-700 text-sm my-1">{it.date}</div>
                    <div className="font-bold text-lg my-3 px-4 py-1 bg-[#d1e7df] rounded-full inline-block">{it.where}</div>
                    <div className="flex justify-center gap-3 my-4 text-2xl">
                      {["😠", "🙁", "😐", "😊", "😁"].map((emoji, index) => (
                        <span key={index} className={it.mood >= index + 1 ? "opacity-100" : "opacity-40"}>
                          {emoji}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">"{it.text}"</p>
                  </div>
                  <span className="text-4xl text-[#3b8271] self-end mt-auto">”</span>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tombol untuk membuka modal */}
      <div className="max-w-7xl mx-auto mt-6 flex justify-center">
        <button onClick={() => setShowModal(true)} className="bg-[#225c4b] hover:bg-[#1a473a] transition-colors text-white px-6 py-2 rounded-full shadow-md">
          Beri Ulasan
        </button>
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-3xl bg-[#eafaf3] text-[#225c4b] rounded-lg shadow-lg p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-center w-full">Ulasan Kami</h3>
              <button aria-label="close" onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-[#225c4b]/70 hover:text-[#225c4b]">
                ✕
              </button>
            </div>
            <form onSubmit={handleFormSubmit}>
              {/* Konten form tidak berubah */}
              <div className="space-y-6 mt-4 text-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="review-name" className="font-medium">
                      Nama
                    </label>
                    <input id="review-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md p-3 bg-white border border-gray-200" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="review-email" className="font-medium">
                      Email
                    </label>
                    <input id="review-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md p-3 bg-white border border-gray-200" placeholder="Email (opsional)" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="review-date" className="font-medium">
                    Tanggal Kunjung
                  </label>
                  <input id="review-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full rounded-md p-3 bg-white border border-gray-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <label className="font-medium">Makan di tempat atau dibawa Pulang?</label>
                    <div className="flex gap-6 pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="where" value="Makan di Tempat" checked={form.where === "Makan di Tempat"} onChange={(e) => setForm({ ...form, where: e.target.value })} className="w-4 h-4 accent-[#225c4b]" />
                        Makan di Tempat
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="where" value="Bawa Pulang" checked={form.where === "Bawa Pulang"} onChange={(e) => setForm({ ...form, where: e.target.value })} className="w-4 h-4 accent-[#225c4b]" />
                        Bawa Pulang
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-medium">Pengalaman Anda</label>
                    <div className="flex gap-4 pt-2">
                      {["sad", "meh", "neutral", "happy", "very-happy"].map((exp, i) => (
                        <label key={exp} className="cursor-pointer text-3xl transition-transform duration-200 hover:scale-110">
                          <input type="radio" name="experience" value={exp} onChange={(e) => setForm({ ...form, experience: e.target.value })} className="sr-only peer" />
                          <span className={`opacity-50 peer-checked:opacity-100 peer-checked:scale-125`}>{["😠", "🙁", "😐", "😊", "😁"][i]}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <label className="font-medium">Silahkan Berikan Penilaian</label>
                  <div className="rounded-md overflow-hidden border border-gray-300">
                    <div className="grid grid-cols-4 items-center bg-white p-3">
                      <div className="col-span-1"></div>
                      <div className="text-center font-semibold">Buruk</div>
                      <div className="text-center font-semibold">Netral</div>
                      <div className="text-center font-semibold">Baik</div>
                    </div>
                    <div>
                      {[
                        { key: "pelayanan", label: "Pelayanan pelanggan" },
                        { key: "kebersihan", label: "Kebersihan Cafe" },
                        { key: "ketepatan", label: "Ketepatan Pesanan" },
                        { key: "kecepatan", label: "Kecepatan Pesanan" },
                      ].map(({ key, label }, index) => (
                        <div key={key} className={`grid grid-cols-4 items-center p-3 ${index % 2 !== 0 ? "bg-white" : "bg-[#d1e7df]"}`}>
                          <div className="col-span-1 font-medium">{label}</div>
                          {["Buruk", "Netral", "Baik"].map((rating) => (
                            <div key={rating} className="flex justify-center">
                              <input
                                type="radio"
                                name={`rating-${key}`}
                                value={rating}
                                checked={form.ratings[key] === rating}
                                onChange={(e) => setForm({ ...form, ratings: { ...form.ratings, [key]: e.target.value } })}
                                className="w-4 h-4 accent-[#225c4b]"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="review-comments" className="font-medium">
                    Komentar
                  </label>
                  <textarea
                    id="review-comments"
                    value={form.comments}
                    onChange={(e) => setForm({ ...form, comments: e.target.value })}
                    className="w-full rounded-md p-3 h-32 bg-white border border-gray-200"
                    placeholder="Tulis pengalaman Anda..."
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button className="px-6 py-3 rounded-md bg-[#225c4b] text-white font-semibold hover:bg-[#1a473a] transition-colors" type="submit" disabled={submitting}>
                    {submitting ? "Mengirim..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
