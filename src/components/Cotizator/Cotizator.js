import React, { useState } from 'react';
import { 
  CotizatorContent, 
  CotizatorStyled, 
  CotizatorSlide, 
  SlideText, 
  SlideTitle, 
  SlideNumber,
  Title,
  SlideSteps,
  FinalShare,
  CotizatoFooter,
  GetCredit,
  ShareDetails
} from './CotizatoStyles'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Cotizator() {
  const [ totalAmount, setTotalAmount ] = useState(5000);
  const [ term, setTerm ] = useState(3);

  const MyTotalAmountInput = (event) => {
    setTotalAmount(event.target.value);
  };

  const MyTermInput = (event) => {
    setTerm(event.target.value);
  };

  const MyTotalAmount = value => {
    setTotalAmount(value);
  };

  const MyTerm = value => {
    setTerm(value);
  };

  const myAmount  = totalAmount;
  const endAmount = (totalAmount / term).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  return(
    <CotizatorContent>
      <CotizatorStyled> 
        <Title>Simulá tu crédito</Title>
        <CotizatorSlide>
          <SlideText>
            <SlideTitle>MONTO TOTAL</SlideTitle>
            <SlideNumber><span>$</span>
              <input 
                type='number' 
                value={myAmount} 
                onChange={MyTotalAmountInput}
              />
            </SlideNumber>
          </SlideText>
          <Slider
            min={5000}
            max={50000}
            value={totalAmount}
            onChange={MyTotalAmount}
          />
          <SlideSteps>
            <span>$ 5000</span>
            <span className='validate'>
              {myAmount < 5000 || myAmount > 50000 ? (
                  <p>Ingrese un numero valido.</p>
                ) : ('')
              }
            </span>
            <span>$ 50.000</span>
          </SlideSteps>
        </CotizatorSlide>

        <CotizatorSlide>
          <SlideText>
            <SlideTitle>PLAZO</SlideTitle>
            <SlideNumber>
              <input 
                type='number' 
                value={term} 
                onChange={MyTermInput}
              />
            </SlideNumber>
          </SlideText>
          <Slider
            min={3}
            max={24}
            value={term}
            onChange={MyTerm}
          />
          <SlideSteps>
            <span>3</span>
            <span className='validate'>
              {term < 3 || term > 24 ? (
                  <p>Ingrese un numero valido.</p>
                ) : ('')
              }
            </span>
            <span>24</span>
          </SlideSteps>
        </CotizatorSlide>

        <FinalShare>
          <p>CUOTA FIJA POR MES</p>
          <span>$ {endAmount}</span>
        </FinalShare>

        <CotizatoFooter>
          <GetCredit>OBTENE TU CREDITO</GetCredit>
          <ShareDetails>VER DETALLES DE CUOTAS</ShareDetails>
        </CotizatoFooter>
      </CotizatorStyled>
    </CotizatorContent>
  );
}

export default Cotizator;