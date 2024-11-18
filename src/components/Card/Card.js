import React from "react";
import StarIcon from "../../assets/StarReviewIcon.jpg";

function Card(props) {
  return (
    <div className="card">
      <h3 className="media-title">
        Media Title -
        <span className="media-title-name">
          {props.mediaTitle} ({props.mediaType})
        </span>
        <br />
      </h3>
      <img
        src={props.coverImage}
        className="card-image"
        alt="cover pic for one of the media"
      />
      <div className="card-stats">
        <img src={StarIcon} className="card-star" alt="star icon" />
        <p>

          <b>{props.rating}</b> &nbsp;
        </p>
        <p className="card-span-gray">
          ({props.reviewCount}) &nbsp;
        </p>
      </div>
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
            {props.yearsOfRelease}
          </span>
        </p>
        <p>
          <span className="span-synopsis-bold">
            &nbsp; &nbsp; &nbsp; <b>- Synopsis:</b> &nbsp; {props.synopsis}
          </span>
        </p>
        <p>
          <span className="span-cast-bold">
            &nbsp; &nbsp; &nbsp; <b>- Cast :</b> &nbsp; {props.cast}
          </span>
        </p>
        <p>
          <span className="span-crew-bold">
            &nbsp; &nbsp; &nbsp; <b>- Crew :</b> &nbsp; {props.crew}
          </span>
        </p>
        <p>
          <span className="span-author-bold">
            &nbsp; &nbsp; &nbsp; <b>- Author :</b> &nbsp; {props.author}
          </span>
        </p>
        <p>
          <span className="span-location-bold">
            {" "}
            &nbsp; &nbsp; &nbsp; <b>- Location :</b> &nbsp; {props.location}
          </span>
        </p>
      </div>
      <p>
        <span className="span-price-bold">
          <br />
          <b>Access Media :-</b>
        </span>
        <span>&nbsp;{props.accessMedia}</span>
      </p>
    </div>
  );
}

export default Card;
