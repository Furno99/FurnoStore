//Styling
import { HomeBannerContainer } from "./HomeBanner.style"
//Components

//Images
import { BannerImages } from "./HomeBannerPhotos"

const HomeBanner = () => {



  return (
    <HomeBannerContainer>
      <div className="title-container">
        <div className="inner-container">
          <h1 className="title1" >Welcome</h1>
          <h1 className="title2" >to FurnoStore</h1>
        </div>
      </div>
      <div className="image-container">
        {BannerImages.map((image : string,index : number)=>{
          return (<img className={`image${index+1}`} src={image} alt={`Banner Image ${index+1}`} />)
        })}
      </div>
      <div className="design-container">
        <div className="style-ball-1">
          <div className="inner-container">
            <div className="top-container">
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="middle-container">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
            <div className="bottom-container">
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
        </div>
        <div className="style-ball-2">
          <div className="inner-container">
            <div className="top-container">

            </div>
            <div className="middle-container">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
            <div className="bottom-container">

            </div>
          </div>
        </div>
        <div className="style-ball-3">
          <div className="inner-container">
            <div className="top-container">
              <div className="item"></div>
              <div className="item"></div>
            </div>
            <div className="middle-container">
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
            <div className="bottom-container">
              <div className="item"></div>
              <div className="item"></div>
            </div>
          </div>
        </div>
      </div>
    </HomeBannerContainer>
  )
}

export default HomeBanner
