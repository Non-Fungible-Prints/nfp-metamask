/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { useEthers } from '@usedapp/core';
import { useRouter } from 'next/router';
import { SectionTemplate } from './SectionTemplate';
import { Loader } from '../components';
import { ConnectWallet } from '../components/buttons/ConnectWallet';
import useAlchemy from '../hooks/useAlchemy';

// eslint-disable-next-line no-shadow
enum State {
  Connect = 'connect',
  Loading = 'loading',
  Validate = 'validate'
}

export const Hero = () => {
  const router = useRouter();
  const { contract } = router.query;

  const [ step, setStep ] = useState<State>(State.Connect);
  const [ nfp, setNfp ] = useState<any>({});
  const { getNFTFromWallet } = useAlchemy();
  const { account } = useEthers();

  const [ nft, setNft ] = useState<any>({});
  const [ isValid, setIsValid ] = useState(false);

  useEffect(() => {
    if (!account) return;

    if (account && !nft) setStep(State.Loading);

    ((async () => {
      const nfts = await getNFTFromWallet(account!);

      if (nfts && nfts.ownedNfts) {
        const filteredNft = nfts.ownedNfts.filter((nft: any) => nft.contract.address === contract)[0];
        if (filteredNft) {
          setNft(filteredNft);
          console.log(filteredNft);
          setIsValid(true);
          setStep(State.Validate);
        }
      }
    }))();
  }, [ account, contract ]);

  const step3 = () => (
    <div className="flex flex-col">
      {nft?.contractMetadata?.name && (<h2 className="mx-auto text-xl font-bold text-gray-200">{nft.contractMetadata.name}</h2>)}

      {isValid ? (
        <div className="mx-auto text-green-600 w-[30%] h-auto">
          <CheckCircleIcon />
          <span className="text-bold">Owned</span>
        </div>
      ) : (
        <div className="mx-auto text-red-600 w-[30%] h-auto">
          <XCircleIcon />
          <span className="text-bold">Not Owned</span>
        </div>
      )}

    </div>
  );

  const renderStep = () => {
    const map = {
      connect: (<ConnectWallet />),
      loading: (<Loader />),
      validate: step3(),
    };

    return map[step as State];
  };

  return (
    <SectionTemplate id="hero">
      <div className="min-h-screen w-full opacity-40 absolute flex flex-col">
        <div className="my-auto flex flex-col">
          {[ ...Array(20) ].map(() => (
            <h1 className="text-3xl font-bold text-gray-200 mx-auto">
              Non Fungible
              {' '}
              <a className="text-purple-700">PRINTS</a>
            </h1>
          ))}
        </div>
      </div>

      <div className="relative min-h-screen max-w-6xl mx-auto flex">
        <div className="my-auto text-center bg-black">
          <div className="my-24">
            <h1 className="text-3xl font-bold text-gray-200 mb-8">
              Non Fungible
              {' '}
              <a className="text-purple-700">PRINTS</a>
            </h1>

            {/* <div className="flex justify-center">
              <ConnectWallet />
            </div> */}

            {renderStep()}

            {/* <button className="text-white" type="button" onClick={() => setStep(State.Loading)}>Loading</button>
            <button className="text-white" type="button" onClick={() => setStep(State.Validate)}>Validate</button> */}
          </div>
        </div>
      </div>
    </SectionTemplate>
  );
};
