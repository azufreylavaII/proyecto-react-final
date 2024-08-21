import { Fragment } from 'react';
import React from 'react';
import './CareerPage.css';
import TitleCareer from '../../components/Careers/TitleCareer';
import CareerCards from '../../components/Careers/CareerCards';
import SliderCareer from '../../components/Careers/SliderCareer';

function CareerPage (){

    return(
    <>
        <div>
            <TitleCareer />
            <CareerCards />
            <SliderCareer />
        </div>
    </>
    );
}

export default CareerPage;