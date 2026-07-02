import { getSingleProduct } from '@/actions/server/product';
import React from 'react';

const ProductDetails =async ({params}) => {
    const {id} = await params
    const product = await getSingleProduct(id)
    
    return (
        <div>
            
        </div>
    );
};

export default ProductDetails;