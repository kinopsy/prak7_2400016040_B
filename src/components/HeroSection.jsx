import React from 'react';
import OrangDuduk from '../assets/orangduduk.png'; 
import IconIdeation from '../assets/lets-icons_lamp-light.png';
import IconCreation from '../assets/lucide_wrench.png';
import IconCollaboration from '../assets/octicon_people-24.png';
import IconGuidance from '../assets/simple-line-icons_graduation.png';

const pillars = [
  { title: 'Ideation', description: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.', color: 'bg-[#FFEFAF]', icon: IconIdeation }, 
  { title: 'Creation', description: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.', color: 'bg-[#B4F0C3]', icon: IconCreation }, 
  { title: 'Collaboration', description: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.', color: 'bg-[#B3D6FF]', icon: IconCollaboration }, 
  { title: 'Guidance & Support', description: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.', color: 'bg-[#FFC9E8]', icon: IconGuidance }, 
];

function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* JUDUL UTAMA & GAMBAR */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-20">
        <div className="md:w-1/2">
          <h1 
            className="text-6xl font-bold text-gray-900 leading-tight mb-4" 
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              lineHeight: '100%', 
              maxWidth: '896px', 
              minHeight: '288px' 
            }}
          >
            <span className="text-[#1e3a8a]">RUANG EKSPRESI : </span>
            Wadah kreatif & Kompetitif Mahasiswa
          </h1>

          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-4 py-2 rounded-full bg-[#FFEFAF] text-gray-800 text-sm font-semibold">Ideation</span>
            <span className="px-4 py-2 rounded-full bg-[#B4F0C3] text-gray-800 text-sm font-semibold">Creation</span>
            <span className="px-4 py-2 rounded-full bg-[#B3D6FF] text-gray-800 text-sm font-semibold">Collaboration</span>
            <span className="px-4 py-2 rounded-full bg-[#FFC9E8] text-gray-800 text-sm font-semibold">Guidance & Support</span>
          </div>
        </div>
        
        {/* Konten Kanan */}
        <div className="md:w-1/2 flex justify-end">
          <div 
            className="rounded-xl overflow-hidden shadow-xl border border-gray-100"
            style={{ 
                width: '401px', 
                height: '411px', 
                borderRadius: '20px' 
            }}
          >
             <img 
                src={OrangDuduk} 
                alt="Students collaborating" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>
      </div>
      <div className="text-center mb-12 pt-10">
        <h2 className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Empat Pilar <span className="text-[#1e3a8a]">Ruang Ekspresi</span></h2>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.title} 
            className={`p-6 rounded-xl shadow-md border border-gray-100 h-full ${pillar.color} text-gray-800 flex flex-col items-center justify-center`}
          >
            <img 
                src={pillar.icon} 
                alt={`${pillar.title} Icon`} 
                className="w-10 h-10 mb-4" 
            /> 
            <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
            <p className="text-sm text-gray-700 text-center">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;