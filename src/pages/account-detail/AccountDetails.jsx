import React from 'react';

const AccountDetails = ({ userDetail }) => {
    return (
        <>
            <div className='account'>
                <div className="my-account-detail">
                    <div className="img">
                        <img src={userDetail.image} alt="profile" />
                    </div>
                    <div className="details">
                        <p>Name: <b>{userDetail.firstName} {userDetail.lastName}</b></p>
                        <p>Username: <b>{userDetail.username}</b></p>
                        <p>Gender: <b>{userDetail.gender}</b></p>
                        <p>Email: <b>{userDetail.email}</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountDetails