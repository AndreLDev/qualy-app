import React from 'react';
import CopyForm from './CopyForm';
import GenericServiceForm from './GenericServiceForm';

interface ServiceFormProps {
  selectedService: string;
  handleCalculate: () => void;
  totalCost: number;
  // props específicos para CopyForm
  numPages: number;
  setNumPages: (num: number) => void;
  isColor: boolean;
  setIsColor: (isColor: boolean) => void;
  isBound: boolean;
  setIsBound: (isBound: boolean) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = (props) => {
  const { selectedService } = props;

  switch (selectedService) {
    case 'copy':
      return <CopyForm {...props} />;
    case 'printing':
    case 'scanning':
    case 'typing':
    case 'resumes':
    case 'contracts':
    case 'plasticization':
    case 'emailSocialMedia':
    case 'bills':
    case 'documents':
      return <GenericServiceForm {...props} />;
    default:
      return null;
  }
};

export default ServiceForm;
