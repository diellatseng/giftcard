import './App.css';
import Gift from './Gift';
import { useState, useEffect } from 'react';
import ReactCodeInput from 'react-code-input';
import toast, { Toaster } from 'react-hot-toast';

const props = {
  inputStyle: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '26px',
    height: '26px',
    padding: '26px',
    backgroundColor: 'white',
    color: 'lightskyblue',
    border: '1px solid lightskyblue'
  },
  inputStyleInvalid: {
    fontFamily: 'monospace',
    margin: '4px',
    MozAppearance: 'textfield',
    width: '15px',
    borderRadius: '3px',
    fontSize: '26px',
    height: '26px',
    padding: '26px',
    backgroundColor: 'white',
    color: 'red',
    border: '1px solid red'
  }
}
const CORRECT_PIN_CODE = "ETOILE";

const PinCode = () => {
  const [isPinCodeValid, setIsPinCodeValid] = useState(undefined);
  const [pinCode, setPinCode] = useState("");
  // Update pinCode state on input change
  const handlePinChange = pinCode => {
    setPinCode(pinCode);
  };
  // Check pin automatically when user entered 6 digits
  useEffect(() => {
    if (pinCode.length === 6) {
      const isPinCodeValid = pinCode === CORRECT_PIN_CODE; // check pin code
      setIsPinCodeValid(isPinCodeValid); // set valid state
    }
  }, [pinCode]);
  // Error message for invalid pin
  useEffect(() => {
    if (isPinCodeValid === false) {
      toast.error("This didn't work.")
    }
  }, [isPinCodeValid]);

  return (
    <>
      <ReactCodeInput
        id="pinCode"
        type="text"
        isValid={isPinCodeValid}
        fields={6}
        onChange={handlePinChange}
        value={pinCode}
        forceUppercase
        {...props}
      />
      <Toaster />
      <label>PinCode from state: {pinCode}</label>
      {isPinCodeValid && pinCode.length === 6 && <Gift />}

    </>
  );
};

export default PinCode;