import React, { useState } from 'react';
import OrangDuduk from '../assets/orangduduk.png'; 
import MukaOrang from '../assets/mukaorang.png'; 

const projectData = [
    { 
        category: 'UI/UX Design', 
        title: 'Creative Portfolio Platform', 
        description: 'Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas',
        team: [{ name: 'Budi Santoso', role: 'Frontend Developer' }, { name: 'Budi Santoso', role: 'Frontend Developer' }, { name: 'Budi Santoso', role: 'Frontend Developer' }],
        image: OrangDuduk 
    },
    { 
        category: 'Web Development', 
        title: 'Sistem Reservasi Hotel Cepat', 
        description: 'Aplikasi berbasis web untuk pemesanan hotel dengan integrasi pembayaran yang efisien.',
        team: [{ name: 'Budi Santoso', role: 'Frontend Developer' }, { name: 'Budi Santoso', role: 'Frontend Developer' }],
        image: OrangDuduk
    },
    { 
        category: 'Mobile Development', 
        title: 'Aplikasi Analitik Sentimen', 
        description: 'Aplikasi mobile untuk memonitor dan menganalisis sentimen pengguna terhadap brand tertentu.',
        team: [{ name: 'Budi Santoso', role: 'Frontend Developer' }, { name: 'Budi Santoso', role: 'Frontend Developer' }],
        image: OrangDuduk 
    },
];

function ProjectShowcase() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = projectData.length;
    const currentProject = projectData[currentSlide];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    Showcase <span className="text-[#1e3a8a]">Student Projects</span>
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                    Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
                </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl flex flex-col lg:flex-row items-center relative overflow-hidden border border-gray-100 min-h-[500px]">
                
                <button 
                    onClick={prevSlide}
                    className="absolute z-10 left-0 md:left-2 top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 text-gray-600 hover:text-blue-600 rounded-full bg-white shadow-lg flex items-center justify-center transition"
                >
                    &larr;
                </button>
                <div className="lg:w-1/2 p-4 order-2 lg:order-1 transition-opacity duration-500">

                    <span className="inline-block bg-[#B3D6FF] text-[#1e3a8a] text-sm font-semibold px-4 py-2 rounded-full mb-4">
                        {currentProject.category}
                    </span>
                    
                    <h3 className="text-3xl font-bold mb-4 text-gray-900">
                        {currentProject.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm"> 
                        {currentProject.description}
                    </p>

                    <p className="font-semibold mb-3 text-gray-700">Tim Pembuat :</p>
                    <div className="space-y-3 mb-6">
                        {currentProject.team.map((member, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <img 
                                    src={MukaOrang} 
                                    alt="Avatar" 
                                    className="w-8 h-8 rounded-full border border-gray-300 p-1 object-cover" 
                                /> 
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{member.name}</p>
                                    <p className="text-xs text-gray-500">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        Live Demo
                    </button>
                </div>

                {/* Konten Kanan */}
                <div className="lg:w-1/2 p-4 mt-8 lg:mt-0 order-1 lg:order-2 transition-opacity duration-500">
                    <div className="w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#fff1f2] p-1"> 
    
                        <img 
                            src={currentProject.image} 
                            alt={`Project ${currentProject.category}`} 
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>
            
                <button 
                    onClick={nextSlide}
                    className="absolute z-10 right-0 md:right-2 top-1/2 transform -translate-y-1/2 p-2 w-10 h-10 text-gray-600 hover:text-blue-600 rounded-full bg-white shadow-lg flex items-center justify-center transition"
                >
                    &rarr;
                </button>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
                {projectData.map((_, index) => (
                    <div 
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></div>
                ))}
            </div>

        </section>
    );
}

export default ProjectShowcase;