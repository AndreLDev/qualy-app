import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";

interface GenericServiceFormProps {
  handleCalculate: () => void;
  totalCost: number;
}

const GenericServiceForm: React.FC<GenericServiceFormProps> = ({ handleCalculate, totalCost }) => {
  const [quantity, setQuantity] = useState<number>(1);
  handleCalculate();
  return (
    <div className="w-full max-w-md px-4 flex flex-col items-center">
      <Input
        type="number"
        label="Quantidade"
        placeholder="Digite a quantidade"
        variant='bordered'
        className='w-full max-w-xs'
        id="quantity"
        value={quantity.toString()}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <div className="w-full max-w-xs mt-4 bg-white p-4 rounded shadow-md text-center">
        <h2 className="text-xl font-bold text-orange-600">Custo Total: R$ {(totalCost * quantity).toFixed(2) == "NaN" ? "0.00" : (totalCost * quantity).toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default GenericServiceForm;
