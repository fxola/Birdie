import { EventEnum } from '@App/types';
import * as React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  height: 30px;
  width: 30%;
  margin: 10px;
`;

interface Props {
  options: Array<{ name: string; value: EventEnum }>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: EventEnum;
}

const Filter = ({ options, onChange, value }: Props) => {
  return (
    <Select value={value} onChange={onChange}>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </Select>
  );
};

export default Filter;
