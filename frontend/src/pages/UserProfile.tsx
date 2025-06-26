import { Button } from '../components/atoms/Button';

const mockUser = {
  username: 'utilisateur_test',
  email: 'test@example.com',
  createdAt: '2024-06-01'
};

const UserProfile = () => {
  const handleLogout = () => {
    // Ici on pourra vider le localStorage et rediriger vers /login
    console.log('Déconnexion...');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Bienvenue, {mockUser.username} !</h1>

      <div className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-md text-left space-y-4">
        <p><strong>Email :</strong> {mockUser.email}</p>
        <p><strong>Compte créé le :</strong> {new Date(mockUser.createdAt).toLocaleDateString()}</p>

        <Button onClick={handleLogout}>Se déconnecter</Button>
      </div>
    </div>
  );
};

export default UserProfile;
