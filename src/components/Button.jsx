    // import React from 'react'

    // const Button = () => {

    //     const but={
    //         children:"hsdyu",
    //         disabled: false,
    //         onclick,
    //         style:{
    //             backGround:"green",
    //             color: "white",
    //             padding:"10px, 10px, 10px, 10px",
    //             border:"none",
    //         },
    //         type:"button",

    //     }
    //   return (
    //     <button style={{background:`${but.style.backGround}`}}>{but.style.backGround}</button>
    //   )
    // }

    // export default Button

    // I WANTED TO DO IT THE WAY AT THE TOP INITIALLY, BUT AFTER THINKING ABOUT IT FOR A WHILE, ESPECIALLY ABOUT PASSING THE FUNCTION
    // I REALIZED THAT IT WOULDN'T BE DYNAMIC ENOUGH CONSIDERING ITS A BUTTON AND THE FUNCTION IS USUALLY PASSED FROM THE COMPONENT IT IS USED
    // SO I MADE RESEARCH AND CONFIRMED THAT IT WOULD BETTER MAKE SENSE IF IT IS DESCONSTRUCTED AND PASSED AS PROPS FROM THE COMPONENTS IT IS BEING USED.
    //WHEN IT COMES TO STYLING, IF THE CLASSNAME IS MADE DYNAMIC, I FEEL THE STYLES CAN BE ADDED ON THE CSS FILE USING THE CLASSNAME.

    import React, { useState } from "react";
    import "./Button.css";

    const Button = ({
    children,
    onClick,
    classname = "TEXT",
    disabled = false,
    loading,
    setLoading,
    loadingText = "Loading...",
    }) => {
    

    // The loadingText property is optional, a loading icon can be used instead or use a library for loading.
    // I used useState to manage the loading state. So it has to be created in the parent component to be used without encountering errors
    // My parent component currently being App.jsx
    return (
        <button
        className={classname}
        disabled={disabled}
        style={{ background: `${disabled === true ? "red" : ""}` }}
        onClick={onClick}
        >
        {loading ? loadingText : children}
        </button>
    );
    };

    export default Button;
