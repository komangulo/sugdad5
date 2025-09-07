import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Logo className="h-10 w-auto" />
        </Link>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-pink-500 ${
              location.pathname === '/' ? 'text-pink-500' : 'text-white'
            }`}
          >
            Inicio
          </Link>
          <Link 
            to="/blog" 
            className={`text-sm font-medium transition-colors hover:text-pink-500 ${
              location.pathname === '/blog' ? 'text-pink-500' : 'text-white'
            }`}
          >
            Blog
          </Link>
          <a 
            href="#contacto" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
