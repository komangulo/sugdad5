import React, { useState } from 'react';
import { Mail, Heart, Globe, Gift, Plane, Lock } from 'lucide-react';
import Logo from '@/components/Logo';
import profileImage from '@/assets/images/profile.jpg';
import FaqSection from '@/components/FaqSection';

const Index: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    description: '',
    contact: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      const response = await fetch('https://formspree.io/f/xldwrvkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          description: formData.description,
          contact: formData.contact,
          _subject: 'Nuevo mensaje de contacto',
          _format: 'plain',
          _language: 'es',
        }),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.');
        setFormData({
          name: '',
          age: '',
          description: '',
          contact: '',
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-black/90">
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
            <span className="text-gold-400">Sugar Daddy Madrid <span className="text-sm align-top">®</span> | Experiencias Exclusivas en la Capital</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Generosidad, Experiencias y Compañía Exclusiva - Sugar Daddy Madrid
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Para mujeres jóvenes que buscan un hombre maduro (36 años), exitoso y generoso que valore tu compañía y esté dispuesto a ofrecerte un estilo de vida de lujo junto a alguien dominante y experimentado como Suggar Daddy en Madrid
          </p>
          <a 
            href="#"
            className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
              });
            }}
          >
            <Mail className="mr-2" size={20} /> Contáctame
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section id="que-es" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">¿Qué es un Sugar Daddy en Madrid?</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
          
          <div className="text-left mt-12 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">¿Qué significa ser Sugar Daddy en Madrid?</h3>
              <p className="text-gray-300">Ser un Sugar Daddy en Madrid significa mucho más que ofrecer apoyo económico. Representa una figura de éxito, experiencia y generosidad que busca compartir su estilo de vida con una compañera joven y atractiva. Un Sugar Daddy en Madrid suele ser un profesional consolidado, empresario o ejecutivo que valora la discreción, la elegancia y la compañía sofisticada. Esta relación mutuamente beneficiosa va más allá de lo convencional, ofreciendo tanto apoyo material como experiencias únicas en la capital española.</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">¿Qué busca un Sugar Daddy en Madrid?</h3>
              <div className="ml-6 space-y-4 mt-4">
                <h4 className="text-xl font-medium">Discreción y Privacidad</h4>
                <p className="text-gray-300">Para un Sugar Daddy en Madrid, la discreción es un pilar fundamental. Muchos profesionales de alto nivel y empresarios exitosos valoran su privacidad por encima de todo. Un arreglo con un Sugar Daddy madrileño garantiza total confidencialidad, permitiendo mantener separadas las esferas personal y profesional. Esta discreción mutua es lo que hace posible que estas relaciones florezcan en una ciudad cosmopolita como Madrid, donde el anonimato puede ser un bien preciado.</p>
                
                <h4 className="text-xl font-medium">Seguridad y Confianza</h4>
                <p className="text-gray-300">La relación con un Sugar Daddy en Madrid se basa en la confianza mutua desde el primer momento. Un verdadero Sugar Daddy madrileño entiende la importancia de crear un ambiente seguro donde ambas partes se sientan cómodas. Esto incluye acuerdos claros, respeto por los límites establecidos y una comunicación abierta. La seguridad emocional y física es prioritaria, y un Sugar Daddy experimentado sabe cómo construir esta confianza progresivamente, estableciendo una base sólida para una relación satisfactoria y duradera.</p>
                
                <h4 className="text-xl font-medium">Estilo de Vida Premium</h4>
                <p className="text-gray-300">Un Sugar Daddy en Madrid ofrece acceso a un estilo de vida que pocos pueden experimentar: cenas en los restaurantes más exclusivos de la capital, escapadas de fin de semana a destinos de ensueño, asistencia a eventos de alta gala y la oportunidad de disfrutar de los placeres más refinados que la vida puede ofrecer. Este estilo de vida premium no se limita a lo material, sino que incluye también acceso a círculos sociales privilegiados, oportunidades profesionales únicas y la posibilidad de disfrutar de experiencias que de otra manera serían inalcanzables para una joven en Madrid.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="rounded-full overflow-hidden border-4 border-gold-500 w-64 h-64 mx-auto">
              <img 
                src={profileImage}
                alt="Perfil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Tu Sugar Daddy en Madrid</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy un caballero maduro (36 años), exitoso y generoso que busca relacionarse con una joven encantadora. 
              Con una carrera exitosa y una vida estable, estoy en la posición de ofrecerte un estilo de vida excepcional a cambio de tu compañía y afecto.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Disfruto de viajes de lujo, cenas en restaurantes exclusivos y eventos de alta sociedad. Soy alguien experimentado, dominante y con mucha experiencia. 
              Busco una chica especial con quien compartir estas experiencias a cambio de su tiempo y compañía.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Plane className="mr-2" size={16} /> Viajes Exclusivos
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Gift className="mr-2" size={16} /> Estilo de Vida de Lujo
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <Lock className="mr-2" size={16} /> Discreción Garantizada
              </span>
              <span className="bg-gray-800 text-gold-400 px-4 py-2 rounded-full text-sm flex items-center">
                <span className="mr-2">👑</span> Dominante
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How to Find Section */}
      <section id="encontrar" className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Cómo encontrar un Sugar Daddy en Madrid?</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <div className="text-left mt-12 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">El papel de las Sugar Babies en Madrid</h3>
                <p className="text-gray-300">En el exclusivo mundo del sugar dating en Madrid, las Sugar Babies desempeñan un papel fundamental. Estas mujeres jóvenes, sofisticadas y ambiciosas buscan más que una relación convencional. Un Sugar Daddy en Madrid valora la compañía de una Sugar Baby que aporte frescura, vitalidad y una conexión genuina. A cambio, ofrecen un estilo de vida de lujo, mentoría y experiencias únicas que van más allá de lo material.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">¿Qué busca una Sugar Baby en un Sugar Daddy madrileño?</h3>
                <div className="ml-6 space-y-4 mt-4">
                  <h4 className="text-xl font-medium">Mentoría y Apoyo Personal</h4>
                  <p className="text-gray-300">Un Sugar Daddy en Madrid no solo ofrece apoyo económico, sino que también comparte su valiosa experiencia de vida. Muchos Sugar Daddies en la capital son empresarios exitosos, ejecutivos o profesionales consolidados que pueden ofrecer orientación profesional, consejos financieros y acceso a redes de contactos exclusivas. Esta mentoría personalizada es uno de los aspectos más valorados por las Sugar Babies que buscan crecer tanto personal como profesionalmente.</p>
                  
                  <h4 className="text-xl font-medium">Exclusividad y Estatus Social</h4>
                  <p className="text-gray-300">En el exclusivo círculo de los Sugar Daddies en Madrid, la discreción y el estatus social son fundamentales. Un Sugar Daddy madrileño valora la exclusividad y busca una Sugar Baby que sepa moverse con elegancia en ambientes de alta sociedad. Esto incluye asistir a eventos exclusivos, cenas de negocios importantes y viajes de lujo, donde la presencia de una compañía refinada y discreta es esencial para mantener su reputación.</p>
                  
                  <h4 className="text-xl font-medium">Experiencias de Lujo</h4>
                  <p className="text-gray-300">Un Sugar Daddy en Madrid ofrece experiencias que van más allá de lo convencional: cenas en restaurantes con estrellas Michelin, escapadas de fin de semana a destinos exclusivos, acceso a eventos VIP y una vida social en los círculos más selectos de la capital. Estas experiencias no solo son memorables, sino que también abren puertas a un estilo de vida que de otra manera sería inaccesible para muchas Sugar Babies.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Plane size={40} className="text-gold-500 mb-4" />,
                title: 'Estilo de Vida Premium',
                description: 'Viajes de lujo, cenas en restaurantes con estrellas Michelin y acceso a eventos exclusivos de alto nivel.'
              },
              {
                icon: <Gift size={40} className="text-gold-500 mb-4" />,
                title: 'Relación Dominante',
                description: 'Una relación donde disfrutas de ser dominante y de ser completamente sometida y controlada por un hombre con más de 14 años de experiencia en este aspecto.'
              },
              {
                icon: <Heart size={40} className="text-gold-500 mb-4" />,
                title: 'Compañía Exclusiva',
                description: 'Encuentros discretos donde serás la única prioridad, con atención y detalles personalizados.'
              },
              {
                icon: <Globe size={40} className="text-gold-500 mb-4" />,
                title: 'Conexiones Exclusivas',
                description: 'Acceso a una red de contactos influyentes que pueden abrirte puertas en el mundo profesional.'
              },
              {
                icon: <Lock size={40} className="text-gold-500 mb-4" />,
                title: 'Discreción Total',
                description: 'Confidencialidad garantizada en todo momento, con respeto absoluto por tu privacidad.'
              },
              {
                icon: <Mail size={40} className="text-gold-500 mb-4" />,
                title: 'Términos Claros',
                description: 'Acuerdos mutuos claros desde el inicio, con límites y expectativas bien definidos.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:transform hover:scale-105 transition duration-300">
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationships Section */}
      <section id="relaciones" className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tipos de relaciones en el Sugar Dating en Madrid</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <div className="text-left space-y-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Relación de compañía</h3>
                <p className="text-gray-300">En el contexto de un Sugar Daddy en Madrid, una relación de compañía se basa en la complicidad y el disfrute mutuo. Un Sugar Daddy madrileño valora enormemente la calidad de la conversación y la conexión intelectual. Estas relaciones suelen incluir salidas a eventos culturales, cenas en restaurantes exclusivos y viajes de negocios, donde la compañía de una mujer joven y sofisticada añade valor a sus experiencias. A diferencia de otras modalidades, aquí el énfasis está en la calidad del tiempo compartido más que en compromisos emocionales profundos.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3">Relación sin compromiso</h3>
                <p className="text-gray-300">Para muchos Sugar Daddies en Madrid, esta modalidad ofrece la libertad de disfrutar de encuentros esporádicos sin las ataduras de una relación tradicional. Los términos son claros desde el principio: encuentros puntuales, discreción absoluta y beneficios mutuos. Un Sugar Daddy madrileño que opta por esta modalidad suele ser un profesional con una agenda apretada que valora su independencia pero disfruta de la compañía ocasional de una mujer joven y atractiva. La honestidad sobre las expectativas es clave para que esta dinámica funcione satisfactoriamente para ambas partes.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3">Relación exclusiva</h3>
                <p className="text-gray-300">Cuando un Sugar Daddy en Madrid busca exclusividad, está dispuesto a ofrecer mayores beneficios a cambio de la dedicación exclusiva de su Sugar Baby. Esta modalidad implica un mayor nivel de compromiso y confianza mutua. Un Sugar Daddy madrileño que elige esta opción suele estar dispuesto a invertir más en la relación, ofreciendo no solo apoyo económico, sino también acceso a su círculo social, viajes internacionales y experiencias únicas. La exclusividad es un valor fundamental en la alta sociedad madrileña, y este tipo de arreglo refleja ese estándar.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3">Relación seria y a largo plazo</h3>
                <p className="text-gray-300">Algunos Sugar Daddies en Madrid buscan algo más que una simple transacción; buscan una conexión genuina que pueda evolucionar con el tiempo. Este tipo de relación va más allá de los beneficios materiales, incluyendo apoyo emocional, estabilidad y la posibilidad de construir un futuro juntos. Un Sugar Daddy madrileño que se plantea una relación a largo plazo valora la lealtad, la inteligencia emocional y la capacidad de su compañera para integrarse en su estilo de vida. Aunque menos común, este tipo de relación puede ofrecer seguridad financiera y emocional a largo plazo, con la posibilidad de evolucionar hacia un compromiso más formal si ambas partes lo desean.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">El Lujo y el Deseo de Pertenencia</h3>
              <p className="text-gray-300 leading-relaxed">
                Bienvenida a un mundo donde el lujo y el deseo se entrelazan. Como tu sugar daddy en Madrid, no solo te ofrezco un estilo de vida de lujo con viajes exclusivos y alta cocina, sino que también te invito a explorar una conexión más profunda y significativa.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si eres una chica joven de Madrid que busca ser mimada y consentida, y a la vez anhelas el control y la seguridad de ser la posesión y pertenencia más preciada de alguien y disfrutar de ser sometida y controlada, has llegado al lugar correcto.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Aquí, es solo el inicio donde la confianza y la devoción lo son todo.
              </p>
              <p className="text-gold-400 font-semibold mt-4">
                Háblame.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">La Conexión Mental y la Sumisión Deseada</h3>
              <p className="text-gray-300 leading-relaxed">
                En mi mundo, una relación sugar daddy es más que un simple acuerdo; es una unión de mentes y deseos. Busco una sugar baby en Madrid que entienda la belleza de la sumisión y el poder de la dominación.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si deseas ser mi posesión, mi pertenencia más preciada, que jamás será abandonada, te ofrezco la protección y seguridad que anhelas.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Disfrutaremos de una relación discreta donde la confianza y la comunicación es absoluta.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Aquí, el control y la intimidad mental son tan importantes como el lujo y la exclusividad.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Soy un hombre exitoso, maduro y seguro de lo que quiero, y te ofrezco ser tu mentor, tu caballero, y también tu Dueño.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gold-400 mb-4">Una Relación Única y Absoluta</h3>
              <p className="text-gray-300 leading-relaxed">
                Si eres una chica joven y te atreves a soñar, esta es una invitación a ir más allá de lo superficial. Aquí, tu búsqueda de un sugar daddy en Madrid culmina en una relación en la que te sentirás única y especial.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Si te atrae la idea de la posesión y la entrega total, y si deseas que alguien tome las riendas y te guíe, te ofrezco un mundo donde tus ambiciones y metas se cumplen mientras te sientes completamente a salvo.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Esta relación es una experiencia donde la sumisión voluntaria es el camino hacia la libertad y el placer más profundos.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Ven y descubre el beneficio de ser una sugar baby que se siente completa y absolutamente tuya.
              </p>
              <p className="text-gold-400 font-semibold mt-4">
                Atrévete a dar el paso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Beneficios de tener un Sugar Daddy en Madrid</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
            
            <div className="text-left space-y-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">Estilo de vida de lujo</h3>
                <p className="text-gray-300">Tener un Sugar Daddy en Madrid significa acceder a un nivel de vida que pocos pueden experimentar. Un Sugar Daddy madrileño ofrece acceso a restaurantes con estrellas Michelin, estancias en hoteles de cinco estrellas y eventos exclusivos de la alta sociedad. Más allá de los beneficios materiales, este estilo de vida incluye acceso a círculos sociales privilegiados, oportunidades de networking de alto nivel y la posibilidad de disfrutar de los placeres más refinados que la capital española puede ofrecer. Un Sugar Daddy en Madrid no solo comparte su riqueza material, sino también su conocimiento del mundo, su experiencia de vida y sus conexiones, permitiéndote crecer tanto personal como profesionalmente.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3">Experiencias únicas en la capital</h3>
                <p className="text-gray-300">Un Sugar Daddy en Madrid te abre las puertas a experiencias que van más allá de lo convencional. Imagina cenas privadas en el exclusivo barrio de Salamanca con vistas panorámicas de la ciudad, acceso VIP a eventos de moda en el Palacio de Cibeles o noches en las fiestas más selectas de la Milla de Oro. Un Sugar Daddy madrileño puede ofrecerte asistir a galerías de arte privadas, conciertos íntimos con artistas internacionales o incluso escapadas de fin de semana a las bodegas más exclusivas de La Rioja. Estas experiencias no solo son memorables, sino que también te permiten sumergirte en los círculos más exclusivos de la capital, creando recuerdos que durarán toda la vida.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-3">Relaciones claras y transparentes</h3>
                <p className="text-gray-300">Una de las mayores ventajas de tener un Sugar Daddy en Madrid es la claridad desde el primer momento. A diferencia de las relaciones convencionales, donde las expectativas a menudo no se comunican, un Sugar Daddy madrileño valora la transparencia en todos los aspectos del acuerdo. Esto significa límites claros, beneficios mutuos definidos y una comunicación abierta sobre lo que cada parte espera de la relación. Esta transparencia elimina malentendidos y crea un marco de respeto mutuo donde ambas partes pueden sentirse cómodas y seguras. Un Sugar Daddy experimentado en Madrid entiende la importancia de establecer estos términos desde el principio, asegurando una relación satisfactoria y sin sorpresas desagradables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gold-400">Contacto Sugar Daddy Madrid</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <h3 className="text-2xl font-semibold mb-3 text-white">Cómo iniciar una relación Sugar en Madrid</h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Si buscas una relación de respeto mutuo, generosidad y experiencias inolvidables con un Sugar Daddy en Madrid, 
              completa el siguiente formulario. Estaré encantado de conocerte y explorar juntos las posibilidades de una relación 
              que beneficie a ambas partes con transparencia y elegancia.
            </p>
            
            <div className="bg-gray-900 rounded-xl p-6 mb-8 text-left">
              <h4 className="text-xl font-semibold text-gold-400 mb-3">Proceso de contacto seguro y discreto:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li><span className="font-medium">Completa el formulario</span> con tus datos básicos</li>
                <li>Recibirás una respuesta en un plazo máximo de 24-48 horas</li>
                <li>Concertaremos una primera conversación para conocernos mejor</li>
                <li>Si hay conexión, acordaremos una primera cita en un lugar discreto y exclusivo de Madrid</li>
              </ol>
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-white mt-12">Discreción y privacidad garantizada</h3>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <p className="text-gray-300 mb-4">
                Como Sugar Daddy experimentado en Madrid, tu privacidad es mi máxima prioridad. Toda la información que compartas 
                será tratada con la máxima confidencialidad y solo se utilizará para establecer contacto contigo.
              </p>
              <div className="flex items-center justify-center space-x-4 text-gold-400 mt-4">
                <Lock className="w-5 h-5" />
                <span>Sin compartir tu información con terceros</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Tu Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">Tu Edad</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  placeholder="Tu edad"
                  min="18"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">Cuéntame sobre ti</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="¿Qué te hace única? ¿Qué buscas en esta relación?"
                required
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-300 mb-1">Cómo contactarte</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                placeholder="Teléfono, email o usuario de Instagram"
                required
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} /> Enviar Mensaje
              </button>
            </div>
            
            {status && (
              <div className={`p-4 rounded-lg text-center ${status.includes('éxito') ? 'bg-green-900/30 text-green-300' : status.includes('error') ? 'bg-red-900/30 text-red-300' : 'bg-blue-900/30 text-blue-300'}`}>
                {status}
              </div>
            )}
            <p className="text-xs text-gray-500 text-center mt-4">
              Tu privacidad es importante. Toda la información compartida será tratada con la máxima confidencialidad.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-4">
            <Logo />
          </div>
          <p>© {new Date().getFullYear()} Conexión Madrid. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gold-400 transition">Términos de Servicio</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition">Política de Privacidad</a>
            <span>•</span>
            <a 
              href="#" 
              className="hover:text-gold-400 transition"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
              }}
            >
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
