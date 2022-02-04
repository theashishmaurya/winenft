import Image from 'next/image'
import Logo from './assets/logo'

const menu = ['Home', 'Invest', 'How it Works', 'Casks', 'NFTs', 'FAQ']
const social = ['/assets/instagram.png', '/assets/twitter.png']
const Footer = () => {
  return (
    <div className="my-4 mx-10 lg:mx-32">
      <div className="grow-1 flex flex-col items-center py-4  lg:flex-row">
        <div className="flex basis-1/4 flex-col items-center justify-start text-white lg:items-start">
          <div>
            <Image src={'/assets/logo.png'} height={60} width={191} />
          </div>
          <div className="my-4 text-xl font-light">
            Global Merketplace For Whisky Cask Investment
          </div>
        </div>
        <div className="my-4 flex basis-6/12 cursor-pointer flex-col	items-center justify-end text-xl text-white lg:flex-row	">
          {menu.map((data) => (
            <div key={data} className="hidden lg:mx-4 lg:block">
              {data}
            </div>
          ))}
        </div>
        <div className="flex basis-3/12 justify-center text-white">
          <div className="flex flex-row items-center">
            {social.map((src, index) => (
              <div className="mx-2">
                {' '}
                <Image src={src} height={30} width={30} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>@2022 whisly All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer
