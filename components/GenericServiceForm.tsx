import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";

interface GenericServiceFormProps {
  handleCalculate: () => void;
  totalCost: number;
}

const GenericServiceForm: React.FC<GenericServiceFormProps> = ({ handleCalculate, totalCost }) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="mb-4">
      <Input
        type="number"
        label="Quantidade"
        placeholder="Digite a quantidade"
        variant='bordered'
        id="quantity"
        value={quantity.toString()}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
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
};

export default GenericServiceForm;
