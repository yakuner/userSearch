import React, { Component } from 'react'
import Pubsub from 'pubsub-js'
// 引入axios
import axios from 'axios'
export default class Seacch extends Component {
    searchUsers = () => {
        return async () => {
               // 发送请求:获取数据传送给父组件
            // 捕获input输入框的内容
            Pubsub.publish('土豆土豆',{ firstView: false, loading: true }) 
            try {
                const { value } = this.value
                const user = await axios.get('https://api.github.com/search/users', { params: { q: value } })
                const newUser = user.data.items
                Pubsub.publish('土豆土豆',{ firstView: false, loading: false, newUser})
            } catch (error) {
                Pubsub.publish('土豆土豆',{ firstView: false, loading: false, errorMsg: error.message })
            }
          

        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">请在下方搜索框输入您想查询的用户</h3>
                <div>
                    <input ref={c => this.value = c} type="text" placeholder="请输入关键字查询..." />&nbsp;
                    <button onClick={this.searchUsers()}>搜索</button>
                </div>
            </section>
        )
    }
}
