import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const images = [
  '/kevin1.jpg',
  '/kevin2.jpg',
  '/kevin3.jpg',
  '/kevin4.jpg',
  // Añade más imágenes si es necesario
]

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Photography by Visuals Media Col | Latin Services</title>
        <meta name="description" content="Fotografía de alta calidad por Visuals Media Col, servicio ofrecido por Latin Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-400 text-white p-6">
        <h1 className="text-4xl">1. Photography by Visuals Media Col</h1>
        <p className="text-xl mt-2">Ofrecemos servicios de fotografía de alta calidad para todos los eventos y necesidades.</p>
      </header>

      <main className="flex-grow p-6">
        <h2 className="text-2xl mb-4">Galería:</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg h-full">
              <Image src={src} alt={`Foto de trabajo ${index + 1}`} width={1280} height={904} />
            </div>
          ))}
        </div>

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
