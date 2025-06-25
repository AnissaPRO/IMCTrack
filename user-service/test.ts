import bcrypt from 'bcrypt';

const run = async () => {
  const hash = '$2b$12$mZQXA1iwZ3i5Zx16/5nf5ejI7tscMkHqRdKk9o1tYFsPjmB2elplq';
  const plain = 'toto'; 

  const valid = await bcrypt.compare(plain, hash);
  console.log(valid ? '✅ Mot de passe OK' : '❌ Mauvais mot de passe');
};

run();