function Card(props) {
  return (
    <div className="card">
      <img src={`/images/${props.imageUrl}`} className="card--image" alt="" />
      <div className="card--description">
        <div className="card--location">
          <h3 className="card--country">
            <img src="/images/gps.png" alt="" className="card--gps" />
            {props.location}
          </h3>
          <a href={props.googleMapsUrl} className="card--maps">
            View on google maps
          </a>
        </div>

        <h1 className="card--title">{props.title}</h1>
        <p className="card--dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="card--about">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
