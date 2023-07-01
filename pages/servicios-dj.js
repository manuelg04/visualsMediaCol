import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DJServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Servicios de DJ | Latin Services</title>
        <meta name="description" content="Ofrecemos servicios de DJ para todo tipo de eventos en Colombia. Con años de experiencia, proporcionamos sonido, iluminación y animación para crear una experiencia inolvidable." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-400 text-white p-6">
        <h1 className="text-4xl">Servicios de DJ</h1>
        <p className="text-2xl mt-4">Ofrecemos servicios para:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Minitecas</li>
          <li>Grados</li>
          <li>Cumpleaños</li>
          <li>Quinceaños</li>
          <li>Matrimonios</li>
        </ul>
        <p className="text-xl mt-2">Música para toda ocasión. Sonido, Dj, iluminación y animación. Un gran DJ colombiano con varios años de trayectoria.</p>
      </header>

      <main className="flex-grow p-6">
        <h2 className="text-2xl mb-4">Galería:</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded overflow-hidden">
            <Image src="/dj1.jpg" alt="Festival 1" layout="responsive" width={500} height={300} />
          </div>
          <div className="rounded overflow-hidden">
            <Image src="/dj2.jpg" alt="Festival 2" layout="responsive" width={500} height={300} />
          </div>
          {/* Añade más imágenes según sea necesario */}
        </div>
      </main>

      <footer className="bg-blue-400 text-white p-6 text-center">
        <p>© 2023 Latin Services. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
