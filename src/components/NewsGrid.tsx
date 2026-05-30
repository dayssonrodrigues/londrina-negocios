import { motion } from "motion/react";

const newsItems = [
  {
    id: 1,
    image: "https://piauinegocios.com.br/controle/arquivos-25/images/2026/Piranhas.jpg",
    category: "COLUNA NEGÓCIOS & TURISMO",
    readTime: "5 min",
    title: "Presidente da Abrajet Piauí vai participar de reunião do Conselho Nacional da entidade em Piranhas (AL)",
    description: "Evento acontece entre os dias 28 e 31 de maio e conta com uma programação imersiva nos encantos da região",
  },
  {
    id: 2,
    image: "https://piauinegocios.com.br/thumbs.php?w=600&imagem=images/noticias/3696/Feijoada-AMNe-2026-(3).jpg",
    category: "EMPREENDEDORISMO FEMININO",
    readTime: "7 min",
    title: "Feijoada da Associação Mulheres D'Negócios do Piauí reúne associadas e empresárias",
    description: "Evento foi marcado por network, sorteio e integração entre mulheres empreendedoras",
  },
  {
    id: 3,
    image: "https://piauinegocios.com.br/thumbs.php?w=600&imagem=images/noticias/3695/WhatsApp-Image-2026-05-21-at-11.22.15.jpeg",
    category: "PROJEÇÃO NACIONAL",
    readTime: "4 min",
    title: "Artesãos piauienses superam R$ 400 mil em vendas no 22º Salão do Artesanato, em São Paulo",
    description: "Piauí ficou em 1º lugar entre os 21 Estados participantes do espaço do Sebrae Nacional no evento",
  }
];

export function NewsGrid({ hideButton = false, className }: { hideButton?: boolean, className?: string }) {
  return (
    <section className={className || "bg-white pb-12 lg:pb-20"}>
      <div className="max-w-[1250px] mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col h-full bg-white group cursor-pointer"
            >
              <div className="overflow-hidden w-full mb-4 shrink-0" style={{ height: "240px" }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex items-center text-[11px] font-bold tracking-wide uppercase mb-3 flex-wrap">
                <span className="text-primary">{item.category}</span>
                <span className="mx-2 text-neutral-300">-</span>
                <span className="text-neutral-500 font-medium normal-case tracking-normal">Tempo de leitura: {item.readTime}</span>
              </div>
              
              <h3 className="font-poppins font-bold text-xl leading-tight text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="font-inter text-neutral-600 text-sm leading-relaxed mb-6 font-light flex-grow">
                {item.description}
              </p>
              
              <div className="w-full border-b-[3px] border-primary mt-auto"></div>
            </motion.div>
          ))}
        </div>

        {!hideButton && (
          <div className="mt-12 flex justify-center">
              <button className="bg-neutral-100 hover:bg-neutral-200 transition-colors text-black font-bold text-sm w-full py-4 tracking-wide">
                 Todas as notícias
              </button>
          </div>
        )}

      </div>
    </section>
  );
}
