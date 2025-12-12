import React from 'react';
import MukaOrang from '../assets/mukaorang.png'; 

const testimonials = [
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
  { 
    name: 'Budi Santoso', 
    major: 'Mahasiswa Sistem Informasi', 
    quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain',
    avatar: MukaOrang 
  },
];

function CardGallery() {
  return (
    <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1e3a8a]">Testimonials</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testi, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col justify-between">
            
            {/* Quote */}
            <p className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-6 text-base flex-grow">
              "{testi.quote}"
            </p>
            {/* Profil */}
            <div className="flex items-center mt-4">
              <img 
                src={testi.avatar} 
                alt={`Avatar ${testi.name}`} 
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm" 
              /> 
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{testi.name}</h3>
                <p className="text-sm text-blue-600">{testi.major}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardGallery;