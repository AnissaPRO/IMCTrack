import { Button } from '../components/atoms/Button';
import { SecondaryButton } from '../components/atoms/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 text-gray-800 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Bienvenue sur IMC Track
      </h1>
      <p className="text-lg md:text-xl mb-8">
        Suivez vos calories, votre alimentation et atteignez vos objectifs santé.
      </p>

      <div className="flex gap-4 flex-col sm:flex-row w-full max-w-sm">
        <Link to="/register" className="w-full">
          <Button>S'inscrire</Button>
        </Link>
        <Link to="/login" className="w-full">
          <SecondaryButton>Se connecter</SecondaryButton>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
