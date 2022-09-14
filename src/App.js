import './App.css'
import Gift from './Gift';
import { useState, useEffect } from 'react';
import ReactCodeInput from 'react-code-input';
import toast, { Toaster } from 'react-hot-toast';

const props = {
	inputStyle: {
		color: 'lightskyblue',
		border: '1px solid lightskyblue'
	},
	inputStyleInvalid: {
		color: 'red',
		border: '1px solid red'
	}
}
const CORRECT_PIN_CODE = "ETOILE";

const PinCode = () => {
	const [isPinCodeValid, setIsPinCodeValid] = useState(undefined);
	const [pinCode, setPinCode] = useState("");
	const [inputStyle, setInputStyle] = useState(true); // Reset style after first pin error
	// Update pinCode state on input change
	const handlePinChange = pinCode => {
		setPinCode(pinCode);
		setInputStyle(true);
	};
	// Check pin automatically when user entered 6 digits
	useEffect(() => {
		if (pinCode.length === 6) {
			const isPinCodeValid = pinCode === CORRECT_PIN_CODE; // check pin code
			setIsPinCodeValid(isPinCodeValid); // set valid state
			setInputStyle(isPinCodeValid);
		}
	}, [pinCode]);
	// Error message for invalid pin
	useEffect(() => {
		if (isPinCodeValid === false && pinCode.length === 6) {
			toast.error("This didn't work.")
		}
	}, [isPinCodeValid, pinCode]);

	return (
		<div className='App'>
			{isPinCodeValid !== true &&
				<ReactCodeInput
					id="pinCode"
					fields={6}
					type="text"
					className='App-header'
					isValid={inputStyle}
					onChange={handlePinChange}
					value={pinCode}
					forceUppercase
					{...props}
				/>}
			{isPinCodeValid && pinCode.length === 6 &&
				<Gift />}
			<Toaster />
		</div>
	);
};

export default PinCode;