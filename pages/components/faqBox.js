import { useState } from 'react'

const FAQ = ({ data }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div
      onClick={handleOpen}
      className="my-8 flex cursor-pointer justify-center"
    >
      <div className="  w-5/6  rounded-md bg-gradient-to-r from-customgold-300 via-gray-600 to-customgold-300 p-[1px]">
        <div className="rounded-md bg-[#161514] p-2 px-4">
          <div className=" flex items-center justify-between">
            <div className="my-2 text-customgold-300 md:text-xl">
              {data.title}
            </div>
            {!open ? (
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 11.25L15 18.75L22.5 11.25"
                    stroke="#CEBD86"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 18.75L15 11.25L7.5 18.75"
                    stroke="#CEBD86"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className={open ? 'block' : 'hidden'}>{data.description}</div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
