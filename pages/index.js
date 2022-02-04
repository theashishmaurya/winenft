import Head from 'next/head'
import Image from 'next/image'
import Card from './components/card'
import FAQ from './components/faqBox'
import Footer from './components/footer'

const faq = [
  {
    title: 'What is the adidas Originals: Into the Metaverse NFT?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
  {
    title: 'What does “Phase 1” mean?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
  {
    title: 'What is the Phase 4 ERC-721 token?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
  {
    title: 'Will there be a ‘reveal’?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
  {
    title: 'What happens to gas fees?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
  {
    title: 'Why was there a pause during Early Access?',
    description:
      'NFT pioneers gmoney, PUNKS Comic and Bored Ape Yacht Club help guide adidas Originals Into the Metaverse. The limited edition digital collectible celebrates our partnership and offers holders exclusive collaborative physical merchandise and ongoing digital utility.',
  },
]

const CardData = [
  {
    image: '/assets/how1.jpeg',
    des: 'At any time, Whisly NFT owners can choose to exit by requesting an ownership transfer and access to physical certifications & documents. The NFTs will then be destroyed. Whisly charges a standard fee @ 20% of market value of the cask for the official ownership transfer and NFT destroy process.',
  },
  {
    image: '/assets/how2.jpeg',
    des: 'Whisly NFT owners can also choose to bottle their casks using a crossover design with other NFTs they own.',
  },
  {
    image: '/assets/how3.jpeg',
    des: 'Whisly owns all casks with official documentations fully digitized on blockchain as NFT* All Whisly casks are tokenized and made available for trade.',
  },
]
export default function Home() {
  return (
    <div className=" ">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-10 md:mx-32">
        <div className="container mx-auto " id="Home">
          <div className="min-w-screen flex min-h-screen items-center justify-center uppercase	">
            <div className="lg:grid lg:grid-cols-2 lg:gap-4">
              <div className=" flex flex-col items-center justify-center md:mx-4 lg:items-start ">
                <div className="my-4 text-2xl font-medium text-customgold-200	">
                  WHISLY
                </div>
                <div className="my-2 text-center font-semibold text-white md:text-left md:text-4xl	2xl:text-6xl">
                  Global{' '}
                  <span className="text-customgold-400">MarketPlace</span> for
                  Whisky Cask Investment.
                </div>
                <span className="my-4">
                  <span className="my-4 block w-fit cursor-pointer bg-customgold-300 p-4 px-16 text-xl font-bold text-black">
                    Get Started
                  </span>
                </span>
              </div>

              <div className="flex items-center justify-end">
                <Image
                  src={'/assets/hero-barrel.png'}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Introduction Starts Here */}
        <div className="my-20 md:my-40" id="Invest">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <div className="my-2 text-lg md:text-xl">
              Introduction to Future Of Tech-Driven And Transparent
            </div>
            <div className="my-2 text-3xl font-semibold text-customgold-300 md:text-4xl">
              Whisky Cask Trading
            </div>
          </div>

          <div className="my-4 md:my-20 ">
            <div className="grid md:gap-20 lg:grid-cols-2 xl:gap-40">
              <div>
                <div className="my-6 text-3xl font-semibold text-customgold-300">
                  The Future Has Arrived
                </div>
                <div className="my-4 text-xl">
                  You deserve the best return on your investment -- this is why
                  we developed Whisly, the newest and easiest way to invest in
                  rare, premium whisky casks in the modern age. Digitally
                  native, Whisly is designed to bring promising returns* to
                  fulfill your investment ambitions in short, medium and long
                  terms.
                  <br></br>
                  <br></br>
                  Each and every cask presented by Whisly has been carefully
                  selected by our experts, with official documents tokenized as
                  NFTs on the blockchain.
                </div>
              </div>
              <div>
                <div className="my-6 text-5xl font-bold text-customgold-300">
                  +564%
                </div>
                <div className="my-2 text-xl">
                  *Growth of Rare Whisky Prices Over The Past Decade.
                </div>
                <div className="text-md my-2 text-customgold-200">
                  -Knight Frank Luxury investment Index
                </div>
                <div className="my-8 text-5xl font-bold text-customgold-300">
                  Millennial
                </div>

                <div className="my-2 text-xl font-bold">
                  Property And Whisky Are Millennial Top Investment Choices
                </div>

                <div className="text-md text-customgold-200">
                  - Whisky Cask Market Overview August 2020
                </div>
              </div>
            </div>
            <div className="my-10 flex justify-center md:my-20">
              <div className=" block w-fit cursor-pointer  bg-customgold-300 p-4 px-16 font-bold text-black md:text-xl">
                ENTER MARKETPLACE
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////// How it works section ////////////////////////////// */}
        <div className="my-40" id="how-it-works">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="my-2 text-3xl font-semibold text-customgold-300 md:text-4xl">
              How it Works?
            </div>
          </div>

          <div className="my-20 flex flex-col  items-center justify-between text-center">
            <div className="my-2 text-2xl font-semibold text-customgold-300 ">
              Whisly NFT
            </div>
            <div>
              <svg
                width="37"
                height="150"
                viewBox="0 0 37 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7322 329.268C17.7085 330.244 19.2915 330.244 20.2678 329.268L36.1777 313.358C37.154 312.382 37.154 310.799 36.1777 309.822C35.2014 308.846 33.6184 308.846 32.6421 309.822L18.5 323.964L4.35786 309.822C3.38155 308.846 1.79864 308.846 0.82233 309.822C-0.15398 310.799 -0.15398 312.382 0.82233 313.358L16.7322 329.268ZM16 0.5V5.60938H21V0.5L16 0.5ZM16 15.8281V26.0469H21V15.8281H16ZM16 36.2656L16 46.4844H21V36.2656H16ZM16 56.7031V66.9219H21V56.7031H16ZM16 77.1406V87.3594H21V77.1406H16ZM16 97.5781V107.797H21V97.5781H16ZM16 118.016V128.234H21V118.016H16ZM16 138.453V148.672H21V138.453H16ZM16 158.891L16 169.109H21V158.891H16ZM16 179.328V189.547H21L21 179.328H16ZM16 199.766V209.984H21V199.766H16ZM16 220.203V230.422H21V220.203H16ZM16 240.641V250.859H21V240.641H16ZM16 261.078V271.297H21V261.078H16ZM16 281.516V291.734H21V281.516H16ZM16 301.953V312.172H21V301.953H16ZM16 322.391V327.5H21V322.391H16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="my-2 text-2xl font-semibold text-customgold-300 ">
              Cash Ownership
            </div>
            <div>
              <svg
                width="37"
                height="150"
                viewBox="0 0 37 330"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7322 329.268C17.7085 330.244 19.2915 330.244 20.2678 329.268L36.1777 313.358C37.154 312.382 37.154 310.799 36.1777 309.822C35.2014 308.846 33.6184 308.846 32.6421 309.822L18.5 323.964L4.35786 309.822C3.38155 308.846 1.79864 308.846 0.82233 309.822C-0.15398 310.799 -0.15398 312.382 0.82233 313.358L16.7322 329.268ZM16 0.5V5.60938H21V0.5L16 0.5ZM16 15.8281V26.0469H21V15.8281H16ZM16 36.2656L16 46.4844H21V36.2656H16ZM16 56.7031V66.9219H21V56.7031H16ZM16 77.1406V87.3594H21V77.1406H16ZM16 97.5781V107.797H21V97.5781H16ZM16 118.016V128.234H21V118.016H16ZM16 138.453V148.672H21V138.453H16ZM16 158.891L16 169.109H21V158.891H16ZM16 179.328V189.547H21L21 179.328H16ZM16 199.766V209.984H21V199.766H16ZM16 220.203V230.422H21V220.203H16ZM16 240.641V250.859H21V240.641H16ZM16 261.078V271.297H21V261.078H16ZM16 281.516V291.734H21V281.516H16ZM16 301.953V312.172H21V301.953H16ZM16 322.391V327.5H21V322.391H16Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="my-2 text-2xl font-semibold text-customgold-300 ">
              Botteling Rights
            </div>
          </div>
          <div className="">
            <div className="my-6 flex items-center">
              <div className=" w-10 rounded-full bg-customgold-300 p-2 text-center font-bold text-black">
                1
              </div>
              <div className="mx-4 text-xl font-light">
                {' '}
                Invest And Trade With NFT
              </div>
            </div>
            <div className="my-6 flex items-center">
              <div className=" w-10 rounded-full bg-customgold-300 p-2 text-center font-bold text-black">
                2
              </div>
              <div className="mx-4 text-xl font-light">
                {' '}
                Exit as Casks Or Bottle Anytime
              </div>
            </div>

            <div className="my-10 flex flex-col items-center justify-center text-center md:my-20">
              <div className="md:text-md my-2  text-customgold-300">
                Whisly NFTs Can Be Easily Traded. As The Casks Mature,
                Popularity Evolves
              </div>

              {/* <Image src={'/assets/how.png'} width={1440} height={1459} /> */}
              {CardData.map((data, index) => (
                <Card data={data} />
              ))}
            </div>

            <div className="my-10 flex flex-col items-center justify-center text-center md:my-20">
              <div className="md:text-md my-2  text-customgold-300">
                *Whisky casks securely stored in bonded warehouses in Scotland.
                Inventory regularly audited and verified.
              </div>
              <div className="my-10">
                <div className=" block w-fit cursor-pointer bg-customgold-300 p-4 px-16 text-xl font-bold text-black ">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////// Whisky Cask Trading /////////////////////////////////// */}
        <div className="md:my-40" id="Casks">
          <div className="flex flex-col items-center justify-center text-center text-white">
            <div className="my-2 text-3xl font-semibold text-customgold-300 md:text-4xl">
              Enjoy Unlimited Upside On Your Investment
            </div>
          </div>

          <div className="my-4 md:my-20 ">
            <div className="grid md:gap-20 lg:grid-cols-2 xl:gap-40">
              <div>
                <div className="my-4 text-xl">
                  Each cask available on Whisly has been carefully hand-picked
                  by whisky investment experts to ensure strong upside potential
                  and high investment grading.
                  <br></br>
                  <br></br>
                  Whisly NFT owners are entitled to full naming and bottling
                  rights of their casks. At any time, marry your existing NFTs*
                  (e.g. Cryptopunks, Bored Ape Yacht Club, etc.) to create a
                  bespoke crossover cask that is truly unique to your identity.
                  Bottling whisky with the NFTs you own is just a few clicks
                  away.
                </div>

                <div className="text-md my-2 text-customgold-200">
                  *Please Contact Whisly To Discuss On-chain CrossOver Options.
                </div>
              </div>
              <div>
                <div className="my-6 text-xl font-bold text-customgold-300">
                  The Drop:
                </div>
                <div className="mt-4 text-lg font-semibold">Q1 2022</div>
                <div className="text-md my-2 font-light ">
                  5 casks including Benriach, Craigellachie and Caol Ila in
                  various cask types and price ranges
                </div>
                <div className="mt-4 text-lg font-semibold">Q2 2022</div>
                <div className="text-md my-2 font-light">
                  10 casks including Linkwood, Ardmore, Aberlour.
                </div>
                <div className="mt-4 text-lg font-semibold">Q3-Q4 2022</div>
                <div className="text-md my-2 font-light">
                  A total of 50 premium casks will be available
                </div>
              </div>
            </div>
            <div className="my-10 flex justify-center md:my-20">
              <div className=" block w-fit cursor-pointer  bg-customgold-300 p-4 px-16 font-bold text-black md:text-xl">
                View Inventory List
              </div>
            </div>
          </div>
        </div>
        {/* //////////////////////////// how to trading /////////////////////////////////// */}
        <div className="my-40" id="NFTs">
          <div className=" flex flex-col items-center justify-center text-center text-white">
            <div className="my-2 text-3xl font-semibold text-customgold-300 md:text-4xl">
              How To Trading?
            </div>
          </div>

          <div className="my-4 md:my-20 ">
            <div className="grid items-center md:gap-20 lg:grid-cols-2 xl:gap-40">
              <div>
                <Image src={'/assets/trading.png'} width={593} height={640} />
              </div>
              <div>
                <div className="my-6 text-2xl font-bold text-customgold-300">
                  Create Truly Unique Casks With The NFTS You Own
                </div>
                <div className="my-4 flex items-start">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#CEBD86"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="#CEBD86"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="mx-4">
                    Marry existing NFTs with whisky – Whisly allows the
                    possibility of having NFTs owned by you be associated with a
                    cask.<br></br>
                    <br></br> The NFT can be printed on to the cask on chain,
                    and eventually, the bottle labels.
                  </div>
                </div>
                <div className="my-4 flex">
                  <div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19"
                        stroke="#CEBD86"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 5L19 12L12 19"
                        stroke="#CEBD86"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="mx-4">
                    Please{' '}
                    <span className="text-customgold-300">Contact Us</span> to
                    discuss on-chain crossover options.
                  </div>
                </div>
                <div className="my-6 flex justify-center lg:block">
                  <div className=" block w-fit cursor-pointer  bg-customgold-300 p-2 px-6 font-bold text-black md:text-xl">
                    Trade on Opensea now
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10 flex justify-center md:my-20"></div>
          </div>
        </div>
        {/* ///////////////////////////////// FAQ ///////////////////////////// */}
        <div className="md:my-40" id="FAQ">
          <div className=" flex flex-col items-center justify-center text-center text-white">
            <div className="my-2 font-bold text-customgold-300 md:text-4xl">
              Frequently Asked Questions
            </div>
          </div>

          <div className="my-4 md:my-20 ">
            {faq.map((data, index) => (
              <FAQ data={data} key={index} />
            ))}
          </div>
        </div>
        {/* ////////////////////// Veryfication details //////////////////////////////////////////// */}
        <div className="md:my-40">
          <div className=" flex flex-col items-center justify-center text-center text-white">
            <div className="my-2 max-w-[80vh] text-center md:text-lg">
              All inventory are securely stored in HMRC approved bonded
              warehouses.<br></br> Documents fully verified by Whisly and
              available for access by NFT owners 24/7/365.{' '}
            </div>
            <div className="my-10 flex flex-col items-center justify-center md:flex-row">
              <div className="mx-4 my-4 md:my-0">
                <div className=" block w-fit cursor-pointer  bg-customgold-300 p-2 px-6 font-bold text-black md:text-xl">
                  View Verification Detail
                </div>
              </div>
              <div className="mx-4">
                <div className=" block w-fit cursor-pointer  bg-customgold-300 p-2 px-6 font-bold text-black md:text-xl">
                  Check My Cask Documents
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ////////////////////// Contact US //////////////////////////////////// */}
      <div className="bg-customgold-300 text-black">
        <div className="mx-10 bg-customgold-300 py-10 md:mx-36 md:my-40">
          <div className=" flex flex-col items-center justify-center text-center text-white">
            <div className="mt-6 text-3xl font-bold text-black md:text-4xl">
              Contact Us
            </div>
          </div>

          <div className="my-4 md:my-10 ">
            <div className="grid items-center md:gap-20 lg:grid-cols-2 xl:gap-40">
              <div>
                <div className="my-6 text-2xl font-bold">
                  Have A Question Or Want To Sell Your Cask To Us?
                </div>
                <div className="my-4 text-xl">
                  We welcome all feedback and first-grade inventory to be added
                  to Whisly. Drop us an email and we will be in touch shortly.
                </div>
                <div className="m-4">Info@Whisly.com</div>
              </div>
              <div>
                <div className="my-4 flex items-start">
                  <div className="flex rounded-md border-2 border-black px-2 py-1 md:w-4/6">
                    <input
                      className="padding focus-none w-5/6 bg-customgold-300"
                      type="text"
                      placeholder="Abc@XYZ.com"
                    />
                    <div className="rounded-md bg-black p-2 px-4 font-semibold text-white">
                      SUBSCRIBE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////////////// Footer //////////////////////////////////////// */}
    </div>
  )
}
