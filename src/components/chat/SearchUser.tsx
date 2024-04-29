import PlusSvg from '../../assets/icons/Plus.svg'

export const SearchUser = () => {
  return (
    <div className="w-full flex items-center justify-between gap-x-1">
      <div className='w-full'>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full outline-none block rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
      </div>
      <div className='w-[30px] h-[30px] rounded-full bg-rose-200 flex items-center justify-center cursor-pointer'>
        <img src={PlusSvg} alt='Add user icon' />
      </div>
    </div>
  )
}
