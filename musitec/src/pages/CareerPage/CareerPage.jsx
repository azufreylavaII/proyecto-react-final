import { Fragment } from 'react';
import React from 'react';
import './CareerPage.css'
import TitleCareer from '../../components/Careers/TitleCareer';
import CareerCards from '../../components/Careers/CareerCards';

function CareerPage (){

    return(
    <>
        <div>
            <TitleCareer />
            <CareerCards />
        </div>
    </>
    );
}

export default CareerPage;