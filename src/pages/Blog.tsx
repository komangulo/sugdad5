import React from 'react';
import { Link } from 'react-router-dom';

// Import the article component
import SerSugarBabyMadrid, { meta as articleMeta } from './blog/ser-sugar-baby-madrid-sin-experiencia';

// Import articles meta
import { meta as beneficiosMeta } from './blog/beneficios-tener-sugar-daddy-madrid';
import { meta as confidenteMeta } from './blog/confidente-y-tutor-sugar-daddy';
import { meta as filosofiaMeta } from './blog/filosofia-sugar-daddy-madrid';
import { meta as guiaMentoriaMeta } from './blog/sugar-daddy-madrid-guia-mentoria';
import { meta as mentorConfidenteMeta } from './blog/mentor-confidente-tutor-sugar-daddy';

// Blog post data
const blogPosts = [
  {
    id: 'mentor-confidente-tutor-sugar-daddy',
    title: mentorConfidenteMeta.title,
    description: mentorConfidenteMeta.description,
    date: mentorConfidenteMeta.date,
    author: mentorConfidenteMeta.author,
    image: mentorConfidenteMeta.image,
    tags: mentorConfidenteMeta.tags,
    excerpt: 'Descubre una conexión que trasciende las etiquetas, donde el apoyo emocional, la mentoría personal y las experiencias excepcionales se combinan en una relación significativa en Madrid.'
  },
  {
    id: 'sugar-daddy-madrid-guia-mentoria',
    title: guiaMentoriaMeta.title,
    description: guiaMentoriaMeta.description,
    date: guiaMentoriaMeta.date,
    author: guiaMentoriaMeta.author,
    image: guiaMentoriaMeta.image,
    tags: guiaMentoriaMeta.tags,
    excerpt: 'Descubre un enfoque único de relación sugar en Madrid, donde el liderazgo se combina con mentoría personal, apoyo emocional y experiencias excepcionales en una dinámica de confianza mutua.'
  },
  {
    id: 'filosofia-sugar-daddy-madrid',
    title: filosofiaMeta.title,
    description: filosofiaMeta.description,
    date: filosofiaMeta.date,
    author: filosofiaMeta.author,
    image: filosofiaMeta.image,
    tags: filosofiaMeta.tags,
    excerpt: 'Descubre mi enfoque único como sugar daddy en Madrid, ofreciendo una relación dominante basada en liderazgo, apoyo emocional y mentoría personal.'
  },
  {
    id: 'confidente-y-tutor-sugar-daddy',
    title: confidenteMeta.title,
    description: confidenteMeta.description,
    date: confidenteMeta.date,
    author: confidenteMeta.author,
    image: confidenteMeta.image,
    tags: confidenteMeta.tags,
    excerpt: 'Descubre mi enfoque único como sugar daddy en Madrid, ofreciendo apoyo emocional, mentoría personal y una conexión genuina más allá de lo material.'
  },
  {
    id: 'beneficios-tener-sugar-daddy-madrid',
    title: beneficiosMeta.title,
    description: beneficiosMeta.description,
    date: beneficiosMeta.date,
    author: beneficiosMeta.author,
    image: beneficiosMeta.image,
    tags: beneficiosMeta.tags,
    excerpt: 'Descubre los beneficios exclusivos de tener un sugar daddy en Madrid, desde experiencias de lujo hasta mentoría personal y crecimiento profesional.'
  },
  {
    id: 'ser-sugar-baby-madrid-sin-experiencia',
    title: articleMeta.title,
    description: articleMeta.description,
    date: articleMeta.date,
    author: articleMeta.author,
    image: articleMeta.image,
    tags: articleMeta.tags,
    excerpt: 'Descubre cómo iniciarte como sugar baby en Madrid con la guía de un mentor experimentado. Aprende sobre los beneficios reales de una relación de mentoria basada en el respeto mutuo.'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Blog</h1>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-pink-500/30 transition-all duration-300 p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-pink-900/30 text-pink-400 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-pink-500 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <div className="text-sm">
                      <p className="text-gray-300">{post.author}</p>
                      <p className="text-gray-500">{post.date}</p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-pink-500 hover:text-pink-400 font-medium transition-colors"
                  >
                    Leer más
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Placeholder for future pagination */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">Mantente atenta para más artículos próximamente...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
