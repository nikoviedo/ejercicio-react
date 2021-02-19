import styled from 'styled-components';

export const CotizatorContent = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(3,67,113);
  background: linear-gradient(180deg, rgba(3,67,113,1) 0%, rgba(6,43,70,1) 100%);
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
`;

export const CotizatorStyled = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background: rgb(3,67,113);
  background: linear-gradient(0deg, rgba(3,67,113,1) 0%, rgba(6,43,70,1) 100%); 
  padding: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CotizatorSlide = styled.div`
  min-height: 5rem;
  display: inline-block;
  width: 100%;

  .rc-slider {
    width: 90%;
    margin: 0 auto;
    .rc-slider-track {
      background: #fff;
    }
    .rc-slider-handle {
      border: none;
    }
    .rc-slider-step,
    .rc-slider-mark {
      display: none;
    }
  }
`;

export const SlideText = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SlideNumber = styled.div`
  position: relative;
  span {
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    left: 1rem;
    top: 2px;
  }
  input {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    width: 150px;
    text-align: center;
    border: 1px solid #fff;
    background: transparent;
    outline: none;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export const SlideTitle = styled.div`
  float: left;
`;

export const SlideSteps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .validate p {
    font-size: 0.7rem;
    background: #7f122e;
    padding: 2px 5px;
    border-radius: 3px;
    margin: 0;
  }
`;

export const FinalShare = styled.div`
  background: #00355d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin: 1.5rem 0 0;
  
  p {
    font-weight: 700;
    font-size: 1rem;
  }

  span {
    font-weight: 700;
    font-size: 2rem;
  }
`;

export const CotizatoFooter = styled.footer`
  display: inline-block;
  width: 100%;
`;
export const GetCredit = styled.div`
  background: #27aa8d;
  width: 70%;
  display: inline-block;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1rem 0;
`;
export const ShareDetails = styled.div`
  background: #0b548b;
  color: #fff;
  width: 23%;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.7rem;
  text-align: center;
  height: 38px;
  float: right;
`;