import React from 'react';


class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countVotes: 0
        }
    }

    voting = () => {
        let value = this.state.countVotes;
        this.setState({ 
            countVotes: value += 1 })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p> {this.state.countVotes}</p>
                <img src={this.props.img} alt={this.props.keyword} onClick={this.voting} />
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;