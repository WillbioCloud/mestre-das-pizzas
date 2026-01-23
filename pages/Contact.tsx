import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-cream pattern-bg pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-4">Fale Conosco</h1>
          <p className="text-stone-600">Estamos prontos para atender você.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Info Card */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-stone-200">
            <h2 className="font-serif text-2xl font-bold text-brand-brown mb-6">Informações</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Faça seu pedido diretamente pelo app.</p>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-colors"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Domingo</p>
                  <p className="text-gray-600 font-medium">18:00 às 23:30</p>
                  <p className="text-xs text-amber-600 mt-1 font-bold">Tempo médio de entrega: 50 minutos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">Rua das Pizzas, 123</p>
                  <p className="text-gray-600">Centro - Cidade/UF</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-stone-200 rounded-xl overflow-hidden shadow-md h-96 md:h-auto flex items-center justify-center relative">
             <div className="text-center p-6">
               <MapPin className="h-12 w-12 text-stone-400 mx-auto mb-2" />
               <p className="text-stone-500 font-bold">Mapa do Google</p>
               <p className="text-sm text-stone-400">(Placeholder: Insira o iframe do Google Maps aqui)</p>
             </div>
             {/* 
                To add real map:
                <iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy"></iframe>
             */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;