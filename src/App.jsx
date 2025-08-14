import React, { useState } from 'react';
import { Phone, Mail, Download, User, MapPin, Briefcase } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  // Información de contacto
  const contactInfo = {
    name: 'Carlos Tirado',
    phone: '+57 301 332 5096',
    email: 'mariotiradotovar@gmail.com',
    title: 'Ingeniero De Sistemas',
    company: 'Empresa',
    address: 'Colombia'
  };

  // Función para generar archivo vCard
  const generateVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
N:Tirado;Carlos;;;
TEL;TYPE=CELL:${contactInfo.phone}
EMAIL;TYPE=INTERNET:${contactInfo.email}
TITLE:${contactInfo.title}
ORG:${contactInfo.company}
ADR;TYPE=WORK:;;;;;;${contactInfo.address}
END:VCARD`;

    return vcard;
  };

  // Función para descargar el archivo vCard
  const downloadVCard = () => {
    setIsDownloading(true);
    
    const vcard = generateVCard();
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = `${contactInfo.name.replace(' ', '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Simular tiempo de descarga para el efecto visual
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Tarjeta de contacto principal */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl shadow-blue-500/10 p-8 border border-white/20 hover:shadow-3xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
          {/* Avatar y nombre */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2 tracking-tight">
              {contactInfo.name}
            </h1>
            <p className="text-lg text-gray-600 font-medium flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              {contactInfo.title}
            </p>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6 mb-8">
            {/* Teléfono */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Teléfono</p>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email</p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Ubicación</p>
                <p className="text-lg font-bold text-gray-800">
                  {contactInfo.address}
                </p>
              </div>
            </div>
          </div>

          {/* Botón de descarga */}
          <button
            onClick={downloadVCard}
            disabled={isDownloading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            {isDownloading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                Descargando...
              </>
            ) : (
              <>
                <Download className="w-6 h-6" />
                Guardar Contacto
              </>
            )}
          </button>

          {/* Texto informativo */}
          <p className="text-center text-sm text-gray-500 mt-6 leading-relaxed">
            Haz clic en "Guardar Contacto" para descargar mi información y añadirla a tus contactos
          </p>
        </div>

        {/* Tarjeta adicional con redes sociales o información extra */}
        <div className="mt-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-blue-500/5 p-6 border border-white/20 text-center">
          <p className="text-sm text-gray-600 font-medium">
            ¿Necesitas ponerte en contacto conmigo?
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Descarga mi contacto y tendrás toda mi información siempre disponible
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;