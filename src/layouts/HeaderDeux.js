import React from "react";

class HeaderDeux extends React.Component{
    constructor(props) {
        super(props);
        this.nextPic = this.nextPic.bind(this);
        this.state = {
            picCount: 0,
            picArray : ["url(friends-background.jpeg)", "url(beHappy-background.jpeg)", "url(beer-background.jpg)"]    }
        }


        nextPic() { 
            console.log(this.state.picCount);
            this.state.picCount=(this.state.picCount+1<this.state.picArray.length)? this.state.picCount+1 : 0;
            var laDiv = document.getElementById("background");
            laDiv.style.backgroundImage = this.state.picArray[this.state.picCount];

        }
        

        componentDidMount() {
            this.nextPic();
            this.intervalID = setInterval(() => this.nextPic(), 5000);
        }
        
        componentWillUnmount() {
          clearInterval(this.intervalID);
      }
      

      render() {
        return(
            <div>
            <div
            className="body" 
            id="background" 
            style={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 500,
                width: "100%",
                marginTop: 5,
                borderBottom: "2px solid #e6e6e6"
            }}
            >
            </div>
            <div
            style={{
                borderBottom: "2px solid #e6e6e6",
                height: 35
            }}
            >
            </div>
            </div>
            );
        }
    }

    export default HeaderDeux;