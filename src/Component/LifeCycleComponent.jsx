import React, { Component } from 'react'
//rce
export class LifeCycleComponent extends Component {
    constructor(props){
        super(props)
        this.state={
        name:""
        }
        console.log("constructor")
    }
   static getDerivedStateFromProps(props,state){
        console.log("state is updated with props")
        return{
            name:props.name
        }}
        shouldComponentUpdate()
        {
            console.log("Component should update")
            return true
        }
        componentDidMount(){
            console.log("Complete Mount")
        }
        getSnapshotBeforeUpdate(prevProps, prevState) {
           console.log("previous state and props")
           console.log(prevProps,prevState)
           return null
          }
          componentDidUpdate(){

          }
          clickEvent(){
            this.setState({
                name:"Update Lifecycle"
            })
          }
    
  render() {
    console.log("render is updated")
    return (
        <>
      <div>LifeCycleComponent {this.props.name}</div>
      <button onClick={()=>this.clickEvent()}>update</button>
      </>
    )
  }
}

export default LifeCycleComponent