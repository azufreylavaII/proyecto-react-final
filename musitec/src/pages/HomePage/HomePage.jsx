import React from 'react';
import InicioUs from '../../components/inicio/InicioUs/InicioUs';
import InicioServicesSection from '../../components/inicio/InicioServicesSection/InicioServicesSection';
import InicioBenefits from '../../components/inicio/InicioBenefits/InicioBenefits';

function HomePage() {
  return (
    <div>
      <InicioUs/>
      <InicioServicesSection/>
      <InicioBenefits/>

    </div>
  );
}

export default HomePage;
