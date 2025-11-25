import '../css/feature.css'

function Feature ( {image , title, text, description}) {
    return (
        <div className="feature-item">
          <img src={image} alt={description} className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>
            {text}
          </p>
        </div>
    )
}

export default Feature