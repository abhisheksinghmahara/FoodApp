import { Cdn_Url } from "../utils/Constants";

const CardComponent=(props)=>{
    // console.log(props.res_Data.info.name)
    const {res_Data}=props;
    // console.log("resdata",res_Data);
    
    // console.log(res_Data[0].info.name);
    // const imgId=res_Data.info.cloudinaryImageId;
    // console.log(imgId);
  
       const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=res_Data?.info;
  return(<div className="card">
          <img className="food_picture" src={Cdn_Url+cloudinaryImageId} alt="this is picture"/>
          
        <div className="item_description">
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h3>{avgRating}/5 star</h3>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
  </div>
    )
  }
  export default CardComponent;