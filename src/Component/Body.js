import CardComponent from "./CardComponent";
import RestList from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  // const [restaurantList,setRestaurantList]=useState(RestList);
  const array=useState(RestList);
  const restaurantList=array[0];
  const setRestaurantList=array[1];
  // 
// console.log(restaurantList);
    // const [list,setList]=useState([
    //     {
    //         info: {
    //           id: "831065",
    //           name: "Chinese Wok",
    //           cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
    //           locality: "Chandni Chowk",
    //           areaName: "Omaxe mall",
    //           costForTwo: "₹250 for two",
    //           cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    //           avgRating: 4.3,
    //           parentId: "61955",
    //           avgRatingString: "4.0",
    //           sla: {
    //             deliveryTime: 55,
    //           },
    //         },
    //       },
    //       {
    //         info: {
    //           id: "831066",
    //           name: "Kfc",
    //           cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
    //           locality: "Chandni Chowk",
    //           areaName: "Omaxe mall",
    //           costForTwo: "₹250 for two",
    //           cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    //           avgRating: 3.5,
    //           parentId: "61955",
    //           avgRatingString: "4.0",
    //           sla: {
    //             deliveryTime: 55,
    //           },
    //         },
    //       },
    //       {
    //         info: {
    //           id: "831067",
    //           name: "Domino",
    //           cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
    //           locality: "Chandni Chowk",
    //           areaName: "Omaxe mall",
    //           costForTwo: "₹250 for two",
    //           cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    //           avgRating: 4.5,
    //           parentId: "61955",
    //           avgRatingString: "4.0",
    //           sla: {
    //             deliveryTime: 55,
    //           },
    //         },
    //       },
    // ]);

    // let list = [
        // {
        //   info: {
        //     id: "831065",
        //     name: "Chinese Wok",
        //     cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        //     locality: "Chandni Chowk",
        //     areaName: "Omaxe mall",
        //     costForTwo: "₹250 for two",
        //     cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        //     avgRating: 4.3,
        //     parentId: "61955",
        //     avgRatingString: "4.0",
        //     sla: {
        //       deliveryTime: 55,
        //     },
        //   },
        // },
        // {
        //   info: {
        //     id: "831066",
        //     name: "Kfc",
        //     cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        //     locality: "Chandni Chowk",
        //     areaName: "Omaxe mall",
        //     costForTwo: "₹250 for two",
        //     cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        //     avgRating: 3.5,
        //     parentId: "61955",
        //     avgRatingString: "4.0",
        //     sla: {
        //       deliveryTime: 55,
        //     },
        //   },
        // },
        // {
        //   info: {
        //     id: "831067",
        //     name: "Domino",
        //     cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
        //     locality: "Chandni Chowk",
        //     areaName: "Omaxe mall",
        //     costForTwo: "₹250 for two",
        //     cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        //     avgRating: 4.5,
        //     parentId: "61955",
        //     avgRatingString: "4.0",
        //     sla: {
        //       deliveryTime: 55,
        //     },
        //   },
        // },
    //   ];
  return (
    <div className="body_component">
      <div>
        <button
          className="top_Rated"
         
          onClick={() => {
          const filteredlist=restaurantList.filter((data)=>(data.info.avgRating)>4.3);
        //   console.log(filteredlist)
        setRestaurantList(filteredlist);
            
        //   const filteredlist=list.filter((data)=>data.info.avgRating>4);
        //    console.log("list",filteredlist);
        //    setList(filteredlist);

          }}
        >
          Top Rated
        </button>
      </div>
      <div className="search_content">
        <span className="search_block">Search Content</span>
      </div>
      <br />
      <div className="card_group">
         {
            restaurantList.map((restaurant)=><CardComponent key={restaurant.info.id} res_Data={restaurant} />)
         }

        {/* {
          list.map((restaurant)=> <CardComponent key={restaurant.info.id} res_Data={restaurant} />)
        } */}
        {/* <Card_component res_Data={restList[0]} />
        <Card_component res_Data={restList[1]} />
        <Card_component res_Data={restList[2]} />
        <Card_component res_Data={restList[3]} />
        <Card_component res_Data={restList[4]} />
        <Card_component res_Data={restList[5]} />
        <Card_component res_Data={restList[6]} />
        <Card_component res_Data={restList[7]} />
        <Card_component res_Data={restList[8]} />
        <Card_component res_Data={restList[9]} />
        <Card_component res_Data={restList[10]} />
        <Card_component res_Data={restList[11]} />
        <Card_component res_Data={restList[12]} />
        <Card_component res_Data={restList[13]} />
        <Card_component res_Data={restList[14]} />
        <Card_component res_Data={restList[15]} />
        <Card_component res_Data={restList[16]} />
        <Card_component res_Data={restList[17]} />
        <Card_component res_Data={restList[18]} />
        <Card_component res_Data={restList[19]} /> */}

        {/* <Card_component restaurant_name="Meghana Foods" cuisine_name="Veg Biryani, North Indian, Asia" rating="4.4" delivery_time="40 Mins" /> */}
        {/* <Card_component restaurant_name="MacD" cuisine_name="Burger, North Indian, Continental" rating="4.3" delivery_time="20 Mins" /> */}
        {/* <Card_component restaurant_name="KFC" cuisine_name="French Fries, French, Europian" rating="4.0" delivery_time="30 Mins" /> */}
      </div>
    </div>
  );
};
export default Body;
