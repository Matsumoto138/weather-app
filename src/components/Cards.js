import React from 'react'

function Cards({data}) {
    return (
        <div className="Card">
            <div className="card-img">
                <img src={data.day.condition.icon} alt="" />
            </div>
            <div className="card-body">
                <div className="city-name">{data.date}</div>
                <div className="underline"></div>
                <div className="temperature">{data.day.avgtemp_c}  °C</div>
                <div className="cond-text">{data.day.condition.text}</div>
            </div>
        </div>
    )
}

export default Cards
