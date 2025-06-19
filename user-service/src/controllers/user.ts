import { loadData } from '../models/user';

function list(req:any, res:any) {
  const users = loadData('users')
  res.status(200).json(users);
}

export {list}