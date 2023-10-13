import Image from 'next/image'
import Chair from '@/assets/image2.png'
export default function Sales() {
  return (
    <main className="w-full h-full text-center items-center justify-center">
      <div className='bg-[#F9D370] w-full h-full'>
        <div className='w-full pt-6'>
            <Image src={Chair} />
        </div>
      </div>
    </main>
  )
}
