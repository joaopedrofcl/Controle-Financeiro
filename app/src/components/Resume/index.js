import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles"
const Resume = () =>{
    return(
    <C.Conteiner>
        <ResumeItem />
        <ResumeItem />
        <ResumeItem />
    </C.Conteiner>
    )
}

export default Resume;