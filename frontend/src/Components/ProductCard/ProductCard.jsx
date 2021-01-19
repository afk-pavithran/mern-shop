import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ data }) => {
    const history = useHistory();
    const {name, description, id, price, category } = data;
    
    return (
        <div className='ProductCard'
            onClick={() => history.push(`/products/${id}`)}
        >
            <div className='img'>
            </div>
            <h1>{ name }</h1>
            <h3>{description}</h3>
            <h3>{category}</h3>
            <h2>Rs.{price}</h2>
            <Button
                variant='solid'
                colorScheme='green'
                
            >
                Add to Cart
            </Button>
        </div>
    )
}

export default ProductCard
