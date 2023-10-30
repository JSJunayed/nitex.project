import React from 'react';
import { Container } from '../../globalStyles';
import {
    ProductSection,
    ProductTextWrapper,
    ProductTitle,
    ProductText
} from './ProductsStyles';


const  Products = () => {
    return ( <ProductSection id='products'>
        <Container>
            <ProductTextWrapper>
                <ProductTitle>Our Products</ProductTitle>
                <ProductText>Down there you will find out some of are done Products</ProductText>
            </ProductTextWrapper>
        </Container>
    </ProductSection>
    

    )
}

export default Products;