import React from 'react';
import classes from './Users.css'
const Users = () => {
    return (
        <div className="user">
            <img src="" alt="" className="user__image"/>
            <button className="user__button-follow">Follow</button>
            <div className="user__info info">
                <div className="info__name">
                    Dim
                </div>
                <div className="info__status">
                    status
                </div>
                <div className="info__country">
                    Usa
                </div>
            </div>
        </div>
    )
};

export default Users;