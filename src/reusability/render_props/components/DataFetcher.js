import React, {Component} from "react"

class DataFetcher extends Component {
    state = {
        loading: false,
        data: null,
        errMsg: false
    }
    static defaultProps = {
        url: "https://swapi.dev/api/people/1"     
    }
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data, loading: false}))
            .catch(() => this.setState({errMsg: 'Something went fucking wrong for fuck sake!!'}))
    }
    
    /** 
     * ***** Method1 ***** 
     * Function passed as prop 
     */
    render() {
        const {loading, data, errMsg} = this.state
        return(
            <div>
                {this.props.render(loading, data, errMsg)}
            </div>
        );
    }
    /**
     * ***** Method2 ***** 
     * Function passed as child prop 
     */
    render() {
        const { loading, data, errMsg } = this.state;
        return (
            <div>
                {this.props.children( loading, data, errMsg )}
            </div>
        )
    }
    /**
     * ***** Method3 *****
     * Function that returns an external component passed as prop
     */
    render() {
        const {loading, data, errMsg} = this.state;
        return(
            <div>
                {this.props.render({loading, data, errMsg})}
            </div>
        )
    }
}

export default DataFetcher