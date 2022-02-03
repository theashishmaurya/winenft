import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from './assets/logo'

const menu = ['Home', 'Invest', 'How it Works', 'Casks', 'NFTs', 'FAQ']
const social = ['/assets/instagram.png', '/assets/twitter.png']

const Navbar = () => {
  const [isMobile, setIsMobile] = useState()
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)

  const handleMobileNav = () => {
    setToggleMobileMenu(!toggleMobileMenu)
  }

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width:1024px)').matches)

    window.addEventListener('resize', () => {
      setIsMobile(window.matchMedia('(max-width:1024px)').matches)
    })
  })

  return (
    <div
      className={`flex grow  ${
        isMobile ? ' flex-col' : 'flex-row'
      } items-center bg-nav py-4 ${
        toggleMobileMenu && isMobile ? 'h-screen' : ''
      }`}
    >
      <div
        className={` flex items-center	justify-between	text-white ${
          isMobile ? 'w-full' : 'basis-1/4 '
        }	`}
      >
        <div className="mx-2">
          <Image src={'/assets/logo.png'} height={76} width={190} />
        </div>
        <div className={`${isMobile ? 'block' : 'hidden'}`}>
          {toggleMobileMenu ? (
            <div
              className="mx-4 cursor-pointer rounded-full  bg-customgold-300 px-2 text-xl font-bold text-black"
              onClick={handleMobileNav}
            >
              X
            </div>
          ) : (
            <div className="mx-4 cursor-pointer" onClick={handleMobileNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#CEBD86"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div
        className={`my-4 flex basis-6/12 cursor-pointer items-center justify-end text-xl text-white	${
          isMobile ? ' flex-col' : 'flex-row '
        } ${isMobile ? (toggleMobileMenu ? 'block' : 'hidden') : ''}`}
      >
        {menu.map((data) => (
          <Link href={data === 'How it Works' ? '#how-it-works' : `#${data}`}>
            <div
              key={data}
              className={`${
                isMobile ? 'my-4 ' : 'mx-4 active:text-customgold-300'
              } hover:text-customgold-300`}
            >
              {data}
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`flex  basis-3/12 justify-center text-white  ${
          isMobile ? (toggleMobileMenu ? 'block' : 'hidden') : ''
        }`}
      >
        <div className="flex flex-row items-center">
          {social.map((src) => (
            <div className="mx-2">
              {' '}
              <Image src={src} height={30} width={30} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navbar
