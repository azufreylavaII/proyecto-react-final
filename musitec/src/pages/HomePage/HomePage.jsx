import React from 'react';
import InicioUs from '../../components/inicio/InicioUs/InicioUs';
import InicioServicesSection from '../../components/inicio/InicioServicesSection/InicioServicesSection';
import InicioBenefits from '../../components/inicio/InicioBenefits/InicioBenefits';
import InicioData from '../../components/inicio/InicioData/InicioData';

function HomePage() {
  return (
    <div>
      <InicioUs/>
      <InicioServicesSection/>
      <InicioBenefits/>
      <InicioData/>

    </div>
  );
}

export default HomePage;
