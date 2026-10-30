import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 py-4 flex md:flex-row flex-col justify-between gap-4 items-center'>
      <h1 className='text-2xl font-bold'>Portofolio</h1>
      <div className='flex gap-7'>
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
        <a href="#kontak">Kontak</a>
      </div>
      <div className='flex items-center gap-3'>
        <a href="https://github.com/rizcvaz">
            <i className='ri-github-fill ri-2x'></i>
        </a>
        <a href="https://instagram.com/simplestyle._7">
            <i className='ri-instagram-fill ri-2x'></i>
        </a>
         <a href="mailto:rizkirisaleh@gmail.com">
            <i className='ri-mail-fill ri-2x'></i>
        </a>
        <a href="#">
            <i className='ri-whatsapp-fill ri-2x'></i>
        </a>
      </div>
    </div>
  )
}

export default Footer
