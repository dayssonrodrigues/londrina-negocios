import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col text-center lg:text-left order-2 lg:order-1">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <div className="border-t-4 border-primary w-24"></div>
            <span className="text-primary font-bold text-sm tracking-widest uppercase">
              Comércio & Serviços
            </span>
            <div className="border-t-4 border-primary w-24"></div>
          </div>
          
          <h1 className="font-poppins text-3xl md:text-4xl lg:text-[42px] font-bold text-black leading-none mb-4 decoration-primary decoration-4 underline-offset-8">
            Londrina recebe Feira do Empreendedor com foco em conhecimento, conexões e pequenos negócios
          </h1>
          
          <p className="font-inter text-neutral-500 text-lg md:text-xl font-light mb-8 max-w-xl mx-auto lg:mx-0">
            Evento gratuito do Sebrae/PR será realizado no Parque Ney Braga, com palestras de nomes nacionais, oportunidades e programação voltada ao empreendedorismo
          </p>
          
          <div className="text-neutral-400 text-sm font-medium">
            3 minutos de leitura
          </div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 w-full"
        >
          <img 
            src="https://i2.wp.com/blog.londrina.pr.gov.br/wp-content/uploads/2026/05/07.05.26/Feira-do-Empreendedor-Sebrae-2026-foto-Thom%C3%A9-Lopes-1.jpg?resize=1170%2C610&ssl=1" 
            alt="Feira do Empreendedor em Londrina" 
            className="w-full h-auto object-cover rounded"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
