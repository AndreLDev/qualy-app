'use client'

import { useState } from 'react';
import ServiceSelector from '../components/ServiceSelector';
import ServiceForm from '../components/ServiceForm';

const Home = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [numPages, setNumPages] = useState<number>(0);
  const [isColor, setIsColor] = useState<boolean>(false);
  const [isBound, setIsBound] = useState<boolean>(false);
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleCalculate = () => {
    let cost = 0;

    switch (selectedService) {
      case 'copy':
        const costPerPage = isColor ? 1.50 : 0.75;
        const bindingCost = isBound ? 5 : 0;
        cost = numPages * costPerPage + bindingCost;
        break;
      case 'printing':
        cost = numPages * 1.00 + 2.00;
        break;
      case 'scanning':
        cost = 3.00;
        break;
      case 'typing':
        cost = 10.00;
        break;
      case 'resumes':
        cost = 8.00;
        break;
      case 'contracts':
        cost = 25.00;
        break;
      case 'plasticization':
        cost = 5.00;
        break;
      case 'emailSocialMedia':
        cost = 15.00;
        break;
      case 'bills':
        cost = 3.00;
        break;
      case 'documents':
        cost = 10.00;
        break;
      default:
        cost = 0;
    }

    setTotalCost(cost);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-4 ">
      <h1 className="text-2xl font-bold mb-6 text-orange-600 text-center">Serviços de Papelaria</h1>
      <div className="w-full max-w-md px-4 flex flex-col items-center">
        <ServiceSelector selectedService={selectedService} setSelectedService={setSelectedService} />
        {selectedService && (
          <ServiceForm
            selectedService={selectedService}
            handleCalculate={handleCalculate}
            totalCost={totalCost}
            numPages={numPages}
            setNumPages={setNumPages}
            isColor={isColor}
            setIsColor={setIsColor}
            isBound={isBound}
            setIsBound={setIsBound}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
