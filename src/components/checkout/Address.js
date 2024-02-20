import React from 'react'
import { useTranslation } from 'react-i18next';


export default function Address({ updateAddress, address }) {
    const { t } = useTranslation();

    return (
        <div className='address'>
            <form >
                <label>{t('checkout.name')}
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        value={address.name || ""}
                        onChange={updateAddress} />
                </label>
                <label>{t('checkout.surname')}
                    <input
                        type="text"
                        name="surname"
                        value={address.surname || ""}
                        onChange={updateAddress} />
                </label>
                <label className='item3'>{t('checkout.email')}
                    <br></br>
                    <input
                        type="email"
                        name="email"
                        value={address.email || ""}
                        onChange={updateAddress} 
                        required
                        />
                </label>
                <label className='item3'>
                    <div>{t('checkout.address2')}</div>
                    <input
                        type="text"
                        name="address"
                        value={address.address || ""}
                        onChange={updateAddress} />
                </label>
                <label>{t('checkout.city')}
                    <input
                        type="text"
                        name="city"
                        value={address.city || ""}
                        onChange={updateAddress} />
                </label>
                <label >{t('checkout.code')}
                    <input
                        type="text"
                        name="postal"
                        value={address.postal || ""}
                        onChange={updateAddress} />
                </label>
            </form>
        </div>
    )
}
