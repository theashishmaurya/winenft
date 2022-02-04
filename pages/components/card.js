import Image from 'next/image'

const Card = ({ data }) => {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-between rounded-md bg-nav  shadow-md  lg:flex-row ">
      <div className="px-4 md:mx-20 lg:px-0">
        <div className="my-4  text-left text-2xl font-bold text-customgold-300  lg:text-3xl">
          Heading
        </div>

        <div className="text-left  lg:text-2xl">{data.des}</div>
      </div>
      <div className="mt-10 lg:my-0">
        <img src={data.image} width="100%" height="100%" />
      </div>
    </div>
  )
}

export default Card
