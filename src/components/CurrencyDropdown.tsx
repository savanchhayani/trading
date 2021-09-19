import { Select } from "antd";
import { ECurrency } from "../types/enum";
import styled from "styled-components";

const { Option } = Select;

interface Props {
  selectedValue: string;
  onChange(value: string): void;
}

const StyledSelectContainer = styled.div`
  align-self: flex-end;
`;

const CurrencyDropdown = ({ selectedValue, onChange }: Props) => {
  return (
    <StyledSelectContainer>
      <Select
        defaultValue={selectedValue}
        style={{ width: 120 }}
        onChange={onChange}
      >
        <Option value={ECurrency.USDT}>USDT</Option>
        <Option value={ECurrency.INR}>INR</Option>
      </Select>
    </StyledSelectContainer>
  );
};

export default CurrencyDropdown;
