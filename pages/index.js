import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const animationStyles = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0,0)' },
    config: { duration: 2000, delay: 500, tension: 280, friction: 120 },
  });

  return (
    <div className={styles.container}>
      {/* Añadido botón de Whatsapp */}
      <a
        href="https://wa.me/7862361628 "
        className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg flex items-center justify-center"
        style={{ width: "60px", height: "60px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/wpbutton.png" alt="WhatsApp" width={32} height={32} />
      </a>
      <Head>
        <title>Visuals Media Col - Fotografía y Maquillaje Profesional </title>
        <meta
          name="description"
          content="Bienvenido a Visuals Media Col, donde encontrarás fotografía y maquillaje profesional para tus eventos y momentos especiales."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" text-white p-6 flex flex-col md:flex-row">
  <div className="md:w-1/2">
    <div className="w-full">
      <h1 className="text-4xl">Bienvenido a Visual Media Col!</h1>
      <p className="text-4xl mt-4 font-bold">
      Vive tu propia experiencia dándole valor a quien eres 
      </p>
    </div>
    <main className="flex-grow p-6">
        <h2 className="text-2xl mb-4">Nuestros servicios:</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Ejemplo de tarjeta de servicio */}
          <div className="flex bg-white p-4 rounded shadow-lg text-black">
            <div className="w-full p-4">
              <h3 className="text-lg font-semibold mb-2">
                1. Fotografía por Visuals Media Col
              </h3>
              <p>
                Como fotógrafo realizo las mejores tomas en los momentos que más
                te gustaría recordar, ya sea un evento, un estudio, o incluso
                para tu marca personal o empresa, convirtiéndolo en fotografías
                llenas de expresiones y emociones.
              </p>
              <Link href="/servicios-fotografia">
                <button className="mt-4 inline-block bg-blue-400 text-white p-2 rounded">
                  Obtener más Información
                </button>
              </Link>
            </div>
          </div>
          {/* ...otras tarjetas de servicio... */}
        </div>
        {/* ...resto del código... */}
      </main>
      <div className="grid grid-cols-2 gap-4">
      <div className="col-span-full">
    <animated.h2 style={animationStyles} className="text-3xl mb-4 font-bold text-white">
      Trabajos fotográficos destacados
    </animated.h2>
  </div>
  <Image
    src="/kevin1.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 1"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/kevin2.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 2"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/kevin3.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 3"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/kevin4.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 4"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
</div>
<div className="grid grid-cols-2 gap-4">
      <div className="col-span-full">
      <animated.h2 style={animationStyles} className="text-3xl mb-4 font-bold text-white">
      Trabajos de maquillaje destacados
    </animated.h2>
  </div>
  <Image
    src="/maqui1.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 1"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/maqui2.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 2"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/maqui3.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 3"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
  <Image
    src="/maqui4.jpg" // Asegúrate de que esta ruta corresponda a la de tu imagen
    alt="Descripción de la imagen 4"
    width={500} // Ancho de la imagen
    height={500} // Altura de la imagen
    className="object-cover"
  />
</div>
<div className="w-full bg-white p-4 rounded shadow-lg mt-4 md:mt-0">
  <h2 className="text-2xl mb-4 text-black">
    Contáctanos y recibe más información
  </h2>
  <form className="space-y-4">
    <input
      className="w-full p-2 border rounded text-black"
      type="text"
      placeholder="Nombres"
    />
    <input
      className="w-full p-2 border rounded text-black"
      type="email"
      placeholder="Correo electrónico"
    />
    <input
      className="w-full p-2 border rounded text-black"
      type="text"
      placeholder="Código Postal"
    />
    <input
      className="w-full p-2 border rounded text-black"
      type="tel"
      placeholder="Teléfono"
    />
    <select
      className="w-full p-2 border rounded text-black"
      placeholder="¿Qué te gustaría desarrollar?"
    >
      <option value="" selected disabled>¿Qué te gustaría desarrollar?</option>
      <option value="fiesta">Fiesta de 15 años/cumpleaños</option>
      <option value="evento_personal">Fotografía para evento personal</option>
      <option value="redes_sociales">Fotografía personal para redes sociales</option>
      <option value="negocio">Fotografía para negocio</option>
    </select>
    <textarea
      className="w-full p-2 border rounded text-black"
      placeholder="Observaciones"
    ></textarea>
    <button className="w-full bg-green-500 text-white p-2 rounded">
      Enviar
    </button>
  </form>
</div>

  </div>
  
</header>

      <footer className=" text-white p-6 text-center">
        <p>© 2023 Visuals Media Col. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
