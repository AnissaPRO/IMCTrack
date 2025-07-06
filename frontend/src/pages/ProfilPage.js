import { NutritionCalculator } from '../components/organisms/NutritionCalculator';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/atoms/Button';

const ProfilPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Profil utilisateur</h1>
      <Button onClick={() => navigate('/ajout-aliment')}>
        Ajouter un aliment
      </Button>
      <NutritionCalculator />
    </div>
  );
};

export { ProfilPage };
