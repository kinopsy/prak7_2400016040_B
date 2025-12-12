import React from 'react';
import Logo from '../assets/logo.png'; 

function Navbar() {
  const navItems = [
    { name: 'Home', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Program', link: '#' },
    { name: 'Project', link: '#' },
    { name: 'Testimonials', link: '#' },
    { name: 'Contact', link: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}> 
      {/* Padding */}
      <div className="mx-auto h-12 flex items-center justify-between" style={{ paddingLeft: '45px', paddingRight: '45px' }}>
        
        <div className="flex items-center space-x-2">
          <img 
            src={Logo} 
            alt="Ruang Ekspresi Logo" 
            className="h-8"
          />
        </div>
        
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.link} 
                className="text-gray-600 hover:text-blue-700 font-normal text-sm" 
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;