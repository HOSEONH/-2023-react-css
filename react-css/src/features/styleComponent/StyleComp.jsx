import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
  color: #000000;
  background-color: #ffffbd;
`;

// const StyledButton 이라는 이름으로
// a태그에 color값, background-color값을 이용하여
// 작성하세요

export default function StyleComp(props) {
  return (
    <div>
      <Title>{props.children}</Title>
      {/* 작성한 버튼 출력 */}
    </div>
  )
}
