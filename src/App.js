import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';


//Estilo del contenedor de la pagina
const contentStyle = {
  margin: 0,
  color: '#000000',
  textAlign: 'center',
};

//Tamaño de el frame a mostrar
const iframeStyle = {
  width: '100%',
  height: '95vh', // Establece la altura al 100% del viewport
  border: 'none',
};

//Lista de todos los reportes a mostrar
const iframeData = [
  {
    title: 'Finanzas',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZjlkIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9',
    id: 'Finanzas1',
  },
  {
    title: 'Finanzas',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZ[…]E2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9&pageName=ReportSection',
    id: 'Finanzas2',
  },
  {
    title: 'Finanzas',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZ[…]U4MjU0MyIsImMiOjJ9&pageName=ReportSectionddd41b5c3b6404f36934',
    id: 'Finanzas3',
  }
];

//Manejo de estados para los reportes

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  const onChange = (current) => {
    setPrevSlide(currentSlide); // Guarda el slide actual como el anterior
    setCurrentSlide(current);
  };

  return (
    <Carousel
      afterChange={onChange}
      autoplay
      autoplaySpeed={80000}
      initialSlide={currentSlide}
    >
      {iframeData.map((item, index) => (
        <div key={item.id}>
          <h3 style={contentStyle}>
            {item.title}
            {currentSlide === index || prevSlide === index ? (
              <iframe
                style={iframeStyle}
                src={item.src}
                allowFullScreen
                title={item.id}
              ></iframe>
            ) : null}
          </h3>
        </div>
      ))}
    </Carousel>
  );
};

export default App;