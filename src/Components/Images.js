import React,{Component}from 'react';
import "./Images.css"

class Images extends Component{
constructor(props) {
    super(props);
    this.state = {
        imageUrl: "",
        imageArray: [

        ],
        showModel: false,
        popImageUrl: ""

    };
}

imageSubmit = (e) => {
    e.preventDefault();
    let imageArray = this.state.imageArray;
    imageArray.push(this.state.imageUrl)
    this.setState({
        imageArray:imageArray

    })
}

handelLinkChange = (e) =>{
    e.preventDefault();
    this.setState({
        imageUrl: e.target.value
    })
}
  render() {
      let imageArray=this.state.imageArray;
    const viewImage = imageArray.map((urll, index) => {
        return(
            <img
            className="singleImage"


            src = {urll}
            key={index}
            />
            
        )
    })

  return (
    <div className="Images">
        <form onSubmit={this.imageSubmit}>
            <input 
            type="text"
            placeholder="sumbit image"
            onChange={this.handelLinkChange}
            />
        <button type="Submit" className="submitButton"> Submit Image</button>

        </form>
        {viewImage}
  
    </div>
  );
}
}

export default Images;
