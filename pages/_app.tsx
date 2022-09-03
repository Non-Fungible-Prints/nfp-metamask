/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';

import {
  Mainnet, DAppProvider, Config, Mumbai,
} from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
    [Mumbai.chainId]: getDefaultProvider('mainnet'),
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DAppProvider config={config}>
    <Component {...pageProps} />
  </DAppProvider>
);

export default MyApp;
