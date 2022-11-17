import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount";
import Title from '../Title'
import ItemList from '../ItemList'


    const mates = [
        { id: 1, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/941/465/products/whatsapp-image-2020-07-25-at-12-20-201-d35477e6790f4e53ee15958211591802-1024-1024.jpeg", title: "Mate Imperial"},
        { id: 2, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/640/893/products/dsc05266-31-8532fabba2de7082d116521382268636-1024-1024.jpg", title: "Mate Camionero"},
        { id: 3, image: "https://matescampoadentro.com/wp-content/uploads/2018/07/10.jpg", title: "Mate Torpedo"},
    ];



export const ItemListContainer = ({texto}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(mates);
            }, 3000);
        });
        getData.then(res => setData(res))

    }, [])

    const onAdd = (units) => {
         console.log(`Compraste ${units} unidades `)
    }

    return (
        <>
        <Title greeting={texto}/>
        <ItemCount initial={3} stock={5} onAdd={onAdd} />
        <ItemList data = {data}/>
        </>
        
    );
}

export default ItemListContainer