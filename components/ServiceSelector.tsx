import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

interface ServiceSelectorProps {
  selectedService: string;
  setSelectedService: (service: string) => void;
}

const services = [
  { key: 'copy', label: 'Xerox' },
  { key: 'printing', label: 'Impressão' },
  { key: 'scanning', label: 'Scanner' },
  { key: 'typing', label: 'Digitação' },
  { key: 'resumes', label: 'Currículos' },
  { key: 'contracts', label: 'Contratos' },
  { key: 'plasticization', label: 'Plastificação' },
  { key: 'emailSocialMedia', label: 'E-mail/Redes Sociais' },
  { key: 'bills', label: '2° via Contas/Boletos' },
  { key: 'documents', label: 'Emissão Documentos' },
];

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ selectedService, setSelectedService }) => {
  return (
    <div className="mb-4 w-full flex justify-center">
      <Select 
        label="Selecione um Serviço" 
        placeholder="Escolha o serviço desejado"
        className="w-full max-w-xs"
        onChange={(e) => setSelectedService(e.target.value)}
      >
        {services.map((service) => (
          <SelectItem key={service.key} value={service.key}>
            {service.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default ServiceSelector;
