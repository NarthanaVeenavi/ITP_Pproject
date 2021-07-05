import react from 'react';

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            
            <div style={{width: "4.5cm", height: "1.2cm", marginTop: "0.1cm"}} id="logo-hotel"></div>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/addFoodOrder">Create Food Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/addBevOrder">Create Beverage Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/listFoodOrder">List Food Order</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/listBeverageOrder">List Beverage Order</a>
                </li>
                
                </ul>
            </div>
        </nav>
    )
}

export default Header;