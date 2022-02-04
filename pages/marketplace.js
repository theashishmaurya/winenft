import MarketCard from './components/marketCart'

const data = [
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
  {
    title: 'My card',
    image: '/assets/how1.png',
    link: 'https://opensea.io/',
  },
]
export default function Landing() {
  return (
    <div className="my-10 mx-10 md:container md:mx-auto">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {data.map((data, index) => (
          <MarketCard data={data} key={index} />
        ))}
      </div>
    </div>
  )
}
