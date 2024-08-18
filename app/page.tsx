import Videos from './components/Videos';
import Activities from './components/Activities';
import People from './components/People';
import Documents from './components/Document';
import Channel from './components/Channel';

export default async function Home() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
        <div className='col-span-2 w-full'>
          <Videos />
        </div>
        <div className='col-span-1 w-full'>
          <Activities />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
        <div className='col-span-2 w-full'>
          <People />
          <div className='hidden md:block'>
            <Documents />
          </div>
        </div>
        <div className='col-span-1 w-full'>
          <Channel />
          <div className='block md:hidden'>
            <Documents />
          </div>
        </div>
      </div>
    </>
  )
}
