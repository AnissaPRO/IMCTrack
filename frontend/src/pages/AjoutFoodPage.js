import { AddFoodForm } from '../components/organisms/AjoutFood';

const AjoutFoodPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Ajouter un aliment</h1>
      <AddFoodForm />
    </div>
  );
};

export { AjoutFoodPage };
