import { ChangeEvent } from "react";

interface Props {
  selectedValue: string;
  onChange(e: ChangeEvent<HTMLSelectElement>): void;
}

const Dropdown = ({ selectedValue, onChange }: any) => (
  <select value={selectedValue} onChange={onChange}>
    <option value="usdt">USDT</option>
    <option value="inr">INR</option>
  </select>
);

export default Dropdown;
