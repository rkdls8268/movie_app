import React from "react";

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
            return <span>{location.state.title}</span>
        } else {
            return null;
        }
    }
}

export default Detail;