import React from 'react';
import './card.css';

export const Card = ({name, id, mode, volume, status, props}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="font-weight-bold card-title">{name}</h4>
                <p className="card-text">Volume: {volume}</p>
                <p className="card-text">Mode: {mode}</p>
                <p className="card-text">Status: {status}</p>
                <button type="button" className="btn btn-primary" onClick={() => props.history.push(`/details/${id}`)}>View Details</button>
            </div>
        </div>
    )
}
