import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div>
        <img
          className="company_logo"
          src="https://images.squarespace-cdn.com/content/v1/5eb25a402b8d986bea73d8ed/449eca6e-14e7-4aa1-bd3b-d62b97c25723/fc+logo+artwork+final+final+WEB+6sm+copy.png"
        />
      </div>
      {/* <div className="cafetitle">
        <h1>NC Nishtha's Cafe</h1>
        </div> */}
      <div className="nav-items" >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      </div>
    </div>
  );
};

const Cart_component=()=>{
return(<div className="card">
        <img className="food_picture" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"  alt="this is picture"/>
      
      <div className="item_description">
          <h3>Mghana Foods</h3>
          <h5>Veg Biryani, North Indian, Asia</h5>
          <h4>4.5 stars</h4>
          <h4>40 mins</h4>
      </div>
</div>
  )
}

const Body=()=>{
  return(
    <div className="body_component" >
      <div className="search_content">
        <span>Search Content</span>
      </div>
     <>
     <Cart_component/>
     </>
    </div>
  );
}
const Food_app = () => {
  return (
    <div className="food_app" id="food_app">
      <Header />
      <Body/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Food_app/>);