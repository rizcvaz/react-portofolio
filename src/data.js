import HeroImage from "/assets/hero_image.jpeg";
import ProfilImage from "/assets/profil-image.jpeg";

const Image = {
  HeroImage,
  ProfilImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/laravel.png";
import Tools12 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "php",
    ket: "Backend",
    dad: "900",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.jpg";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Web Membership Laundry",
    desk: "Proyek freelance ini merupakan sebuah web untuk manajemen anggota membership laundry, dengan fitur: tambah, edit dan hapus data member, setting harga membership, serta generate kartu member otomatis",
    tools: ["HTML", "tailwind", "Javascript", "PHP", "Laravel", "MySQL"],
    dad: "200",
    link: "https://wangilaundry.my.id"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Test Minat Bakat",
    desk: "Proyek ini pernah diikutsertakan dalam lomba desain web frontend di Universitas Muria Kudus, web tes minat bakat ini bertujuan untuk mengetahui minat dan bakat pengguna dengan fitur: manajemen soal, halaman tes interaktif, dan dashboard hasil tes yang informatif",
    tools: ["HTML", "tailwindCSS", "React JS", "Typescript", "Next JS"],
    dad: "300",
    link: "https://minatgo.vercel.app"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Visualisasi Data Sektoral Jawa Tengah",
    desk: "Proyek ini merupakan hasil praktik kerja lapangan di Diskominfo Provinsi Jawa Tengah, web ini dibuat dengan tujuan memvisualisasikan data sektoral ke dalam diagram, chart, dan peta secara informatif dan interaktif bagi pengguna.",
    tools: ["HTML", "TailwindCSS", "Javascript", "PHP", "Laravel", "Metabase"],
    dad: "400",
    link: "https://statistics.free.nf"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
    link: ""
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    link: ""
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
    link: ""
  },
];
