import { ChangeEvent } from "react";
import { ECurrency } from "../types/enum";

interface Props {
  selectedValue: string;
  onChange(e: ChangeEvent<HTMLSelectElement>): void;
}

const Dropdown = ({ selectedValue, onChange }: Props) => (
  <select value={selectedValue} onChange={onChange}>
    <option value={ECurrency.USDT}>USDT</option>
    <option value={ECurrency.INR}>INR</option>
  </select>
);

export default Dropdown;
