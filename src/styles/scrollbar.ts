const scrollbar = () => `
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
    background: #666;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(24, 24, 24);
    border-radius: 10px;
  }
`;

export default scrollbar;
