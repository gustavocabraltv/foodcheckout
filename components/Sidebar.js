import React from 'react'

const Sidebar = () => {
  return (
    <div className=' min-w-[16rem] h-screen dark:bg-gray-900 bg-[white] rounded-md'>
        <div className='px-6 pt-8'>
            <div className='flex items-center justify-between'>
                    <a
                    href="#"
                    class="bg-blue-600 p-1.5 rounded flex items-center justify-center focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        <svg
                    class="w-5 h-5 text-white stroke-current"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                        d="M12 4.75L19.25 9L12 13.25L4.75 9L12 4.75Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path>
                    <path
                        d="M9.25 12L4.75 15L12 19.25L19.25 15L14.6722 12"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    ></path></svg>
                </a>

                <button class=" items-center justify-center p-0.5 rounded bg-gray-200 dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 hidden lg:flex">
                            <svg
                            class="w-3 h-3 dark:text-gray-300 text-gray-400 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.25 6.75L4.75 12L10.25 17.25"
                            ></path>
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19.25 12H5"
                            ></path>
                            </svg>
                </button>

            </div>
        </div>
        <div className='px-6 pt-4'>
            <input type='text' className='w-full rounded px-4 text-sm font-light bg-slate-200 dark:bg-gray-800 py-2 dark:placeholder-gray-500 placeholder-slate-500 focus:ring-[gray-500] focus:ring-1 focus:outline-none focus:bg-white dark:focus:bg-gray-800 text-slate-600' placeholder='search' />
        </div>

        <div className='px-6 pt-4'>
            <hr className='border-gray-200 dark:border-gray-800 '/>
        </div>

    </div>
  )
}

export default Sidebar