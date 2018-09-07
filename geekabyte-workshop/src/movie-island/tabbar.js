import React, { Component } from "react"

// TabBar component renders Types of list to be rendered,
// Whether list if for now showing or top rated movies
class TabBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            selectedType: "now_showing"      
        }
    }


    onTabChange = (event) => {
        const selected = event.target.getAttribute("type")
        this.setState({
          selectedType: selected
        })
    }


	render() {
        const { selectedType } = this.state,
			isNowShowingSelected = selectedType === "now_showing",
            isTopRatedSelected = selectedType === "top_rated"
		return (
            <div>
                <p className="App-intro">Click on the Following Tabs</p>
                <span type="now_showing" onClick={this.onTabChange} className={`tab ${isNowShowingSelected ? "selected" : ""}`}>Now Showing</span>
                <span type="top_rated" onClick={this.onTabChange} className={`tab ${isTopRatedSelected ? "selected" : ""}`}>Top Rated</span>
            </div>
        );
	}
}

export default TabBar