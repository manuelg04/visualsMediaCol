/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const animationStyles = useSpring({
    from: { opacity: 0, transform: "translate3d(0,-100%,0)" },
    to: { opacity: 1, transform: "translate3d(0,0,0)" },
    config: { duration: 2000, delay: 500, tension: 280, friction: 120 },
  });

  return (
    <div className={styles.container}>
      {/* Instagram button */}
      <a
        href="https://www.instagram.com/kevinamadoc/" // insert your Instagram URL here
        className="fixed bottom-16 right-4 bg-white text-white p-2 rounded-full shadow-lg flex items-center justify-center"
        style={{ width: "60px", height: "60px" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/iglogo.svg" alt="Instagram" width={32} height={32} />
      </a>
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

      <header className="p-4 md:p-12 text-white text-center md:text-left">
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center md:justify-between">
          <div className="md:w-1/2">
            <Image
              src="/titulovisual.png" // ruta a tu imagen
              alt="Visual Media Col"
              width={800} // ancho de la imagen, debes ajustarlo a tus necesidades
              height={300} // altura de la imagen, debes ajustarlo a tus necesidades
            />
            <p className="mt-4 text-lg md:text-xl font-bold">
              Vive tu propia experiencia dándole valor a quien eres
            </p>
          </div>
        </div>
      </header>

      <main className="p-4 md:p-12 flex-grow">
        <h2 style={{ color: "#E7CEA6" }} className="text-2xl md:text-4xl mb-4">
          Nuestros servicios:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
        <div className="w-full bg-white p-4 rounded shadow-lg mt-4 md:mt-0">
          <div className="w-full bg-white p-4 rounded shadow-lg mt-4 md:mt-0">
            <h2 className="text-2xl md:text-4xl mb-4 mt-12 text-black">
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
                <option value="" selected disabled>
                  ¿Qué te gustaría desarrollar?
                </option>
                <option value="fiesta">Fiesta de 15 años/cumpleaños</option>
                <option value="evento_personal">
                  Fotografía para evento personal
                </option>
                <option value="redes_sociales">
                  Fotografía personal para redes sociales
                </option>
                <option value="negocio">Fotografía para negocio</option>
                <option value="cejas">Diseño de cejas: hojilla/cera</option>
                <option value="maqui_social">Maquillaje social</option>
                <option value="maqui_novia">Maquillaje de novia</option>
                <option value="maqui_15">Maquillaje de 15 años</option>
                <option value="maqui_art">Maquillaje artistico</option>
              </select>
              <textarea
                className="w-full p-2 border rounded text-black"
                placeholder="Observaciones"
              ></textarea>
              <button className="w-full bg-green-500 text-white p-2 rounded">
                Quiero Conocer Precios
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <animated.h2
            style={{ ...animationStyles, color: "#E7CEA6" }}
            className="text-3xl mb-4 font-bold col-span-full"
          >
            Trabajos fotográficos destacados
          </animated.h2>
          <Link className="text-2xl underline col-span-full mb-4" href="/servicios-fotografia"> Ver Portafolio  </Link>
          {["kevin1.jpg", "kevin2.jpg", "kevin3.jpg", "kevin4.jpg"].map(
            (src, index) => (
              <div className={`${styles.card} bg-white shadow-lg rounded`}>
                <Image
                  src={"/" + src} // Asegúrate de que esta ruta corresponda a la de tu imagen
                  alt={`Descripción de la imagen ${index + 1}`}
                  width={500} // Ancho de la imagen
                  height={500} // Altura de la imagen
                  className="object-cover rounded"
                />
                <div className="p-4">
                  <h3 className="font-bold">Titulo de la imagen {index + 1}</h3>
                  <p>Descripción breve de la imagen {index + 1}.</p>
                </div>
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* ...resto de los trabajos de maquillaje destacados... */}
          <div className="col-span-full">
            <animated.h2
              style={{ ...animationStyles, color: "#E7CEA6" }}
              className="text-3xl mb-4 font-bold"
            >
              Trabajos de maquillaje destacados
            </animated.h2>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/maqui1.jpg"
                alt="Descripción de la imagen 1"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/maqui2.jpg"
                alt="Descripción de la imagen 2"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/maqui3.jpg"
                alt="Descripción de la imagen 3"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/maqui4.jpg"
                alt="Descripción de la imagen 4"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </main>
      <footer
        style={{ backgroundColor: "#E7CEA6" }}
        className="p-4 md:p-12 text-center"
      >
        <p>© 2023 Visuals Media Col. Todos los derechos reservados.</p>
        <p>🇺🇸 +1 786-236-1628</p>
  <p>Virginia</p>
      </footer>
    </div>
  );
}
