import './Product.css'

const Product = () => {

    const pdata = {
        name: 'DELL 3543',
        description: 'This is a really slow laptop good for nothing. But very useful for educational purposes',
        price: 4000,
        category: 'Electronics'
    }

    return (
        <div className='Product'>
            <div className='img'>
            </div> 
            <div className='text'>
            <h1>{pdata.name}</h1>
            <h2>{pdata.category}</h2>
            <h3>{pdata.description}</h3>
            <h4>{pdata.price}</h4>
            </div>
        </div>
    )
}

export default Product
