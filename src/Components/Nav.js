import './Nav.css'

function Nav(){
    return(
        <div className="nav">
            <nav>
                <h1 className="head"><b>TechnCloud</b></h1>
                <ul>
                    <li>Categories</li>
                    <li>Brand</li>
                    <li>Industry</li>
                    <li>Product</li>                    
                </ul>
                <h1 className="advise">Get Free Advice</h1>
                <div className="user-section">
                    <h1>Become a Seller</h1>
                    <img src="https://via.placeholder.com/150" alt="Product" className="user"/>
                </div>
            </nav>
        </div>
    )
}

export default Nav;