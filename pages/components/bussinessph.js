/* eslint-disable react/jsx-key */
// Archivo: pages/components/BusinessPh.js

import Image from 'next/image';

const BusinessPh = () => {
  const photos = new Array(10).fill("").map((_, i) => `b${i+1}.jpg`);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      <h2 className="col-span-full text-3xl font-bold mb-4">
        Galería de Fotografías de Negocios
      </h2>
      {photos.map((src, index) => (
        <div className="card bg-white shadow-lg rounded">
          <Image
            src={"/bussinessPh/" + src}
            alt={`Descripción de la imagen de negocio ${index + 1}`}
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
            className="rounded"
          />
          <div className="p-4">
            <h3 className="font-bold">
              Título de la imagen de negocio {index + 1}
            </h3>
            <p>Descripción breve de la imagen de negocio {index + 1}.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessPh;