import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // 만약 home의 링크를 타고 들어가지 않은 경우 (url로 들어간 경우)
        if (location.state === undefined) {
            history.push("/"); // go back home
        }
        console.log(location.state);
    }
    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="detail_div">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
                    <div className="text_div">
                        <p className="detail_title">{location.state.title}</p>
                        <p className="detail_year">{location.state.year}</p>
                        <ul className="detail_genres">
                            {location.state.genres.map((genre, index) => <li key={index} className="detail_genre">{genre}</li>)}
                        </ul>
                        <p className="detail_summary">{location.state.summary}</p>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Detail;

// <ul className="detail_ul">
// <li className="detail_title">{location.state.title}</li>
// <li className="detail_summary">{location.state.summary}</li>
// </ul>

//  <span className="detail_span">{location.state.title}<br />{location.state.summary}</span>