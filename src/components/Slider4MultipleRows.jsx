import React from "react";
// 라이브러리 설치
import Slider from "react-slick";

// CSS 적용을 위한 임포트
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Slider4MultipleRows = () => {
    const settings = {
      dots:true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2,
      swipeToSlide: true, // 이미지를 드래그하여 이동시기는 것을 가능하게 하는 속성 
      focusOnSelect: true, // 마지막 요소를 클릭하면, 해당 요서가 가운데 위치하게 함으로 이동효과를 주는 속성
    };

    return (
      <div>
        <h2> React-Slick : Slider4MultipleRows</h2>
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
          <StyledDiv>
            <h3>9</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>10</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>11</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>12</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>13</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>14</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>15</h3>
          </StyledDiv>
          <StyledDiv>
            <h3>16</h3>
          </StyledDiv>
        </Slider>
      </div>
    );
  }

  export default Slider4MultipleRows;

const StyledDiv = styled.div`
  box-sizing:border-box;
  text-align:center;
  height:200px;


  h3 {
    margin:0;
    display:block;
    width:100px;
    height:150px;
    line-height:150px;
    margin:0 auto;
    background-color:black;
    color:white;
  }
`
