import React, { useState} from 'react';
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
    title: 'Facturación',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZjlkIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9&pageName=ReportSection0d8cc24f7b17273f9f92',
    id: 'Facturacion1',
  },
  {
    title: 'Facturación',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZjlkIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9&pageName=ReportSection',
    id: 'Facturacion2',
  },
  {
    title: 'Facturación',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiMjE3OGZmMDMtNTU0Zi00OGU5LWJhYjYtMjY5OGU2MmUwZjlkIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9&pageName=ReportSectionddd41b5c3b6404f36934',
    id: 'Facturacion3',
  },
  {
    title: 'Cuentas por Pagar',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiOTRkMWQ3OTItYjBiOC00MmMxLWJkYjQtZTlmYThhMzM2ZDRmIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9',
    id: 'CxP1',
  },
  {
    title: 'Cuentas por Cobrar',
    src: 'https://app.powerbi.com/view?r=eyJrIjoiOTNlNTY0ZmUtN2UxZi00MmI2LTk0OGMtMDYxYmQ3MjU1MDQxIiwidCI6Ijc2NTRiNjhkLTBkMmQtNGE2MC05NjAxLTVlMDVmOGU4MjU0MyIsImMiOjJ9',
    id: 'CxC1',
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