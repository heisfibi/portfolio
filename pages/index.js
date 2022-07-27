import { InfoCard } from '../components/InfoCard';

export default function Home() 
{
  return (
    
    <>

      <div className='w-full h-[35em] object-fill bg-fixed bg-[url("https://i.ibb.co/wQT8tCg/122427480-161210105663948-3594706252189084805-n.jpg")]'>
        <div className='flex flex-col justify-center items-center w-full h-full backdrop-blur-sm backdrop-brightness-50'>
          <h1 className='text-9xl font-bold uppercase transition duration-300 hover:drop-shadow-lg'>Hello</h1>
        </div>
      </div>

      <div className='flex justify-center py-16'>
        <InfoCard 

        />
      </div>
    </>

  )
}
