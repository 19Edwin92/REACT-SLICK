import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css'; // yarn add @fortawesome/fontawesome-free
// 하라 그랬다가 말럤다가.. GPT는 거짓말쟁이 

const Slider5Syncing2 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const settings1 = {
    asNavFor: nav2,
    ref: slider => (slider1Ref.current = slider)
  };

  const Indexhandler = (oldIndex, newIndex) => {
    setCurrentSlideIndex(newIndex+1)
  }

  const settings2 = {
    className:"slider2",
    asNavFor: nav1,
    ref: slider => (slider2Ref.current = slider),
    slidesToShow: 4, // 한번에 보여질 슬라이더를 조절하는 속성 
    swipeToSlide: true, // 이미지를 드래그하여 이동시기는 것을 가능하게 하는 속성 
    focusOnSelect: true, // 마지막 요소를 클릭하면, 해당 요서가 가운데 위치하게 함으로 이동효과를 주는 속성
    autoplay: true, // 자동으로 슬라이더가 동작하게 하는 속성
    autoplaySpeed: 2000, // 자동슬라이더의 속도를 조절하는 속성
    // dots: true, // 하단에 도트를 보여주는 속성 
    // prevArrow: <Button className="slick-arrow slick-prev"/>,
    // nextArrow: <Button className="slick-arrow slick-next"/>,
    beforeChange: Indexhandler
  };

  return (
    <SliderDiv>
      <h2>Slider Syncing (AsNavFor)</h2>
      <h4>First Slider</h4>
      <Slider {...settings1}>
        <StyledDiv1>
          <h3>1</h3>
        </StyledDiv1>
        <StyledDiv1>
          <h3>2</h3>
        </StyledDiv1>
        <StyledDiv1>
          <h3>3</h3>
        </StyledDiv1>
        <StyledDiv1>
          <h3>4</h3>
        </StyledDiv1>
        <StyledDiv1>
          <h3>5</h3>
        </StyledDiv1>
        <StyledDiv1>
          <h3>6</h3>
        </StyledDiv1>
      </Slider>
      <Slider {...settings2}>
        <StyledDiv>
          <h3>1</h3>
        </StyledDiv>
        <StyledDiv>
          <h3>2</h3>
        </StyledDiv>
        <StyledDiv>
          <h3>3</h3>
        </StyledDiv>
        <StyledDiv>
          <h3>4</h3>
        </StyledDiv>
        <StyledDiv>
          <h3>5</h3>
        </StyledDiv>
        <StyledDiv>
          <h3>6</h3>
        </StyledDiv>
      </Slider>
      <div
        style={{
          position: "absolute",
          backgroundColor: "lightgray",
          borderRadius: "20px",
          width: "50px",
          height: "20px",
          textAlign: "center",
          top: "60px",
          right: "15px",
        }}
      >
        {currentSlideIndex}/6
      </div>
      <br />
      <br />
      <br />
      <br />
    </SliderDiv>
  );
};

export default Slider5Syncing2;

const SliderDiv = styled.div`
  position:relative;
  height:auto;

  .slider2 {
    position:absolute;
    top:90px;
    right:0;
    width: 450px;
    height: 100px;
  }
`

const StyledDiv1 = styled.div`
  box-sizing:border-box;
  text-align:center;
  height:500px;


  h3 {
    margin:0;
    display:block;
    width:400px;
    height:500px;
    line-height:400px;
    margin:0 auto;
    background-color:skyblue;
    color:white;
  }
`
const StyledDiv = styled.div`
  box-sizing:border-box;
  height:150px;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    display:block;
    width:80px;
    height:100px;
    line-height:100px;
    margin:0 auto;
    background-color:lightgreen;
    text-align:center;
    color:white;
  }
`

const Button = styled.button`
  &.slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    border: none;
    background: transparent;
    font-size: 0;
    cursor: pointer;
    outline: none;
    width: 40px;
    height: 40px;
    &:before {
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 24px;
      color: #000;
    }
  }
  
  &.slick-prev {
    left: 0;
    &:before {
      /* content: {(<i className="fa fa-angle-left"></i>)} */
      content:"\\f104"
    }
  }
  
  &.slick-next {
    right: 0;
    &:before {
      /* content: {(<i className="fa fa-angle-right"></i>)}; */
      content:"\\f105"
    }
  }
`;
