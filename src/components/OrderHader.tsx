import styled from "styled-components";
import {orderColumns} from "./styles";

const StyledHeader = styled.div`
  display: flex;
  column-gap: 15px;
  font-weight: bold;
  color: #666;
  
  ${orderColumns};
`;

const Header = () => (
    <StyledHeader>
        <span className="name">Name</span>
        <span className="qty">Qty</span>
        <span className="avg-price">Average Price</span>
        <span className="ltp">LTP</span>
        <span className="total-invested">Total Invested</span>
        <span className="current-value">Total Current Value</span>
        <span className="pro-in-per">Profit in percentage</span>
    </StyledHeader>
);

export default Header;
