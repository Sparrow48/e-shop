import React from 'react'
import { isPhoneNoValid } from '../../utils/index'
import PhoneInput from 'react-phone-input-2'
import { DEFAULT_COUNTRY_CODE } from '../../utils/constant'
import 'react-phone-input-2/lib/style.css'
import { debounce } from '../../utils/Debounce'

const PhoneFormItem = ({ setUsername, setUsernameValidation }) => {

    const usernameHandler = (phoneNumber, country) => {
        const { countryCode } = country
        const isValid = isPhoneNoValid({ phoneNumber, countryCode })
        setUsernameValidation(isValid)
        setUsername(phoneNumber)
    };

    const optimism_usernameHandler = debounce(usernameHandler, 500);

    return (
        <>
            <PhoneInput
                country={DEFAULT_COUNTRY_CODE}
                onChange={optimism_usernameHandler}
            />
        </>
    )
}

export default PhoneFormItem