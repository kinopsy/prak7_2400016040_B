import React from 'react';
import ClockIcon from '../assets/clock.png';         
import CalendarIcon from '../assets/lucide_calendar.png'; 
import IconCareerTalks from '../assets/majesticons_chat-line.png'; 
import IconExtraClasses from '../assets/akar-icons_book.png';       
import IconProjectWork from '../assets/mingcute_code-fill.png';      
import IconMentoring from '../assets/octicon_people-24 (1).png';     

const scheduleItems = [
    { title: 'Career Talks', description: 'Sesi sharing dari praktisi industri dan alumni sukses', color: 'bg-[#FFEFAF]', icon: IconCareerTalks }, 
    { title: 'Extra Classes', description: 'Kelas tambahan skill development dan workshop teknis', color: 'bg-[#B4F0C3]', icon: IconExtraClasses }, 
    { title: 'Project Work', description: 'Mengerjakan project nyata dengan bimbingan mentor', color: 'bg-[#B3D6FF]', icon: IconProjectWork }, 
    { title: 'Mentoring', description: 'Sesi konsultasi personal dengan mentor berpengalaman', color: 'bg-[#FFC9E8]', icon: IconMentoring }, 
];

function Schedule() {
    return (
        <section className="container mx-auto px-6 py-16" style={{ fontFamily: 'Poppins, sans-serif' }}>
            
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    Jadwal & <span className="text-[#1e3a8a]">Program Kegiatan</span>
                </h2>
                <p className="mt-2 text-gray-600">
                    Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 mb-10 border border-gray-100 max-w-4xl mx-auto">
                 <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center px-6 py-2 text-blue-600 font-semibold border border-blue-200 bg-white rounded-full shadow-md">
                        <img src={CalendarIcon} alt="Calendar Icon" className='w-5 h-5 mr-2' />
                        Setiap Sabtu
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    
                    {/* Kartu Sesi Pagi */}
                    <div className="md:w-1/2 p-4 bg-gradient-to-r from-yellow-50 to-green-100 rounded-xl shadow-inner border border-green-200 flex items-center">
                        
                        {/* ICON JAM  */}
                        <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center mr-3 p-1">
                             <img src={ClockIcon} alt="Clock Icon" className='w-full h-full object-contain' />
                        </div>
                        
                        <div className='flex flex-col'>
                            <p className="text-sm font-bold text-gray-700">Sesi Pagi</p> 
                            <p className="text-sm text-blue-800 mb-1">09.00 - 12.00 WIB</p>
                            <p className="text-sm font-normal text-gray-600">Workshop, Career Talks, dan Extra Classes intensif</p>
                        </div>
                    </div>
                    
                    {/* Kartu Sesi Sore */}
                    <div className="md:w-1/2 p-4 bg-gradient-to-r from-yellow-50 to-green-100 rounded-xl shadow-inner border border-green-200 flex items-center">

                        <div className="w-10 h-10 rounded-full bg-[#1e3a8a] flex items-center justify-center mr-3 p-1">
                             <img src={ClockIcon} alt="Clock Icon" className='w-full h-full object-contain' />
                        </div>

                        <div className='flex flex-col'>
                            <p className="text-sm font-bold text-gray-700">Sesi Sore</p>
                            <p className="text-sm text-blue-800 mb-1">16.00 - 19.00 WIB</p>
                            <p className="text-sm font-normal text-gray-600">Project Work, Mentoring, dan Collaboration Session</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scheduleItems.map((item) => (
                    <div 
                        key={item.title} 
                        className={`p-6 rounded-xl shadow-md border-2 border-transparent hover:border-blue-400 transition duration-300 ${item.color} text-gray-800`}
                    >
                        <img 
                            src={item.icon} 
                            alt={`${item.title} Icon`} 
                            className="w-10 h-10 mb-3" 
                        />
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-700">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Schedule;