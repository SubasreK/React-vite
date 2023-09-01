import React, {Component} from 'react'
export class RenderingComponent extends Component{
    constructor(props){
        super(props)
        {
            this.state={
                text: "condition",
                show: false,
                fruits: ["Apple","Orange","grape","Mango"]
            }
        }
    }
    changeShow(){
        this.setState({
            show: !this.state.show
        })
    }
    render()
    {
        var variable = this.state.show ? 'Hide' : 'Show'
        return(
            <>
            
          {
            this.state.fruits.map(fruit =>{
                return <li key={fruit}>{fruit}</li>
            })
          }
            <div>RenderingComponent</div>
            {this.state.show && this.state.text}
           <button onClick={() => this.changeShow()}>{variable}</button>
            </>
        )
    }

}
export default RenderingComponent