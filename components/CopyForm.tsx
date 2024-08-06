import React from 'react';
import { Button, Checkbox, Input, Tooltip } from "@nextui-org/react";

interface CopyFormProps {
  numPages: number;
  setNumPages: (num: number) => void;
  isColor: boolean;
  setIsColor: (isColor: boolean) => void;
  isBound: boolean;
  setIsBound: (isBound: boolean) => void;
  handleCalculate: () => void;
  totalCost: number;
}

const CopyForm: React.FC<CopyFormProps> = ({ numPages, setNumPages, isColor, setIsColor, isBound, setIsBound, handleCalculate, totalCost }) => (
  <div className="mb-4">
    <Tooltip
      placement='top-start'
      offset={28}
      content={
        <div className="px-1 py-2">
          <div className="text-small font-bold">Número de Páginas</div>
          <div className="text-tiny">Prencha o número de páginas para a</div>
        </div>
      }
    >
      <Input
        type="number"
        label="Número de Páginas"
        placeholder="Digite o número de paginas"
        variant='bordered'
        id="numPages"
        value={numPages.toString()}
        onChange={(e) => setNumPages(parseInt(e.target.value))}
      />
    </Tooltip>

    <Checkbox size="md"
      id="isColor"
      checked={isColor}
      onChange={(e) => setIsColor(e.target.checked)}
      className="mr-2 leading-tight block text-sm  mb-2 mt-4"
    >Cópias Coloridas</Checkbox>

    <Checkbox size="md"
      id="isBound"
      checked={isBound}
      onChange={(e) => setIsBound(e.target.checked)}
      className="mr-2 leading-tight block text-sm  mb-2 mt-4"
    >Encadernação</Checkbox>

    <Button 
      color="primary"
      onClick={handleCalculate}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-4">
      Calcular
    </Button>

    <div className="mt-4 bg-white p-4 rounded shadow-md text-center">
      <h2 className="text-xl font-bold text-orange-600">Custo Total: R$ {totalCost.toFixed(2)}</h2>
    </div>
  </div>
);

export default CopyForm;
