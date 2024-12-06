

const AdminProfile = () => {
    const { user, loading } = 'almas'
    const [role] = 'user'
    if (loading) return <p>Loading...</p>
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='bg-white dark:bg-gray-900 border dark:border-gray-600 shadow-lg rounded-2xl w-3/5'>
      <img
        alt='profile'
        src='/images/banner/bannerBG.jpg'
        className='w-full mb-4 rounded-t-lg h-36'
      />
      <div className='flex flex-col items-center justify-center p-4 -mt-16'>
        <a href='#' className='relative block'>
          <img
            alt='profile'
            src="/images/about/photo02.png"
            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
          />
        </a>

        <p className='p-2 uppercase px-4 text-xs text-white bg-green-800 rounded-full'>
          {role}
        </p>
        <div className='w-full p-2 mt-4 rounded-lg'>
          <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 dark:text-white '>
            <p className='flex flex-col'>
              Name
              <span className='font-bold text-black dark:text-white '>
              "ALMAS HOSSAIN"
              </span>
            </p>
            <p className='flex flex-col'>
              Email
              <span className='font-bold text-black dark:text-white '>{'skalmas......'}</span>
            </p>

            <div>
              <p>Phone</p>
              <span className='font-bold text-black dark:text-white '>{user?.phone || '000499555552'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminProfile