import React, { useState, FC } from 'react';

import { ButtonRate, Content } from './Rate.style';

type Props = {
  callback: (value: number) => void;
};

const Rate: FC<Props> = React.memo(({ callback }) => {
  const [value, setValue] = useState(5);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.currentTarget.value));
  };
  return (
    <>
      <Content>
        <h3>Rate:</h3>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={handleValueChange}
        />
        {value}
        <p>
          <ButtonRate onClick={() => callback(value)}>Apply</ButtonRate>
        </p>
      </Content>
    </>
  );
});

export default Rate;
