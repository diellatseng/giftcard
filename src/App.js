import './App.css'
import Gift from './Gift';
import { useState, useEffect } from 'react';
import ReactCodeInput from 'react-code-input';
import toast, { Toaster } from 'react-hot-toast';

// Inline styles for input
const colorPrimary = 'rgba(89, 97, 223, .3)';
const colorPrimaryText = 'rgb(255, 255, 255)';
const colorError = 'rgba(255, 0, 85, .3)';
const colorErrorText = 'rgb(255, 0, 85)';
const props = {
	inputStyle: {
		color: `${colorPrimaryText}`,
		borderColor: `${colorPrimary}`,
		background: `${colorPrimary}`,
	},
	inputStyleInvalid: {
		color: `${colorErrorText}`,
		borderColor: `${colorError}`,
		backgroundColor: `${colorError}`
	}
}
const PinCode = () => {
	const [isPinCodeValid, setIsPinCodeValid] = useState(undefined);
	const [pinCode, setPinCode] = useState("");
	const [inputStyle, setInputStyle] = useState(true); // Reset style after first pin error
	// PIN
	const CORRECT_PIN_CODE = "ETOILE";
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
			setInputStyle(isPinCodeValid); // set input style (valid/invalid)
			// Error message
			if (isPinCodeValid === false) {
				const messages = [
					"Are you serious?",
					"This won't work.",
					"Please try again.",
					"Wrong.",
					"This is not the right pin.",
					"Something's wrong.",
					"Sorry, your account is locked.\n...Joking.",
				]
				const randomMessage = messages[Math.floor(Math.random() * messages.length)];
				toast.error(randomMessage)
			}
		}
	}, [pinCode]);

	return (
		<div className='App'>
			{isPinCodeValid !== true &&
				<ReactCodeInput
					id="pinCode"
					fields={6}
					type="text"
					className="ReactCodeInput"
					isValid={inputStyle}
					onChange={handlePinChange}
					value={pinCode}
					autoFocus={false}
					forceUppercase
					{...props}
				/>
			}
			{isPinCodeValid && pinCode.length === 6 &&
				<Gift />}
			<Toaster />
		</div>
	);
};

export default PinCode;