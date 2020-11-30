import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
import './index.css'
export default class List extends Component {
    state = {
        firstView:true,
        loading:false,
        errorMsg:'',
        newUser:[]
    }
    // 在页面加载完成之后订阅
    componentDidMount(){
        this.token = Pubsub.subscribe('土豆土豆',(msg,data)=>{
            this.setState(data)
        })
    }
    componentWillUnmount(){
        Pubsub.unsubscribe(this.token)
    }
    render() {
        // 加工传过来的数据
        // 设置初始数据
        // 订阅消息
       
         const {firstView, loading, errorMsg, newUser} = this.state
        return (
            <div className="row" >
              {  
                 firstView ? <h2>欢迎您搜索</h2> : 
                 loading ? <h2>Loading...</h2> :
                errorMsg ? <h2>{errorMsg}</h2> :
                
                 newUser === undefined ? '': newUser.map( (t,index)=>{
                    return(
                        <div  className="card" key={index}>
                        <a href={t.html_url} rel="noreferrer" target="_blank">
                        <img src={t.avatar_url}  alt="该图片无法加载" style={{width: '100px'}}/>
                        </a>
                    <p className="card-text">{t.login}</p>
                    </div>
                    )
                })     
              }
              
            </div>
        )
    }
}
