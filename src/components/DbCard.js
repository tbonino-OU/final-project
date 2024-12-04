import React from 'react'
//import StarIcon from "../images/StarReviewIcon.jpg"
import '../css/TableofContents.css'

const dbCard = (props) => {
    // const {media} = props;
    // console.log(media);
    //console.log(props);

  if (props.props.length > 0) {

    return(
        props.props.map((item) =>{
            console.log(item);
            // we need to clean up the date coming out of the database
            var releaseDate = new Date(item.RelDate)
            return (
                <div className="card" key={item.MediaID}>
                  <h3 className="media-title">
                    <span className="media-title-name">
                      {item.Name} ({item.Type})
                    </span>
                    <br />
                  </h3>
                  <img
                    src={item.MediaImage}
                    className="card-image"
                    alt="cover pic for one of the media"
                  />
                  {/* <div className="card-stats">
                    <img src={StarIcon} className="card-star" alt="star icon" />
                    <p>
                      <b>{item.rating}</b> &nbsp;
                    </p>
                    <p className="card-span-gray">({item.reviewCount}) &nbsp;</p>
                  </div> */}
                  <div className="Discrip-detail">
                    <p>
                      <br />
                      <span className="span-description-bold">
                        <b>Description :-</b>
                      </span>
                    </p>
                    <p>
                      <span className="span-years-of-release-bold">
                        &nbsp; &nbsp; &nbsp; <b>- Release year:</b> &nbsp;{" "}
                        {releaseDate.getFullYear()}
                      </span>
                    </p>
                    <p>
                      <span className="span-synopsis-bold">
                        &nbsp; &nbsp; &nbsp; <b>- Synopsis:</b> &nbsp; {item.Description}
                      </span>
                    </p>
                    {/* <p>
                      <span className="span-cast-bold">
                        &nbsp; &nbsp; &nbsp; <b>- Cast :</b> &nbsp; {item.cast}
                      </span>
                    </p>
                    <p>
                      <span className="span-crew-bold">
                        &nbsp; &nbsp; &nbsp; <b>- Crew :</b> &nbsp; {item.crew}
                      </span>
                    </p>
                    <p>
                      <span className="span-author-bold">
                        &nbsp; &nbsp; &nbsp; <b>- Author :</b> &nbsp; {item.author}
                      </span>
                    </p>
                    <p>
                      <span className="span-location-bold">
                        {" "}
                        &nbsp; &nbsp; &nbsp; <b>- Location :</b> &nbsp; {item.location}
                      </span>
                    </p> */}
                  </div>
                  <p>
                    <span className="span-price-bold">
                      <br />
                      <b>Access Media :-</b>
                    </span>
                    <span>&nbsp;{item.PhysRel}</span>
                  </p>
                </div>
              )
        })
    )
  } else {
    return(<p>The back-end sends it's regards...</p>)
  }
}

export default dbCard;