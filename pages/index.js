import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Additional from '../components/Additional'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Index from '../components/Index'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Industrial Volleyball League, Inc.</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Announcements */}
      <Announcements />

      {/* About */}
      <About />

      {/* Index */}
      <Index />

      {/* Additional */}
      <Additional />

      {/* Footer */}
      <Footer />

    </div>
  )
}
