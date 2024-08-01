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
const dataObj={
  "info": {
    "id": "411450",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/d08dc977-5e85-46df-8142-feb32cd9873b_411450.JPG",
    "locality": "Bhavbhuti Marg",
    "areaName": "Paharganj",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Rolls & Wraps",
      "Fast Food"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 2.7,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "2.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-08-02 05:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Burger.png",
          "description": "Delivery!"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Burger.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹179"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    
  }
}
// console.log(dataObj)
const Card_component=(props)=>{
  // console.log(props.res_Data.info.name)
  const {res_Data}=props;
  console.log(res_Data.info);
return(<div className="card">
        <img className="food_picture" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"  alt="this is picture"/>
      
      <div className="item_description">
          <h3>{res_Data.info.name}</h3>
          <h5>{res_Data.info.cuisines}</h5>
          <h3>{res_Data.info.avgRating} </h3>
          <h4>{res_Data.info.sla.deliveryTime}</h4>
      </div>
</div>
  )
}

const Body=()=>{
  return(
    <div className="body_component" >
      <div className="search_content">
        <span className="search_block">Search Content</span>
      </div><br/>
     <div className="card_group">
      <Card_component res_Data={dataObj} />

     {/* <Card_component restaurant_name="Meghana Foods" cuisine_name="Veg Biryani, North Indian, Asia" rating="4.4" delivery_time="40 Mins" /> */}
     {/* <Card_component restaurant_name="MacD" cuisine_name="Burger, North Indian, Continental" rating="4.3" delivery_time="20 Mins" /> */}
     {/* <Card_component restaurant_name="KFC" cuisine_name="French Fries, French, Europian" rating="4.0" delivery_time="30 Mins" /> */}
    
     </div>
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