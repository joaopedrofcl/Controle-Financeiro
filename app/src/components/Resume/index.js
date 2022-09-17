import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles"
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
  } from "react-icons/fa";

const Resume = () =>{
    return(
    <C.Conteiner>
        <ResumeItem  title="Entradas"
        Icon={FaRegArrowAltCircleUp}/>
        <ResumeItem title="Saídas"
        Icon={FaRegArrowAltCircleDown}/>
        <ResumeItem title="Total" Icon={FaDollarSign}/>
        </C.Conteiner>
    )
}

export default Resume;