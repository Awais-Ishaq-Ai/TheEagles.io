import { readContract, writeContract } from '@wagmi/core';
import { config, ContractAdress, ABI } from './config';
///////////////////////////////////////////////////////////Write MEthods///////////////////////////////////
// 1:
export const buyNewLevel = async (matrix, level) => {
  const result = await writeContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'buyNewLevel',
    args: [matrix, level],
  });
  console.log('buyNewLevel :', result);
  return result;
};
//2
export const buyNewLevelFor = async (address, matrix, level) => {
  const result = await writeContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'buyNewLevelFor',
    args: [address, matrix, level],
  });
  console.log('buyNewLevelFor :', result);
  return result;
};
//4
export const registrationExt = async (address) => {
  const result = await writeContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'registrationExt',
    args: [address],
  });
  console.log('registrationExt :', result);
  return result;
};
//5
export const registrationFor = async (userAddress, refferAddress) => {
  const result = await writeContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'registrationFor',
    args: [userAddress, refferAddress],
  });
  console.log('registrationFor :', result);
  return result;
};
//6
export const withdrawLostTokens = async (tokenAddress) => {
  const result = await writeContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'withdrawLostTokens',
    args: [tokenAddress],
  });
  console.log('withdrawLostTokens :', result);
  return result;
};
///////////////////////////////////////////////////READ METHODS///////////////////////////////////
// 1:
export const BASIC_PRICE = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'BASIC_PRICE',
  });
  console.log('BASIC_PRICE :', result);
  return result;
};
// 2:
export const LAST_LEVEL = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'LAST_LEVEL',
  });
  console.log('LAST_LEVEL :', result);
  return result;
};
// 3:
export const balances = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'balances',
    args: ['0x722f3A7D715ceB9F3BE92643e4C750310c6B1982'],
  });
  console.log('balances :', result);
  return result;
};
// 4:
export const contractOwner = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'contractOwner',
  });
  console.log('contractOwner :', result);
  return result;
};
//5
export const depositToken = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'depositToken',
  });
  console.log('depositToken :', result);
  return result;
};
//8
export const id1 = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'id1',
  });
  console.log('id1 :', result);
  return result;
};
//9
export const idToAddress = async (id) => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'idToAddress',
    args: [id],
  });
  console.log('idToAddress :', result);
  return result;
};
//10
export const isUserExists = async (address) => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'isUserExists',
    args: [address],
  });
  console.log('isUserExists :', result);
  return result;
};
//11
export const lastUserId = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'lastUserId',
  });
  console.log('lastUserId :', result);
  return result;
};
//12
export const levelPrice = async (Level) => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'levelPrice',
    args: [Level],
  });
  console.log('levelPrice :', result);
  return result;
};
//13

export const locked = async () => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'locked',
  });
  console.log('locked :', result);
  return result;
};

//14

export const userIds = async (ID) => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'userIds',
    args: [ID],
  });
  console.log('userIds :', result);
  return result;
};

//15
export const users = async (address) => {
  const result = await readContract(config, {
    abi: ABI,
    address: ContractAdress,
    functionName: 'users',
    args: [address],
  });
  console.log('users :', result);
  return result;
};
