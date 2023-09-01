import React,{Component} from 'react'
import'./DesignComponent.css'
export class DesignComponent extends Component{
    constructor(props){
        super(props)
        this.state={btnStyle:{
              width:'200px',
              height:'50px',
              border:'2px solid green',
              borderRadius:'5px'
        }
    }
    }
    render(){
        return(
            <>
            <button >Without Css</button>
            <button style={this.state.btnStyle}>With CSS</button>
            <button className="button">Style With CSS</button>
            <button type="button" className="btn btn-primary">Primary</button>
            </>
        )
    }
}
export default DesignComponent 