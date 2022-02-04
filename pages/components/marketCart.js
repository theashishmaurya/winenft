import Image from 'next/image'
import Link from 'next/link'

const MarketCard = ({ data }) => {
  return (
    <div>
      <div className=" flex w-fit flex-col items-center justify-between rounded-lg bg-nav p-2 shadow-md md:px-10">
        <div>
          <Image src={data.image} width={150} height={150} />
        </div>
        <div className=" my-4 text-xl font-bold">{data.title}</div>
        <Link href={data.link}>
          <div className="block w-fit cursor-pointer  bg-customgold-300 p-4 px-10 font-bold text-black md:text-xl">
            View Inventory List
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MarketCard
