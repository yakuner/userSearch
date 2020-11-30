import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Search from './components/Search'
import List from './components/List'
export default class App extends Component{
    // 设置初始数据
    state = {
      firstView:true,
      loading:false,
      errorMsg:'',
      newUser:[]
    }
    // 传递数据的函数
    getUsersMsg = (user)=>{
      const {users} = this.state
      this.setState(user)
    }
   render(){
     return(
      <div className="container">
        <Search getUsersMsg={this.getUsersMsg} />
        <List {...this.state}/>
      </div>
     )
   }
}