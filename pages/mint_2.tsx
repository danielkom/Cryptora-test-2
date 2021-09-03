import Head from 'next/head'
import { useWallet, WalletStatus } from '@terra-money/wallet-provider';
import React from 'react';

export default function ConnectSample() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <div>
      

    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
      <title>Boring Bananas Company</title>
      <link rel="icon" href="/images/favicon.jpg" />

      <meta property="og:title" content="Boring Bananas Co." key="ogtitle" />
      <meta property="og:description" content="Here at Boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="ogdesc" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://boringbananas.co/" key="ogurl"/>
      <meta property="og:image" content="https://boringbananas.co/images/Hola.gif" key="ogimage"/>
      <meta property="og:site_name" content="https://boringbananas.co/" key="ogsitename" />

      <meta name="twitter:card" content="summary_large_image" key="twcard"/>
      <meta property="twitter:domain" content="boringbananas.co" key="twdomain" />
      <meta property="twitter:url" content="https://boringbananas.co/" key="twurl" />
      <meta name="twitter:title" content="Boring Bananas Co." key="twtitle" />
      <meta name="twitter:description" content="Here at boring Bananas company, we specialise in the world's finest digital bananas. We've put together a team spanning 3 continents, to bring you some of the most ‍NUTRITIOUS and DELICIOUS
bananas out known to man." key="twdesc" />
      <meta name="twitter:image" content="https://boringbananas.co/images/Hola.gif" key="twimage" />
    </Head>


    <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/LOGO-TRANPARENT.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              {/* <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a> */}
              {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
              <a href="/mint_2" className="text-4xl text-white hover:text-black m-6">MINT_2!</a>
              {/* <a href="#traits" className="text-4xl text-white hover:text-black m-6">The Platform</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="#contact" className="text-4xl text-white hover:text-black m-6">Contact</a> */}
              <a href="https://twitter.com/kanyewest" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://twitter.com/kanyewest" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
    </div>
    </div>
    <h1>Testings</h1>
    <p className="text-xl text-white my-6  montserrat"> Test Wallet Connection 
      <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              availableConnectTypes,
              availableInstallTypes,
            },
            null,
            2,
          )}
        </pre>
      </section>
      

      <footer>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <button
                key={'install-' + connectType}
                onClick={() => install(connectType)}
              >
                Install {connectType}
              </button>
            ))}
            {availableConnectTypes.map((connectType) => (
              <button
                key={'connect-' + connectType}
                onClick={() => connect(connectType)}
              >
                Connect {connectType}
              </button>
            ))}
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <button onClick={() => disconnect()}>Disconnect</button>
        )}
      </footer>  
      </p>  
    </div>
  </div>

    
  );
}
