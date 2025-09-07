import React from 'react';
import { Link } from 'react-router-dom';

interface BlogMeta {
  title: string;
  description: string;
  date: string;
  author?: string;
  image: string;
  tags: string[];
}

export const meta: BlogMeta = {
  title: 'No solo un Sugar Daddy, un Confidente y Tutor: Mi Compromiso de Apoyo y Respeto para mi Sugar Baby',
  description: 'Descubre mi enfoque único como sugar daddy en Madrid, ofreciendo apoyo emocional, mentoría personal y una conexión genuina más allá de lo material.',
  date: '25 de agosto, 2025',
  image: '/images/blog/confidente-tutor-madrid.jpg',
  tags: ['sugar daddy', 'mentoría', 'apoyo emocional', 'Madrid', 'relación']
};

const ConfidenteYTutor: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16 text-white">
      <Link to="/blog" className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-8 transition-colors">
        ← Volver al blog
      </Link>
      
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          No solo un Sugar Daddy, un Confidente y Tutor: Mi Compromiso de Apoyo y Respeto para mi Sugar Baby
        </h1>
        <div className="flex items-center text-gray-400 text-sm">
          <span>Por {meta.author}</span>
          <span className="mx-2">•</span>
          <time dateTime="2025-08-25">{meta.date}</time>
        </div>
      </header>

      <div className="prose prose-invert max-w-none text-lg leading-relaxed">
        <p className="text-xl text-gray-300 mb-8">
          En un mundo lleno de superficialidad, donde las relaciones a menudo se miden por lo que se ve y no por lo que se siente, 
          yo elijo un camino diferente. Si has llegado aquí tecleando <strong>"buscas sugar daddy en madrid?"</strong>, es probable que busques 
          algo más que un simple acuerdo. Buscas una conexión real, seguridad y a alguien que vea más allá de la superficie. 
          Y eso es precisamente lo que me comprometo a ofrecer.
        </p>

        <p className="mb-12">
          El término <strong>sugar daddy</strong> ha sido malinterpretado con demasiada frecuencia. Para mí, ser un sugar daddy en Madrid no se trata de ostentación, 
          sino de contribución. Se trata de tener la capacidad y el deseo de enriquecer la vida de alguien, no solo en el aspecto material, 
          sino en el personal, emocional e intelectual.
        </p>

        <p className="text-xl mb-12 text-center font-medium">
          Mi filosofía se basa en tres compromisos fundamentales que forman la base de la relación que busco con mi futura sugar baby.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-6">Mi Primer Compromiso: Ser tu Confidente y Brindarte Apoyo Emocional</h2>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 my-8">
          <p className="mb-0">
            Antes que nada, soy un oyente. Entiendo que la vida tiene sus desafíos, sus momentos de duda y sus grandes alegrías. 
            Mi primer y más importante compromiso es ofrecerte un espacio seguro. Un lugar donde el <strong>apoyo emocional y sentimental</strong> 
            no son solo palabras, sino una realidad. Busco ser ese confidente con el que puedes hablar de todo: desde tus ambiciones 
            profesionales hasta tus inquietudes personales, sabiendo que recibirás un consejo honesto y un apoyo incondicional.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-16 mb-6">Mi Segundo Compromiso: Actuar como tu Tutor y Mentor Personal</h2>
        
        <p className="mb-6">
          Uno de los <strong>beneficios de tener un sugar daddy</strong> más infravalorados es el acceso a la experiencia. 
          Mi éxito no ha sido casual, y mi mayor satisfacción proviene de compartir el conocimiento que he adquirido. 
          Me comprometo a ser tu mentor y tutor.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-pink-500 mb-3">Para la que no tiene experiencia</h3>
            <p>
              Si la idea de ser <strong>sugar baby en Madrid sin experiencia</strong> te intimida, déjame ser tu guía. 
              Te ayudaré a navegar este mundo con clase, seguridad y confianza.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-pink-500 mb-3">Para la que tiene grandes sueños</h3>
            <p>
              Impulsaré tus proyectos, te aconsejaré en tu carrera y te abriré puertas. 
              La mentoría que ofrezco es una inversión real en tu futuro.
            </p>
          </div>
        </div>

        <p className="text-xl mb-12 text-center">
          Mientras disfrutamos de experiencias inolvidables en los mejores restaurantes o durante nuestros viajes, 
          nuestra conversación puede ser el catalizador que acelere tus metas.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-6">
          Mi Tercer Compromiso: Respeto, Discreción y Exclusividad Absoluta
        </h2>
        
        <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 my-8">
          <p className="mb-0">
            Este es el pilar inquebrantable de nuestra relación. El respeto mutuo es la base de todo. 
            Respeto tu tiempo, tus límites, tu individualidad y tus opiniones.
            <br /><br />
            La <strong>exclusividad y discreción</strong> son mi promesa solemne. En todas nuestras 
            <strong>citas sugar daddy en España y Madrid</strong>, y en cada momento de nuestra relación, 
            tu privacidad es sagrada. Puedes tener la certeza absoluta de que nuestra conexión se mantendrá 
            en la más estricta confidencialidad. Una <strong>sugar babe</strong> a mi lado debe sentirse, 
            ante todo, segura y protegida.
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-900/50 to-transparent p-8 rounded-xl my-16 border-l-4 border-pink-500">
          <h2 className="text-3xl font-bold mb-6">Una Invitación Basada en la Confianza</h2>
          <p className="text-xl mb-6">
            Lo que ofrezco va más allá de un <strong>seeking arrangement en Madrid</strong> convencional. 
            Es una alianza, una asociación donde el crecimiento y el bienestar mutuo son el objetivo final. 
            No busco simplemente una sugar baby; busco una compañera de vivencias, una mente brillante 
            a la que pueda apoyar y de la que también pueda aprender.
          </p>
          <p className="text-xl mb-8">
            Si mi compromiso de ser un confidente, un tutor y un pilar de apoyo resuena contigo, 
            te invito a dar el siguiente paso. Hablemos, conozcámonos y descubramos si podemos 
            construir juntos una relación verdaderamente excepcional.
          </p>
          <div className="text-center">
            <Link 
              to="/"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
            >
              Contáctame Ahora
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ConfidenteYTutor;
