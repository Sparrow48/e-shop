import React from 'react'
import { isPhoneNoValid } from '../../utils/index'
// import PhoneInput from 'react-phone-input-2'
import { DEFAULT_COUNTRY_CODE } from '../../utils/constant'
import 'react-phone-input-2/lib/style.css'
import { debounce } from '../../utils/Debounce'
import PI from "react-phone-input-2";

const ReactPhoneInput = PI.default ? PI.default : PI;

const PhoneFormItem = ({ setUsername, setUsernameValidation, className = '' }) => {

    const usernameHandler = (phoneNumber, country) => {
        const { countryCode } = country
        const isValid = isPhoneNoValid({ phoneNumber, countryCode })
        setUsernameValidation(isValid)
        setUsername(phoneNumber)
    };

    const optimism_usernameHandler = debounce(usernameHandler, 500);

    return (
        <div className={className}>
            <ReactPhoneInput
                country={DEFAULT_COUNTRY_CODE}
                onChange={optimism_usernameHandler}
            />
        </div>
    )
}

export default PhoneFormItem