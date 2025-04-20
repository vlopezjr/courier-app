import React from 'react';
import When from './When';

// import { RotatingLines } from 'react-loader-spinner';
// import AnimatedCheckMark from './AnimatedCheckMark';

 const FormButton = ({ 
    disable, 
    disableClass,
    isSubmitting, 
    isSubmittingText, 
    submittedText, 
    text, 
    buttonClass,
    onClick,
    type }) =>{
    return (
      <button 
        type={type ?? "submit"}
        className="form-button"
        disabled={isSubmitting || disable}
        onClick={onClick}
        >
        <When prop={isSubmitting && !submittedText}>
          {/* <RotatingLines
            strokeColor="white"
            strokeWidth="3"
            animationDuration="0.75"
            width="18"
            visible={true}
            /> */}
            <span style={{marginLeft: "4px"}}>{isSubmittingText}</span>
        </When>
        <When prop={submittedText}>
          {/* <AnimatedCheckMark/> */}
          <span style={{marginLeft:"4px"}}>{submittedText}</span>
        </When>
        <When prop={!isSubmitting && !submittedText}>{text}</When>
      </button>
    )
  }

export default FormButton;
