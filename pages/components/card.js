import Image from 'next/image'

const Card = ({ data }) => {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-between rounded-md bg-nav p-2 shadow-md md:px-4 md:py-20 lg:flex-row lg:px-10">
      <div>
        <div className="my-4  text-left text-2xl font-bold text-customgold-300 lg:text-3xl">
          Heading
        </div>

        <div className="text-left lg:max-w-[50%] lg:text-2xl">{data.des}</div>
      </div>
      <div>
        <Image src={data.image} width={700} height={500} />
      </div>
    </div>
  )
}

export default Card
