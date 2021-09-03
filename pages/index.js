import Head from 'next/head'
import ConnectSample from './mint_2';
// import QuerySample from './query-sample';
// import TxSample from './tx-sample';

// export default function Index() {
//   return (
//     <div>
//       <ConnectSample />
//       <QuerySample />
//       <TxSample />
//     </div>
//   );
// }


export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Cryptora</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="null" key="ogtitle" />
        <meta property="og:description" content="null." key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="null" key="ogurl"/>
        <meta property="og:image" content="null" key="ogimage"/>
        <meta property="og:site_name" content="null" key="ogsitename" />

        <meta name="twitter:card" content="null" key="twcard"/>
        <meta property="twitter:domain" content="null" key="twdomain" />
        <meta property="twitter:url" content="null" key="twurl" />
        <meta name="twitter:title" content="null" key="twtitle" />
        <meta name="twitter:description" content="null" key="twdesc" />
        <meta name="twitter:image" content="null" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/LOGO-TRANPARENT.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a>
              {/* <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a> */}
              <a href="/mint_2" className="text-4xl text-white hover:text-black m-6">MINT_2!</a>
              <a href="#traits" className="text-4xl text-white hover:text-black m-6">The Platform</a>
              {/* <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a> */}
              <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="#contact" className="text-4xl text-white hover:text-black m-6">Contact</a>
              <a href="https://twitter.com/kanyewest" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://twitter.com/kanyewest" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">INTRODUCING <br/><span className="text-blau"> cryptora </span></h1>
                    <p className="text-2xl text-white my-6  montserrat">Here at <span className="text-blau text-5xl Poppitandfinchsans">Cryptora</span> we specialize in the bringing algorithmic trading to your fingertips.<br />‍<br />We&#x27;ve put together a team accross multiple differnt industries to bring you the most accesable <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">Algorithmic trading platform </span> <br/>out there.
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 7 September 2021. <br />

                    {/* <a href="/images/big bird.jpg" download />
                    <img src="/images/big bird.jpg" alt="W3Schools" />
                    <form method="get" action="/images/big bird.jpg">
                    <button type="submit">Download!</button> */}

                    <p className="text-blau Poppitandfinchsans text-5xl text-center">
                    <form>
                    <a href="/docs/Cryptora_White_Paper_v0.1.pdf" download="test">Download Our Whitepaper!</a>
                    </form>
                    </p>
                    ‍
                    </p>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/LOGO-TRANPARENT.png" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint_2" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    

                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/algo-printer2.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">ALGO PlATFORM</h2>
                    <p className="text-xl text-white my-6  montserrat"> Following market trends is <span className="font-bold"> extremely difficult </span>  takes time and can be a largely <span className="font-bold"> daunting expeirence. </span> With the crypto market moving so rapidly it would need a team of people to keep up with it all. You could try as you might but the market does not sleep. The algorithms designed on Crypora are made to <span className="font-bold"> constantly trade </span> cryptocurrencies.   
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Concerned about the increasing innacesability of these tools, we've set out to create an algorithmic trading platform, where ownership, governance and algo creation are driven by its users
                    </p>
                  </div>
                {/* </div>
                
                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-7xl text-center">SIGNATURE SERIES GALLERY</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/gallery1.jpeg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/gallery2.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery3.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery4.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery5.jpeg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
                <img src="/images/Roadmap.png"/>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> Simple. To make algorithmic trading accesable for everyone in the crypto space <span className="font-bold"> crypto space. </span>  
              </p>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW WE'RE DOING IT</h2>
              <p className="text-xl text-white my-6  montserrat">Ever since the inception of the <span className="text-5xl Poppitandfinch ">boring</span> <span className="text-blau text-5xl Poppitandfinchsans">Bananas</span> <span className="text-5xl Poppitandfinch">company</span> after <a target="_blank" href="https://twitter.com/thedigitalvee/status/1405896585142280192" className="underline text-black font-bold">this tweet</a>, our goal has been to <span className="text-blau text-5xl Poppitandfinchsans">GIVE BACK</span> as much as possible.
              </p>
              <p className="text-xl text-white my-6  montserrat"> A minimum of 
              <span className="font-bold"> 25% of all sales</span> are donated to charity. 
              </p>
              <p className="text-xl text-white my-6  montserrat"> At 100% sellout, we pledge to donate <span className="font-bold"> 60 ETH </span> from primary sales.
              </p>      
              <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              <ul className="">
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 4 x 10 ETH donations: </span> The first of these will be made to <a target="_blank" href="https://girlswhocode.com/" className="underline text-black font-bold">Girls Who Code</a>, working to empower young women and <span className="font-bold"> close the gender gap </span> in technology. We know women are unrepresented in the NFT space - lets help to fix this! The remaining donations will be made via community vote using <a target="_blank" href="https://thegivingblock.com/" className="underline text-black font-bold">the Giving Block</a>.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 20 ETH to Community Wallet: </span> Directed towards supporting creators that want to make a positive contribution to the NFT space.</li>
                <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Secondary sales: 5% royalty </span> (2.5% donation, 2.5% to the team). Secondary sales are directed towards charities voted on by the community monthly.</li>

              </ul>
              <p className="text-xl text-white my-6  montserrat"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community </span> through our <span className="font-bold underline"> PROJECT IN PROGRESS </span> series, to help budding creators to along their journey. 
              </p>
              <p className="text-xl text-white my-6  montserrat"> All fully annotated source code for image generation and the smart contract will be made available after launch as a community resource. 
              </p> */}


              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">THE TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/elmo-c.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">MARCUS</h3>
                    <a href="https://twitter.com/kanyewest" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@marcus)</a>
                  </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/big bird-c.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">FINLAY</h3>
                    <a href="https://twitter.com/kanyewest" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@finlay)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/grover-c.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">SAM</h3>
                    <a href="https://twitter.com/kanyewest" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@sam)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/bert-c.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">ELLIOTT</h3>
                    <a href="https://twitter.com/kanyewest" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@elliott)</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/ernie-c.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">DANIEL</h3>
                    <a href="https://twitter.com/kanyewest" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@daniel)</a>                </div>
                
                </div>
       


              </div>   
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/harold_talk_2.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT THE CRYPTORA TEAM</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you! 
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Drop us a line at <a className="text-blau underline font-bold" target="_blank" href="mailto:cryptoahelp@gmail.com">cryptorahelp@gmail.com</a>,<br/>
                    {/* or alternatively reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="https://twitter.com/boringbananasco">@BoringBananasCo</a><br/>  */}
                    {/* Or alternatively, join our <a className="text-black underline font-bold" target="_blank" href="https://discord.gg/8Wk9Hp6UyV">Discord Server</a>. */}
                    </p>
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }