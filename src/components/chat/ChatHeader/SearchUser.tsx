export const SearchUser = () => {
  return (
    <div className="w-full flex items-center justify-between gap-x-1">
      <div className='w-full relative flex items-center'>
        <input
          type="text"
          name="name"
          id="name"
          className="pr-10 w-full outline-none block rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
          placeholder="Jane Smith"
        />
        <i className="fa fa-search absolute right-3 cursor-pointer"></i>
      </div>
    </div>
  )
}
