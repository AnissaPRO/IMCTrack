import { signToken } from '../utils/jwt';
import bcrypt from 'bcrypt';
import * as userService from './user';

interface NewUser {
  name: string;
  email: string;
  password: string;
}

interface User extends NewUser {
  id: string;
}



export const signup = async ({ name, email, password }: Omit<User, 'id'>) => {

  const users = await userService.getAllUsers();
  const existing = users.find((u) => u.email === email);
  if (existing) {
    throw new Error('User exist');
  };

  const newUser: NewUser = {
    name,
    email,
    password
  };

   const createdUser = await userService.createUser(newUser);
   const token = signToken({ id: createdUser.id, email: createdUser.email });
   return { token, createdUser };
};

export const login = async (email: string, password: string) => {
  
   const users = await userService.getAllUsers();
   console.log("tableau",users);
   const user = users.find((u) => u.email === email);
   console.log("utilisateur trouvé",user);
  
  if (!user) return null; 

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return null;

  // creation JWT
  const token = signToken({ id: user.id, email });

  console.log('Generated token:', token);
  return { token };
};
