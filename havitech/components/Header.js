import Image from 'next/image'

export default function Header() {
  return (
    <main className="bg-[#253143] flex px-10 pt-12 pb-2 text-center space-x-[340px] justify-center w-full h-full">
      <div className='text-white font-bold font-jockey text-[24px]'>Polxr</div>
      <div className='flex text-center w-1/3 text-[16px] px-6 justify-between text-white'>
        <div>Services</div>
        <div>Community</div>
        <div>About</div>
      </div>
      <div className='border-[#B97715] rounded-lg border-r-[3px] border-b-[2px]'>
      <div className=' border-[1px] text-center py-2.5 rounded-md px-1 text-white border-[#B97715]'>Join Riders</div>
      </div>
    </main>
  )
}
