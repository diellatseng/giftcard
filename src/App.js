import './App.css'
import Gift from './Gift';
import { useState, useEffect } from 'react';
import ReactCodeInput from 'react-code-input';
import toast, { Toaster } from 'react-hot-toast';

// Inline styles for input
const colorPrimary = 'rgb(168, 21, 168)';
const colorPrimaryText = 'rgb(255, 255, 255)';
const colorError = 'rgba(255, 0, 85, .3)';
const colorErrorText = 'rgb(255, 0, 85)';
const props = {
	inputStyle: {
		color: `${colorPrimaryText}`,
		border: `2px solid ${colorPrimary}`,
		backgroundColor: `${colorPrimary}`
	},
	inputStyleInvalid: {
		color: `${colorErrorText}`,
		border: `2px solid ${colorError}`,
		backgroundColor: `${colorError}`
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
		const messages = [
			"Are you serious?",
			"This won't work.",
			"Want to try again?",
			"Wrong."
		]
		const randomMessage = messages[Math.floor(Math.random() * messages.length)];
		if (isPinCodeValid === false && pinCode.length === 6) {  // !!!! passing through this func before isPinCodeValid is assigned with new value
			toast.error(randomMessage)
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