import readlineSync from 'readline-sync';

const nameUser = readlineSync.question('Welcome to the Brain Games!\nMay I have your name?');
console.log(`${'Hello'} ${nameUser} ${'!'}`);
export default nameUser;