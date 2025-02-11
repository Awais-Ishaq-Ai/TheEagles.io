import { createConfig, http } from 'wagmi';
import { sepolia, mainnet } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors';
import { coinbaseWallet } from '@wagmi/connectors';

// import { wagmiProjectID } from './config/config';

// const projectId = '549ef9806a7268b35975a1bbee557640';
const projectId = '45a029651f37ec8e01c2e486810e6f3e';

export const config = createConfig({
  chains: [sepolia], // Supported chains
  connectors: [injected(), walletConnect({ projectId }), metaMask()],

  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
  // Enable support for chains outside the predefined ones
  // publicClient: {
  //   batch: true, // Enable batching to handle unsupported chains efficiently
  // },
});
