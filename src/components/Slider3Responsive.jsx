import React from "react";
// 라이브러리 설치
import Slider from "react-slick";

// CSS 적용을 위한 임포트
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slider3Responsive = () => {
    const settings = {
      dots: true, // 하단에 보이는 점표기 true는 표시, false는 미표시
      infinite: false, // 마지막 사진일 때 다음 사진으로 첫 사진으로 보여주는 무한순회
      speed: 500, // 속도조절
      swipeToSlide: true, // 이미지를 드래그하여 이동시기는 것을 가능하게 하는 속성 
      focusOnSelect: true, // 마지막 요소를 클릭하면, 해당 요서가 가운데 위치하게 함으로 이동효과를 주는 속성
      slidesToShow: 4, // 화면에 보여지는 슬라이더의 수 
      slidesToScroll: 4, // 한번에 넘길 슬라이더이더의 수 
      initialSlide: 0, // 처음 보여질 인덱스를 보여보여준다. 
      responsive: [ // 반응형 에 따른 설정을 하기 위한 부분이다. 
        {
          breakpoint: 1024, // 1024 이상일 때에는 4개의 이미지가 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600, // 600 이상일 때에는 2개의 이미지가 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,  // 480 이상일 때에는 1개의 이미지가 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div>
        <h2> React-Slick : Slider3Responsive</h2>
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
          <StyledDiv>
            <h3>7</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>8</h3>
          </StyledDiv>
        </Slider>
      </div>
    );
  }

  export default Slider3Responsive;

const StyledDiv = styled.div`
  box-sizing:border-box;
  text-align:center;

  height:200px;
  line-height:200px;


  h3 {
    margin:0;
    display:block;
    width:250px;
    margin:0 auto;
    background-color:lightgray;

  }
  
`