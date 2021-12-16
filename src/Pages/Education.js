import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";
import BankSystem from "../Components/education/BankSystem";
import PersonalFinance from "../Components/education/PersonalFinance";
import Saving from "../Components/education/Saving";
import Loan from "../Components/education/Loan";
import BankSystemImg from "../image/banking-system.png"
import PersonalFinanceImg from "../image/personal-finance.png"
import SavingImg from "../image/saving.png"
import LoanImg from "../image/loan.png"
import InvestmentImg from "../image/investment.png"
import InsuranceImg from "../image/insurance.png"

function Education() {
  const [link, setLink] = useState();

  
  return (
    <Container>
      <Navbar />
      <div className={`mt-20 ${link ? `hidden` : `block`}`}>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("mongo-ba-bank-sanhuugiin-system");
            }}
          >
            <div className="h-20 w-20  mx-auto">
              <img src={BankSystemImg}/>
            </div>
            <div className='text-lg  font-semibold'>
              Мөнгө ба Банк <br /> санхүүгийн систем
            </div>
          </div>

          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("huwiin-sanhuugee-udirdah");
            }}
          >
            <div className="h-20 w-20  mx-auto">
            <img src={PersonalFinanceImg}/>
            </div>
            <div className='text-lg  font-semibold'>
              Хувийн санхүүгээ <br /> удирдах
            </div>
          </div>

          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("hadgalamj");
            }}
          >
            <div className="h-20 w-20  mx-auto">
            <img src={SavingImg}/>
            </div>
            <div className='text-lg  font-semibold'>Хадгаламж</div>
          </div>

          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("zeel");
            }}
          >
            <div className="h-20 w-20  mx-auto">
            <img src={LoanImg}/>
            </div>
            <div className='text-lg  font-semibold'>Зээл</div>
          </div>

          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("horongo-oruulalt");
            }}
          >
            <div className="h-20 w-20  mx-auto"> 
            <img src={InvestmentImg}/></div>
            <div className='text-lg  font-semibold'>Хөрөнгө оруулалт</div>
          </div>

          <div
            className="mx-auto my-4 w-full text-center border  shadow-xl py-8 cursor-pointer transform duration-300 text-primary-dark hover:bg-primary-blue hover:text-primary-white"
            onClick={() => {
              setLink("daatgal");
            }}
          >
            <div className="h-20 w-20  mx-auto">
            <img src={InsuranceImg}/>
            </div>
            <div className='text-lg  font-semibold'>Даатгал</div>
          </div>
        </div>
      </div>
      {link === "mongo-ba-bank-sanhuugiin-system" && (
        <div  className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
            }}  
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <BankSystem />
          <div>
            
          </div>
        </div>
      )}
      {link === "huwiin-sanhuugee-udirdah" && (
        <div className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
              
            }}
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
        <PersonalFinance/>
        </div>
      )}
      {link === "hadgalamj" && (
        <div className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <div><Saving /></div>
        </div>
      )}
      {link === "zeel" && (
        <div className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <div>
            <Loan/>
          </div>
        </div>
      )}
      {link === "horongo-oruulalt" && (
        <div className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <div>horongo-oruulalt</div>
        </div>
      )}
      {link === "daatgal" && (
        <div className="block md:flex md:justify-between">
          <div
            onClick={() => {
              setLink("");
            }}
            className="mr-8 cursor-pointer "
          >
            Буцах
          </div>
          <div>daatgal</div>
        </div>
      )}
    </Container>
  );
}

export default Education;
