import Image from 'next/image'
import Fire from '@/assets/content.png'
import Contentt from '@/assets/contentt.png'
import Contentr from '@/assets/contentr.png'
import Explorer from '@/assets/explorer.png'

export default function Hero() {
  return (
    <main className="w-full bg-[#253143] pb-24 h-full text-center items-center justify-center">
        <div className='flex justify-center items-center ml-24 text-center'>
            <Image src={Explorer} className='mt-96 ml-36' />
            <Image src={Fire} />
        </div>
        <div className='flex justify-between w-full px-24 mt-24'>
        <Image src={Contentr} />
            <Image src={Contentt} />
        </div>
    </main>
  )
}
