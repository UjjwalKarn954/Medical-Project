import React from 'react';
import data from '../data';

 function ProductScreen(props){

    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return (
    <div>

        <h3>{product.name}</h3>
      </div>
    );
}
export default ProductScreen;