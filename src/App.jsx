import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 items-center xl:gap-0 gap-6 grid-cols-1"
        id="beranda"
      >
        <div>
          <div className="flex items-center gap-3 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.ProfilImage}
              alt=""
              className="w-10 rounded-md"
            />
            <q>Kode yang indah, lahir dari ketekunan.</q>
          </div>
          <h1 className="md:text-3xl/tight text-2xl/tight font-bold mt-6 mb-4">
            Hi, Saya Moh. Rizki Risaleh
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming dan Desainer,
            terutama pada pembuatan website dan aplikasi mobile, ketertarikan
            pada bidang ini sudah berlangsung dari 4 tahun pada semua bidang.
          </p>
          <div className="flex items-center sm:gap-6 gap-2">
            <a
              href="/assets/CV-Moh-Rizki-Risaleh.pdf"
              download="CV-Moh-Rizki-Risaleh.pdf"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-125 rounded-lg md:ml-auto"
        />
      </div>
      {/* Section Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.ProfilImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Halo, perkenalkan saya{" "}
            <span className="font-semibold text-white">Moh. Rizki Risaleh</span>
            , yang berfokus sebagai{" "}
            <span className="text-violet-400 font-medium">
              Web & Mobile Developer
            </span>
            . Berpengalaman mengembangkan platform web visualisasi data di
            Diskominfo Jawa Tengah serta aktif menggarap berbagai proyek{" "}
            <i>freelance</i>. Menguasai <i>tech stack</i> modern seperti
            Laravel, React JS, Next JS, Kotlin, MySQL, dan PostgreSQL. Saya
            percaya bahwa arsitektur kode yang bersih dan antarmuka yang
            responsif adalah kunci utama dalam menghadirkan solusi perangkat
            lunak yang efisien serta andal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.ProfilImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center shrink-0">
        <img
          src={DataImage.Penghargaan} 
          alt="Lulusan Terbaik bersama Rektor"
          className="mt-16 w-auto object-cover rounded-xl shadow-lg border border-zinc-700 mb-3"
        />
        <span className="px-3 py-1 text-center text-2xl font-semibold mb-2 rounded-full border border-violet-500/30">
          Lulusan Terbaik 🏆
        </span>
        <span className="px-3 py-1 bg-violet-600/20 text-center text-1xl font-semibold mb-2 rounded-full border border-violet-500/30">
          Prodi Informatika Universitas Peradaban Tahun 2026
        </span>
      </div>
        </div>

        <div className="tools mt-12">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full opacity-50">
            Berikut ini beberapa tools yang biasa saya pakai dalam pembuatan web
            & aplikasi mobile:
          </p>
          <div className="tools-box mt-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
              >
                <img
                  src={tool.gambar}
                  alt="tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section Proyek */}
      <div className="proyek mt-16 py-8" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut ini beberapa proyek yang telah saya buat:
        </p>
        <div className="proyek-box mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="Proyek Image" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href={proyek.link}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Section Kontak */}
      <div className="kontak mt-16 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Mari terhubung dengan saya.
        </p>
        <form
          action="https://formsubmit.app/f/dywp2yd4vq"
          method="POST"
          className="items-center bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukan Nama..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukan Email..."
                required
                className="border border-zinc-500 p-2 rounded-md"
              />
            </div>
            {/* <div className="flex flex-col gap-2">
              <label className="font-semibold">Password</label>
              <input type="password" name="password" placeholder="Masukan password..." required className="border border-zinc-500 p-2 rounded-md"/>
            </div> */}
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan..."
                className="border border-zinc-500 p-2 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-violet-700 p-2 rounded-md hover:bg-violet-600 w-full cursor-pointer"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
