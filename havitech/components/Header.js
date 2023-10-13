import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <main className="bg-[#253143] flex px-10 pt-12 pb-2 text-center space-x-[340px] justify-center w-full h-full">
      <div className='text-white font-bold font-jockey text-[24px]'>Polxr</div>
      <div className='flex text-center w-1/3 text-[16px] px-6 justify-between text-white'>
        <Link href={'./services'}>
        <div className=' hover:opacity-30 cursor-pointer'>Services</div>
        </Link>
        <div className='hover:opacity-30 cursor-pointer'>Community</div>
        <div className='hover:opacity-30 cursor-pointer'>About</div>
      </div>
      <div className='border-[#B97715] rounded-lg border-r-[3px] border-b-[2px]'>
      <div className=' border-[1px] text-center py-2.5 rounded-md hover:opacity-30 cursor-pointer px-1 text-white border-[#B97715]'>Join Riders</div>
      </div>
    </main>
  )
}
