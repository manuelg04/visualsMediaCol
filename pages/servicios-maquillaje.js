import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/maqui1.jpg',
  '/maqui2.jpg',
  '/maqui3.jpg',
  '/maqui4.jpg',
  // Agrega más imágenes si es necesario
];

export default function ServiciosMaquillaje() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de Maquillaje | Latin Services</title>
        <meta name="description" content="Servicios profesionales de maquillaje por Latin Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-400 text-white p-6">
        <h1 className="text-4xl">Servicios de Maquillaje</h1>
        <p className="text-xl mt-2">
          Como maquilladora profesional hago realidad la mejor versión de tu belleza para cualquier ocasión especial,
          dándole vida a personajes irrealistas por medio del maquillaje artístico.
        </p>
      </header>

      <main className="flex-grow p-6">
        <h2 className="text-2xl mb-4">Ejemplos de nuestro trabajo:</h2>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded shadow-lg">
              <Image src={src} alt={`Ejemplo de trabajo ${index + 1}`} layout="responsive" width={1280} height={904} />
            </div>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl mb-4">Acerca de nuestro servicio de maquillaje:</h2>
          <p>
            Como maquilladora profesional, mi objetivo es resaltar tu belleza natural y crear looks únicos y
            personalizados para cada ocasión. Ya sea que necesites un maquillaje para una boda, una sesión de fotos o
            cualquier evento especial, estaré encantada de ayudarte a lucir radiante y sentirte segura de ti misma.
            Además, también me apasiona el maquillaje artístico, donde puedo dar vida a personajes y crear efectos
            especiales sorprendentes. ¡Permíteme ser parte de tu transformación!
          </p>
        </section>
      </main>

      <footer className="bg-blue-400 text-white p-6 text-center">
        <Link href="/">
          <button className="inline-block bg-white text-blue-400 p-2 rounded">Volver al inicio</button>
        </Link>
      </footer>
    </div>
  );
}
