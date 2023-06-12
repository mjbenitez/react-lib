import"react";import e from"styled-components";e.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${e=>"small"===e.size?"7px 25px 8px":"medium"===e.size?"9px 30px 11px":"14px 30px 16px"};
  color: ${e=>e.primary?"#1b116e":"#ffffff"};
  background-color: ${e=>e.primary?"#6bedb5":"#1b116e"};
  opacity: ${e=>e.disabled?.5:1};
  &:hover {
    background-color: ${e=>e.primary?"#55bd90":"#6bedb5"};
  }
  &:active {
    border: solid 2px #1b116e;
    padding: ${e=>"small"===e.size?"5px 23px 6px":"medium"===e.size?"7px 28px 9px":"12px 28px 14px"};
  }
`,e.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,e.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,e.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,e.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`;
//# sourceMappingURL=index.js.map
