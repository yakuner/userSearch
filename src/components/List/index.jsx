import React, { Component } from 'react'
import './index.css'
export default class List extends Component {
    render() {
        // 加工传过来的数据
         const {firstView, loading, errorMsg, newUser} = this.props
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
