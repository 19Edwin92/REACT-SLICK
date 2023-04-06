import React from "react";
// 라이브러리 설치
import Slider from "react-slick";

// CSS 적용을 위한 임포트
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slider2Multiple = () => {
    const settings = {
      dots: true, // 하단에 보이는 점표기 true는 표시, false는 미표시
      infinite: true, // 마지막 사진일 때 다음 사진으로 첫 사진으로 보여주는 무한순회
      speed: 500, // 속도조절
      slidesToShow: 4, // 화면에 보여지는 슬라이더의 수 
      slidesToScroll: 1, // 한번에 넘길 슬라이더이더의 수 
      focusOnSelect: true,
      swipeToSlide: true
    };

    return (
      <div>
        <h2> React-Slick : Slider2Multiple</h2>
        <Slider {...settings}>
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
      </div>
    );
  }

  export default Slider2Multiple;

const StyledDiv = styled.div`
  box-sizing:border-box;
  text-align:center;

  height:200px;
  line-height:200px;


  h3 {
    margin:0;
    display:block;
    width:200px;
    margin:0 auto;
    background-color:orange;

  }
  
`