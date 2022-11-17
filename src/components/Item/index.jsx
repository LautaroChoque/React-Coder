import React from "react";


const Item = ({info}) => {
    return (
        <a href="" className="mate" >
            <img src={info.image} width={300} alt="" />
            <p>{info.title}</p>
        </a>
    )
}

export default Item;