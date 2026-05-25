import fs from 'fs/promises';
import { dbPath } from './constans/constans.js';

const readUsers = async () => {
  const data = await fs.readFile(dbPath, 'utf-8');
  const parsedData = JSON.parse(data);
  return parsedData;
};

const getUserById = async id => {
  const users = await readUsers();
  const user = users.find(u => u.id === id);
  return user;
};

console.log(await getUserById(3));

const getAdults = async () => {
  const users = await readUsers();
  const adultUsers = users.filter(u => u.age >= 18);
  return adultUsers;
};

console.log(await getAdults());

const calculateTotalBalance = async () => {
  const users = await readUsers();
  const totalBalance = users.reduce((acc, user) => {
    acc += user.balance;
    return acc;
  }, 0);
  return totalBalance;
};

console.log(await calculateTotalBalance());

const getRichestUser = async () => {
  const users = await readUsers();
  let reachestUser = users[0];
  users.map(user => {
    if (user.balance > reachestUser.balance) {
      reachestUser = user;
    }
  });
  return reachestUser;
};

console.log(await getRichestUser());

const getUsersNames = async () => {
  const users = await readUsers();

  const userNames = users.map(user => user.name);
  return userNames;
};

console.log(await getUsersNames());
