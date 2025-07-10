import React from 'react'

function ProductList() {
    
    const product = [
        {
            ID: 1, name: "Pen", price: "20/-"
        },
        {
            ID: 2, name: "Pencil", price: "5/-"
        },
        {
            ID: 3, name: "Notebook", price:"50/-"
        },
        {
            ID: 4, name: "Eraser", price:"10/-"
        },
        {
            ID: 5, name: "Mobile", price:"20000/-"
        },
        {
            ID: 6, name: "Keyboard", price:"1000/-"
        }
    ];
    
    return (
        <>

            {product.map(pdt => (
                <li key={pdt.key}>{pdt.name} : {pdt.price}</li>
            ))}

            {/* {product.map((pdt) => (<p>{pdt.name}</p>))} */}
        </>
    )
}

export default ProductList