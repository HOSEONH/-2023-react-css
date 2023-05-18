import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  color: #83b4b4;
  background-color: #eeeeee;
  margin: 10px 0;
`;

// const StyledButton 이라는 이름으로
// a태그에 color값, background-color값을 이용하여
// 작성하세요
const StyledButton = styled.a`
  color: #ffffff;
  background-color: #29cc8a;
  display: inline-block;
  margin-top: 10px;
  padding: 3px;
`

export default function StyleComp(props) {
  return (
    <div>
      <Title>{props.children}</Title>
      {/* 작성한 버튼 출력 */}
      <StyledButton>버튼</StyledButton>
    </div>
  )
}
