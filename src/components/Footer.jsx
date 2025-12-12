import React from 'react';
import Logo from '../assets/logo1.png'; 

const quickLinks = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Program', link: '#' },
    { name: 'Projects', link: '#' },
    { name: 'Testimonials', link: '#' },
    { name: 'Contact', link: '#' },
];

const programs = [
    'Career Talks',
    'Extra Classes',
    'Project Work',
    'Mentoring',
];
const FOOTER_BG_COLOR = '#1864AB';
const COPYRIGHT_BG_COLOR = '#124f8a'; 

function Footer() {
    return (
        <footer className="mt-12 text-white" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: FOOTER_BG_COLOR }}> 
            
            {/*FOOTER UTAMA */}
            <div className="container mx-auto px-6 py-10" 
                 style={{ 
                    paddingTop: '30px', 
                    paddingBottom: '30px',
                    maxWidth: '1421px' 
                 }}>
                    
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8" style={{ gap: '26px' }}>
         
                    <div className="md:col-span-2 space-y-3">
                     
                        <div className="flex items-center space-x-2 mb-4">
                            <img 
                                src={Logo} 
                                alt="Ruang Ekspresi Logo" 
                                className="h-10 filter brightness-200" 
                            />
                        </div>
                        <p className="text-sm text-gray-200 mb-6 max-w-sm">
                            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
                        </p>
             
                        <div className="space-y-2 text-xs text-gray-200 pt-2">
                            <div className="flex items-start">
                                <svg className="w-4 h-4 mr-2 flex-shrink-0 mt-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span className='w-full'>Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55198</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.882 5.683a3 3 0 003.236 0L21 8m-2-4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z"></path></svg>
                                <span>ruang_ekspresi@webmail.uad.ac.id</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-2 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.128a11.058 11.058 0 006.452 6.452l1.128-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684l-1.498-4.493a1 1 0 01.502-1.21l2.257-1.128a11.058 11.058 0 00-6.452-6.452l-1.128 2.257a1 1 0 01-1.21.502L5.45 6.027A1 1 0 015 6V3z"></path></svg>
                                <span>(0274) 611830</span>
                            </div>
                        </div>
                    </div>

                    {/* Kolom 2 */}
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 border-b border-white pb-2">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.link} className="text-gray-200 hover:text-white transition duration-150 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 border-b border-white pb-2">Programs</h4>
                        <ul className="space-y-2">
                            {programs.map((program, index) => (
                                <li key={index} className="text-gray-200 text-sm">
                                    {program}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="py-3 text-center text-white text-xs" style={{ backgroundColor: COPYRIGHT_BG_COLOR }}>
                © 2025 Ruang Ekspresi | All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;