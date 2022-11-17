import React from "react";
import Item from "../Item";

const ItemList = ({data = []}) => {
    return (
        data.map(mate => <Item key={mate.id} info={mate}/>)
    );
}

export default ItemList;