
import React from "react";

export const DataWrapper = (New, Popular) => (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
        console.log(this.props)
      if(this.props.views < 100){
            return (
                <New>
                    <Component {...this.props} />;
                </New>
            )
        } else if (this.props.views > 1000){
            return (
                <Popular>
                    <Component {...this.props} />;
                </Popular>
            )
        } else {
            return (                
                <Component {...this.props} />                
            )
        }

    }
  };
};