import { Mail, Megaphone, Info, Users, HelpCircle, ShieldAlert, MapPin, Phone, Calendar } from 'lucide-react';

export function Footer() {
  return (
    <footer className="font-inter">
      {/* Top Secondary Colored Bar */}
      <div className="bg-primary text-white text-center py-3 text-sm font-bold flex items-center justify-center gap-2">
         <Calendar size={16} />
         Quinta-feira - 30 de Maio de 2026
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#003aa5] text-white py-16">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-8 border-t border-white/20 pt-8 mt-[-32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left items-start mt-8">
            
            {/* Column 1: Logo & Info */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="mb-2">
                <img 
                  src="https://files.jump86.site/images/3d2bd4f5-5966-4b54-b593-a2fd8cdc0847.png" 
                  alt="Londrina Negócios Logo" 
                  className="h-16 object-contain"
                />
              </div>
              <p className="font-bold text-sm text-white">Notícias de economia</p>
              <p className="text-white/80 text-[13px] leading-relaxed max-w-sm font-medium text-center lg:text-left mt-2">
                Site de notícias sobre negócios, economia e startups de Londrina e do Paraná, abrangendo agropecuária, indústria, comércio e serviços.
              </p>
            </div>

            {/* Column 2: Sobre Nós */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h3 className="font-poppins font-bold text-lg text-white border-b-2 border-primary pb-2 inline-block">Sobre Nós</h3>
              <p className="text-white/80 text-[13px] leading-relaxed">
                A Londrina Negócios é sua principal fonte de informações econômicas da região norte do Paraná. Nossa missão é fomentar o desenvolvimento local e conectar empreendedores.
              </p>
              <div className="flex items-center gap-2 text-sm text-white/80 mt-2">
                <MapPin size={16} className="text-primary" />
                <span>Londrina, Paraná - Brasil</span>
              </div>
            </div>

            {/* Column 3: Links Úteis */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <h3 className="font-poppins font-bold text-lg text-white border-b-2 border-primary pb-2 inline-block">Links Úteis</h3>
              <ul className="flex flex-col gap-3 text-[13px] text-white/80 font-medium">
                  <li><a href="#" className="hover:text-primary transition-colors flex items-center justify-center lg:justify-start gap-2"><HelpCircle size={14}/> Quem Somos?</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors flex items-center justify-center lg:justify-start gap-2"><Users size={14}/> Fale Conosco</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors flex items-center justify-center lg:justify-start gap-2"><ShieldAlert size={14}/> Política de Privacidade</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors flex items-center justify-center lg:justify-start gap-2"><Info size={14}/> Termos de Uso</a></li>
              </ul>
            </div>

            {/* Column 4: Contato */}
            <div className="flex flex-col items-center lg:items-start gap-4">
               <h3 className="font-poppins font-bold text-lg text-white border-b-2 border-primary pb-2 inline-block">Contato & Expansão</h3>
               <ul className="flex flex-col gap-4 text-[13px] text-white/80 font-medium w-full sm:w-auto">
                   <li>
                       <a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:bg-white/20 transition-colors bg-white/10 px-4 py-2 rounded">
                           <Megaphone size={16} className="text-white" />
                           Anuncie no portal
                       </a>
                   </li>
                   <li>
                       <a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-primary transition-colors">
                           <div className="border border-white/40 rounded-full p-2"><Phone size={14} className="text-white" /></div>
                           (43) 98134-7780
                       </a>
                   </li>
                   <li>
                       <a href="#" className="flex items-center justify-center lg:justify-start gap-3 hover:text-primary transition-colors">
                           <div className="border border-white/40 rounded-full p-2"><Mail size={14} className="text-white" /></div>
                           contato@londrinanegocios.com.br
                       </a>
                   </li>
               </ul>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Bottom Black Info Bar */}
      <div className="bg-[#052d7b] text-white/80 text-center py-6">
          <div className="max-w-[1250px] mx-auto flex flex-col md:flex-row justify-between items-center text-[11px] font-medium gap-4 px-4 sm:px-8">
              <span>Copyright 2019/2026 - Londrina Negócios - Notícias de economia do Paraná. Todos os direitos reservados. Desenvolvedor.</span>
              <span>Reprodução autorizada mediante citação da fonte.</span>
          </div>
      </div>
    </footer>
  );
}
