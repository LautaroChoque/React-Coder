import React from "react";
import '../ItemDetail'

const ItemDetail = ({data}) => {
    return (
        <div className="container">
            <div className="detail">
                <img className="detail__image" src={data.image} width={300} alt="" />
                <div className="content">
                    <h1>{data.title}</h1>
                </div>
            </div>

        </div>
    );
}

export default ItemDetail