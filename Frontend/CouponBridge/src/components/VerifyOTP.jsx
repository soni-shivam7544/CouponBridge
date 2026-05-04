import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Button from '@mui/material/Button';
import { useRef, useState } from 'react';
import './Popup.css';

import { usePopup } from '../hooks/usePopup';
import axios from 'axios';
import { useAlert } from '../hooks/useAlert';
import { useEffect } from 'react';

const VerifyOTP = ( { onCancel, onContinue } ) => {
    const {popup} = usePopup();
    const {showAlert} = useAlert();

    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        // Allow only digits
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to next input
        if (value && index < 3) {
        inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        // Move back on delete
        if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputsRef.current[index - 1].focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        let receivedOTP = '';
        otp.forEach(num => receivedOTP = receivedOTP + `${num}`);

        console.log(receivedOTP);
        console.log(popup.data.email);

        axios.post('http://localhost:5050/cb/v1/api/otp-verify',{
            email: popup.data.email,
            otp: receivedOTP
        }).then( res => {
            console.log(res);
            if(res.data.data === true){
                onContinue();
                showAlert({
                    type: 'success',
                    message: res.data.message
                });
            }
        }).catch(err => {
            console.log(err.response);
            showAlert({
                type: 'error',
                message: err.response.data.message
            })
        })
    }
    return(
        <div className='popup-overlay'>
            <form className="popup-content" style={{width:'50%', padding: '2rem 2.5rem'}} onSubmit={handleVerify}>
                <TaskAltIcon sx={{fontSize:'4rem', color: 'var(--color-success)', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '50%'}}/>
                <p className='lg-heading' style={{color:'var(--color-success)', margin: '0.5rem 0rem'}}>OTP Sent!</p>
                <p className='sub-heading'>Verify your email. The OTP is sent to this email.</p>

                <div style={{ display: "flex", gap: "10px", margin: '1.5rem 0rem'}}>
                    {otp.map((digit, index) => (
                        <input
                        key={index}
                        type="text"
                        value={digit}
                        maxLength={1}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        style={{
                            width: "40px",
                            height: "50px",
                            textAlign: "center",
                            fontSize: "20px",
                            padding: '0.5rem',
                            borderRadius: '1rem'
                        }}
                        required
                        />
                    ))}
                </div>

                <div className="popup-action" style={{margin: '1.5rem 0rem 0rem'}}>
                    <Button variant="contained" sx={{width: '70%', borderRadius: '1rem', backgroundColor:'var(--color-primary)', ":hover":{backgroundColor:'var(--color-primary-hover)'}}} type='submit'>Verify</Button>
                </div>
            </form>
        </div>
    );
}

export default VerifyOTP;