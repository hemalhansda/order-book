import React , {Component} from 'react'

class Order extends Component{
    constructor(props){
        super(props)
        this.state = {
            stocks: 1000 ,
            limitPrice: Number ,
            user : Number

        }
    }

    handleChange = (event)=> {
        this.setState({
        user:event.target.value
        })
    }

    changeStocks = () => {
        this.setState({
            stocks : this.state.stocks - this.state.user
        })
    }

    limitPrice = () =>{
        this.setState({
            limitPrice: event.target.value
        })
    }
     



    render(){
        return(
            <div>
                <div>
                    <h1>STOCKS AVAILABLE--{this.state.stocks}</h1>
                </div>

                <div>
                    <label><strong>ADD</strong></label>
                </div>

                <div>
                   <input type ="number"  value={this.state.user} onChange={this.}/>
                </div>

                <div>
                   <button onClick={()=>this.changeStocks()}>ADD</button>
                </div>

               <div>
                   <label><strong>Limit Price</strong></label>
                   <input type="number" value={this.state.limitPrice}>
                </div>

                <div>
                   <button onClick={()=>this.showList()}><strong>SHOW-LIST</strong></button>
                </div>

            </div>
        
        )
    }
}

export default Order