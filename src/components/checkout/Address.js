import React from 'react'

export default function Address({ updateAddress, address }) {
    return (
        <div className='address'>
            <form >
                <label>Name
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        value={address.name || ""}
                        onChange={updateAddress} />
                </label>
                <label>Surname
                    <input
                        type="text"
                        name="surname"
                        value={address.surname || ""}
                        onChange={updateAddress} />
                </label>
                <label className='item3'>
                    <div>Address</div>
                    <input
                        type="text"
                        name="address"
                        value={address.address || ""}
                        onChange={updateAddress} />
                </label>
                <label>City
                    <input
                        type="text"
                        name="city"
                        value={address.city || ""}
                        onChange={updateAddress} />
                </label>
                <label >Postal Code
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
