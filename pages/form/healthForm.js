import React from 'react'

const healthForm = () => {
  return (
    <div className='flex justify-center p-8'>
        <form className="w-full max-w-sm">
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Jane Doe" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Age
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Jane Doe" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Gender
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Jane Doe" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Height
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" defaultValue="Jane Doe" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Weight
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Blood Group
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label className="block pr-4 mb-1 font-bold text-gray-500 md:text-right md:mb-0" htmlFor="inline-full-name">
              Mobile Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="******************" />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3" />
          <label className="block font-bold text-gray-500 md:w-2/3">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">
              Send me copy of responses!
            </span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default healthForm