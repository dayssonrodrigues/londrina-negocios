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
          Londrina recebe Feira do Empreendedor com foco em conhecimento, conexões e pequenos negócios
        </h1>

        {/* Subtitle */}
        <p className="font-inter text-neutral-500 text-lg md:text-xl font-light text-center mb-8">
          Evento gratuito do Sebrae/PR será realizado no Parque Ney Braga, com palestras de nomes nacionais, oportunidades e programação voltada ao empreendedorismo
        </p>

        {/* Meta Info */}
        <div className="flex flex-col items-center gap-3 mb-8 text-sm">
          <div className="flex items-center gap-2 text-primary font-bold">
            <User size={16} />
            <span>@londrinanegocios</span>
          </div>
          <div className="flex items-center gap-4 text-black font-bold">
            <span>7 de maio de 2026</span>
            <span className="flex items-center gap-2"><Clock size={16} /> 3 minutos de leitura</span>
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
          <img 
            src="https://i2.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2026/05/07.05.26/Feira-do-Empreendedor-Sebrae-2026-foto-Thom%C3%A9-Lopes-1.jpg?resize=1170%2C610&ssl=1" 
            alt="Feira do Empreendedor" 
            className="w-full mb-8 rounded"
          />

          <p>
            <span className="float-left text-[80px] font-bold font-poppins leading-[0.8] pr-3 pt-2 text-black">O</span>
            maior evento gratuito para micro e pequenos empreendedores do Estado será realizado no Parque Ney Braga, em Londrina. A Feira do Empreendedor Sebrae ocorre de 6 a 8 de agosto e contará com uma programação voltada à geração de negócios, conhecimento e conexões. As inscrições são gratuitas e já podem ser realizadas no site oficial: <a href="https://sebraepr.com.br/lp/feiralondrina/" className="text-primary hover:underline">https://sebraepr.com.br/lp/feiralondrina/</a>.
          </p>
          <p>
            Um levantamento do Sebrae/PR, com base nos dados da Receita Federal, aponta que 93% dos 117 mil negócios existentes em Londrina são micro e pequenas empresas.
          </p>
          <p>
            O diretor-superintendente da instituição, Vitor Roberto Tioqueta, apontou a relevância da Feira como ferramenta de apoio aos pequenos negócios e reforçou a escolha da região.
          </p>
          <p>
            “Temos o propósito claro de reunir em um só ambiente oportunidades reais para quem empreende ou deseja tirar uma ideia do papel. A realização em Londrina reforça o nosso compromisso de estar cada vez mais ao lado de quem empreende”, afirmou o diretor-superintendente do Sebrae/PR.
          </p>
          <p>
            O prefeito Tiago Amaral destacou a importância da realização do evento para a cidade e toda região.
          </p>
          <p>
            “Um evento como a Feira do Empreendedor do Sebrae é importante não só para Londrina, mas para todos os municípios do Norte do Paraná. Essa é uma oportunidade única para os empreendedores se fortalecerem, adquirirem conhecimento e apoiarem toda a cadeia, o que, consequentemente, alavanca a economia local”, disse o prefeito.
          </p>

          <div className="my-8">
            <img 
              src="https://i2.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2026/05/07.05.26/Feira-do-Empreendedor-Sebrae-2026-foto-Thom%C3%A9-Lopes-3.jpg?resize=750%2C500&ssl=1" 
              alt="Feira do Empreendedor" 
              className="w-full mb-2 rounded"
            />
            <p className="text-center text-sm text-neutral-500 italic">
               Foto: Thomé Lopes / Sebrae
            </p>
          </div>

          <p>
            O presidente do Conselho Superior da Federação das Associações Comerciais e Empresariais do Estado do Paraná (Faciap) e ex-presidente do Conselho Deliberativo Estadual (CDE) do Sebrae/PR, Fernando Moraes, lembrou que o evento concentra diversas ações importantes para o dia a dia do empreendedor.
          </p>
          <p>
            “Já tive a oportunidade de participar de várias edições da Feira do Empreendedor e sei o quanto o evento pode ser importante para guinadas das empresas. É um momento de conexões, contato com instituições parceiras, oportunidades de crédito, negócios com outras empresas e atualização. Tenho certeza que a edição de Londrina será um sucesso e vai atrair um público muito interessante”, afirmou Moraes.
          </p>
          <p>
            “A Feira é uma importante ponte para aproximar o empreendedor às tendências e falar sobre negócios de forma descomplicada. Tocar um negócio nunca é algo individual, mas sim coletivo. O Sebrae/PR faz isso de uma forma exemplar e um evento como esse é, também, uma forma de pensar coletivamente”, destacou o prefeito de Cambé e presidente da Associação dos Municípios do Médio Paranapanema (Amepar), Conrado Scheller.
          </p>

          <div className="my-8">
            <img 
              src="https://i2.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2026/05/07.05.26/Feira-do-Empreendedor-Sebrae-2026-foto-Thom%C3%A9-Lopes-5.jpeg?resize=750%2C500&ssl=1" 
              alt="Feira do Empreendedor" 
              className="w-full mb-2 rounded"
            />
            <p className="text-center text-sm text-neutral-500 italic">
               Foto: Thomé Lopes / Sebrae
            </p>
          </div>

          <p>
            Com agenda diversificada, a Feira do Empreendedor tem como foco as diferentes etapas enfrentadas pelas micro e pequenas empresas, além de conteúdos voltados às pessoas que desejam empreender. Entre as áreas já confirmadas estão quatro arenas do conhecimento, rodadas de negócio e crédito, oportunidades de negócios e tendências.
          </p>
        </div>

        {/* Tags */}
        <div className="w-full mt-12">
           <div className="flex items-center gap-2 font-bold font-poppins text-xl mb-4 border-b pb-2 text-black">
             <Tag size={20} className="text-black" />
             Tags
           </div>
           <div className="flex flex-wrap gap-2">
             {['Faciap', 'Prefeitura de Londrina', 'Sebrae/PR'].map((tag) => (
                <span key={tag} className="bg-neutral-100 text-neutral-600 px-4 py-2 text-sm hover:bg-neutral-200 cursor-pointer transition-colors border border-black/10">
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
