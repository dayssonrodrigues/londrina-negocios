import { User, Clock, Facebook, Linkedin, Instagram, Tag, Send } from 'lucide-react';
import { NewsGrid } from './NewsGrid';

export function Article() {
  return (
    <article className="w-full">
      <div className="max-w-[950px] mx-auto px-4 sm:px-8 py-8 lg:py-12 flex flex-col items-center">
        {/* Category Header */}
        <div className="w-full mb-8">
          <h2 className="text-primary text-xl font-bold uppercase mb-2">Comércio & Serviços</h2>
          <div className="w-full border-t border-primary mb-1 opacity-50"></div>
          <div className="w-full border-t-2 border-primary border-b-2"></div>
        </div>

        {/* Location */}
        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 text-center">
          Londrina
        </span>

        {/* Title */}
        <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight text-center mb-6">
          Vila Galé anuncia adesão a novo complexo hoteleiro lançado na região metropolitana
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-neutral-500 text-lg md:text-xl font-light text-center mb-8">
          Maior rede de resorts do Brasil vai investir R$ 200 milhões em dois hotéis no polo turístico de desenvolvimento de Londrina
        </p>

        {/* Meta Info */}
        <div className="flex flex-col items-center gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2 text-primary font-bold">
            <User size={16} />
            <span>Robert Pedrosa e Dulce Luz - contato@londrinanegocios.com.br</span>
          </div>
          <div className="flex items-center gap-4 text-black font-bold">
            <span>30/05/2026 - 09h31</span>
            <span className="flex items-center gap-2"><Clock size={16} /> Tempo de leitura: 7 min</span>
          </div>
        </div>

        {/* Social Share */}
        <div className="flex gap-2 mb-12">
          <button className="bg-[#003aa5] text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90">
            <Facebook size={18} />
          </button>
          <button className="bg-black text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90 font-bold">
            X
          </button>
          <button className="bg-[#003aa5] text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </button>
          <button className="bg-[#003aa5] text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90">
            <Linkedin size={18} />
          </button>
          <button className="bg-[#029edc] text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90">
            <Send size={18} />
          </button>
          <button className="bg-[#052d7b] text-white p-2 sm:px-4 sm:py-2 rounded flex items-center justify-center hover:opacity-90">
            <Instagram size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="w-full font-inter text-neutral-800 text-lg leading-relaxed space-y-6">
          <p>
            <span className="float-left text-[80px] font-bold font-poppins leading-[0.8] pr-3 pt-2 text-black">C</span>
            om a chegada da maior rede de resorts do Brasil, o Vila Galé, ao Paraná, o Governo do Estado anunciou a construção de um novo polo turístico na região de Londrina para atrair outros resorts, hotéis, pousadas e empreendimentos de lazer em larga escala. Batizado de Londrina Resorts, o projeto pretende urbanizar uma grande área metropolitana, criando uma espécie de distrito turístico voltado à expansão da atividade econômica.
          </p>
          <p>
            O lançamento do Londrina Resorts aconteceu nesta quarta-feira (27), em um restaurante, com a presença do governador, do dono do Grupo Vila Galé, Jorge Rebelo de Almeida, de empresários do setor turístico e imobiliário e gestores públicos.
          </p>
          
          <img 
            src="https://piauinegocios.com.br/thumbs.php?w=600&imagem=images/noticias/3695/WhatsApp-Image-2026-05-21-at-11.22.15.jpeg" 
            alt="Reunião" 
            className="w-full my-8"
          />

          <h3 className="font-poppins font-bold text-2xl mt-12 mb-4 text-black">
            Um distrito turístico planejado
          </h3>
          <p>
            O Londrina Resorts nasce como um projeto de urbanização turística planejada. A diretoria explicou que o governo passou o último ano estudando áreas com segurança fundiária e potencial de expansão sustentável.
          </p>

          <div className="my-8">
            <img 
              src="https://piauinegocios.com.br/controle/arquivos-25/images/2026/Piranhas.jpg" 
              alt="Apresentação do Projeto" 
              className="w-full mb-2"
            />
            <p className="text-center text-sm text-neutral-500 italic">
               Apresentação do projeto na região de Londrina
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="w-full mt-12">
           <div className="flex items-center gap-2 font-bold font-poppins text-xl mb-4 border-b pb-2 text-black">
             <Tag size={20} className="text-black" />
             Tags
           </div>
           <div className="flex flex-wrap gap-2">
             {['Vila Galé', 'polo turístico', 'Londrina', 'Paraná', 'rede de resorts', 'hotéis'].map((tag) => (
                <span key={tag} className="bg-neutral-100 text-neutral-600 px-4 py-2 text-sm hover:bg-neutral-200 cursor-pointer transition-colors">
                  {tag}
                </span>
             ))}
           </div>
        </div>

        {/* Comentários */}
        <div className="w-full mt-16 mb-8">
          <h3 className="text-3xl font-poppins font-bold mb-6 text-black">Comentários</h3>
          <div className="bg-neutral-100 p-8 rounded flex items-center justify-center h-32 opacity-50 relative overflow-hidden">
             <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#d4d4d4_10px,#d4d4d4_20px)]"></div>
          </div>
        </div>
      </div>

      {/* Mais Notícias */}
      <div className="w-full bg-[#f4f4f4] py-12 mt-8">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-8">
           <div className="bg-neutral-200 text-black font-poppins font-bold p-4 text-sm mb-6 w-max min-w-[250px] uppercase">
              MAIS DE COMÉRCIO & SERVIÇOS
           </div>
        </div>
        <NewsGrid hideButton={true} className="bg-transparent pt-0" />
      </div>
    </article>
  );
}
