import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PersonalPh from './components/personalph'
import WeddingPh from './components/bussinessph'
import BusinessPh from './components/bussinessph'
import EngagementPh from './components/engagementph'
import ModellingPh from './components/modellingph'
import EventsPh from './components/eventsph'

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Photography by Visuals Media Col | Latin Services</title>
        <meta name="description" content="Fotografía de alta calidad por Visuals Media Col, servicio ofrecido por Latin Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-400 text-white p-6">
        <h1 className="text-4xl mb-2 text-center md:text-left">Photography by Visuals Media Col</h1>
        <nav className="mb-4">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
            <li><Link href="#personal" className="text-xl">Personal Ph</Link></li>
            <li><Link href="#wedding" className="text-xl">Wedding Ph</Link></li>
            <li><Link href="#bussiness" className="text-xl">Business Ph</Link></li>
            <li><Link href="#engagement" className="text-xl">Engagement Ph</Link></li>
            <li><Link href="#modelling" className="text-xl">Modelling Ph</Link></li>
            <li><Link href="#events" className="text-xl">Events Ph</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow p-6 md:px-16">
        <section id="personal">
          <PersonalPh />    
        </section>
        <section id="wedding">
          <WeddingPh />
        </section>
        <section id="business">
          <BusinessPh />
        </section>
        <section id="engagement">
          <EngagementPh />
        </section>
        <section id="modelling">
          <ModellingPh />
        </section>
        <section id="events">
          <EventsPh />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Acerca de nuestro servicio de fotografía:</h2>
          <p>Como fotógrafo realizo las mejores tomas en los momentos que más te gustaría recordar, un evento, un estudio, incluso para tu marca personal o empresa, convirtiéndolo en fotografías llenas de expresiones y emociones.</p>
        </section>
      </main>

      <footer className="bg-blue-400 text-white p-6 text-center">
        <Link href="/">
          <button className="inline-block bg-white text-blue-400 p-2 rounded">Volver al inicio</button>
        </Link>
      </footer>
    </div>
  )
}
