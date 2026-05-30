import { useState } from 'react';
import { Facebook, Linkedin, Instagram, Search, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full font-inter relative z-50">
      {/* Top Black Bar */}
      <div className="bg-[#003aa5] text-white py-4">
        <div className="max-w-[1250px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 relative px-4 sm:px-8">
          
          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Date */}
          <div className="text-sm text-white w-full sm:w-1/3 text-center sm:text-left hidden sm:block">
            Quinta-feira - 30 de Maio de 2026
          </div>

          {/* Logo Central */}
          <div className="flex-1 flex justify-center w-full sm:w-1/3">
            <a href="#home" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://files.jump86.site/images/3d2bd4f5-5966-4b54-b593-a2fd8cdc0847.png" 
                alt="Logo" 
                className="h-16 lg:h-20 object-contain"
              />
            </a>
          </div>

          {/* Social Icons & Contact */}
          <div className="hidden sm:flex flex-col items-center sm:items-end gap-2 text-sm w-full sm:w-1/3">
            <div className="flex gap-2">
              <a href="#" className="bg-[#052d7b] hover:bg-black/20 rounded p-2 transition-colors text-center flex items-center justify-center w-9 h-9">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-[#052d7b] hover:bg-black/20 rounded p-2 transition-colors text-center flex items-center justify-center w-9 h-9">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-[#052d7b] hover:bg-black/20 rounded p-2 transition-colors text-center flex items-center justify-center w-9 h-9">
                <Instagram size={18} />
              </a>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="border border-white text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">WHATSAPP</span>
              <span className="font-semibold">(43) 98134-7780</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className={`bg-[#029edc] transition-all duration-300 absolute sm:relative w-full z-40 ${
        isMenuOpen ? 'top-full left-0 max-h-[500px] opacity-100' : '-top-[500px] max-h-0 opacity-0 sm:top-0 sm:max-h-none sm:opacity-100'
      }`}>
        <div className="max-w-[1250px] mx-auto px-4 sm:px-8 py-3 flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-4">
          <nav className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-x-6 gap-y-4 sm:gap-y-2 text-white text-[13px] font-normal w-full sm:w-auto items-center sm:items-start">
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Startups</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Comércio & Serviços</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Indústria</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Carreira & Gestão</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Agro</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Infográficos</a>
            <a href="#" className="hover:text-[#052d7b] transition-colors uppercase tracking-tight">Agenda de Eventos</a>
          </nav>
          
          <div className="flex items-center bg-[#003aa5]/30 rounded overflow-hidden w-full lg:w-auto h-10 lg:h-9 mt-4 sm:mt-0 border border-transparent hover:border-[#003aa5]/50 transition-colors">
            <input 
              type="text" 
              placeholder="Procurando por algo?"
              className="bg-transparent text-white placeholder-white outline-none text-sm px-4 w-full lg:w-[180px]"
            />
            <button className="h-full px-4 sm:px-3 bg-[#052d7b] flex items-center justify-center transition-colors hover:bg-black/20">
               <Search size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
