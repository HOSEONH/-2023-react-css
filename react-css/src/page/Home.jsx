import React from 'react';
import CounterComp from '../features/counter/CounterComp';
import InputForm from '../features/inputform/InputForm';
import StyleComp from '../features/styleComponent/StyleComp';
import StyleButton from '../features/styleComponent/StyleButton';
import MyButton from '../features/styleComponent/MyButton';
import CommonButton from '../features/styleComponent/CommonButton';
import SpecialButton from '../features/styleComponent/SpecialButton';
import MyLink from '../features/styleComponent/MyLink';

export default function Home(){
return (
    <div>
        <MyLink to='/about'>About</MyLink>
        <InputForm />
        <CounterComp />
        <StyleComp>스타일드 컴포넌트</StyleComp>
        <StyleButton color='' backgroundColor='pink' fontsize='3'
            OnClick={(e)=>{
                e.preventDeafault();
                console.log('이벤트');
            }}
        >
        버튼
        </StyleButton>
        <br/>
        <MyButton onClick={()=>{alert("버튼을 눌렀습니다")}}>버튼 확인</MyButton>
        {/* <MyButton onClick={()=>{alert("확인")}}>버튼 확인</MyButton> */}
        <br/>
        <CommonButton color="#ffbda0">버튼 확인</CommonButton>
        <br/>
        <SpecialButton mode='light'>버튼 디자인</SpecialButton>
    </div>
    )
}