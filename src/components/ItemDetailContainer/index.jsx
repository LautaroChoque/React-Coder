import React, {useState, useEffect} from "react";
import ItemDetail from '../ItemDetail';

const mate = {id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/941/465/products/whatsapp-image-2020-07-25-at-12-20-201-d35477e6790f4e53ee15958211591802-1024-1024.jpeg", title: "Mate Imperial"}

const ItemDetailContainer = () => {

    const [data, setData] = useState({});

    useEffect(()=>{
        const getData = new Promise(resolve => {
           setTimeout(()=>{
            resolve(mate);
           }, 3000) 
        })

        getData.then(res => setData(res))
    }, [])


    return (
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer 