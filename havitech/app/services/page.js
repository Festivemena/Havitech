import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sales from '@/components/sales'

export default function Home() {
  return (
    <main className="w-full h-full text-center items-center justify-center">
      <Header />
      <Hero />
      <Sales />
    </main>
  )
}
