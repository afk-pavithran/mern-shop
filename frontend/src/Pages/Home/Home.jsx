import ProductCard from "../../Components/ProductCard/ProductCard"
import './Home.css'

const Home = () => {

    const dummydata = [
        {name: 'dell 3543', description: 'Slow laptop', category: 'Electronics', price: 40000, id: 111},
        {name: 'Sony XBLXR', description: 'Headphones', category: 'Electronics', price: 50000, id: 112},
        {name: 'MSI 980', description: 'mid tier laptop', category: 'Electronics', price: 80000, id: 113},
        {name: 'ASUS Tuf', description: 'High laptop', category: 'Electronics', price: 170000, id: 114}
    ]


    return (
        <div className='Home'>
            {dummydata.map(el => <ProductCard data={el} />)}
        </div>
    )
}

export default Home
