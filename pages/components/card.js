import Image from 'next/image'

const Card = ({ data }) => {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-between rounded-md bg-nav p-2 shadow-md md:px-4 lg:flex-row lg:px-10">
      <div className="lg:max-w-[50%] lg:text-2xl">{data.des}</div>
      <div>
        <Image src={data.image} width={150} height={150} />
      </div>
    </div>
  )
}

export default Card
