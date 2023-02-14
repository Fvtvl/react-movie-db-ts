import React, { useState, FC } from 'react';
import { ButtonRate } from './Rate.style';

type Props = {
  callback: (value: number) => void;
};

const Rate: FC<Props> = ({ callback }) => {
  const [value, setValue] = useState(5);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={handleValueChange}
      />
      {value}
      <p>
        <ButtonRate onClick={() => callback(value)}>Rate</ButtonRate>
      </p>
    </div>
  );
};

export default Rate;
