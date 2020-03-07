import React, { Component } from 'react'
import {getStarData} from "../../api/request";
import "./star.scss";
import "./download/font_s8jivy0q16j/iconfont.css";
export default class Star extends Component {
    componentDidMount(){
        getStarData().then((res)=>{
            let {data:{list:{data}}}=res
            this.setState({
                data
            },()=>{
                console.log(this.state.data);
            })
        })
        
    }
    constructor(){
        super();
        this.state={
            data:{}
        }
    }
    render() {
        return (
            <div className="container">
                <section className="starHeader">
                    <div className="headerBox">
                        <div className="threeMenu">
                            <span className="spanActive">推荐</span>
                            <span>5G讨论组</span>
                            <span>意见反馈</span>
                        </div>
                        <div className="twoIcon">
                            <span className="iconfont icon-lingdang"></span>
                            <span className="iconfont icon-dingbudaohang-zhangh"></span>
                        </div>
                    </div>
                </section>
                <div className="circleBigTit">
                        <div>兴趣圈</div>
                        <a href="/#">1.9万人已加入</a>
                </div>
                <section className="circleList">
                    
                    <div className="circleListBox">
                        {
                            this.state.data.circle_list?this.state.data.circle_list.items.map((item,index)=>{
                                return <div key={index} className="circleItem">
                                {item.tag==="热门"?<i>热门</i>:""}
                                <img src={item.img} alt="" />
                                <p className="circleTit1">{item.title}</p>
                                <p className="circleTit2">{item.description}</p>
                            </div>
                            }):""
                        }
                        
                    </div>
                    
                </section>
                <section className="fourPic">
                    {
                        this.state.data.channel_list?this.state.data.channel_list.map((item,index)=>{
                            return <div key={index}><img src={item.img} alt="" /></div>
                        }):""
                    }
                </section>
            </div>
        )
    }
}
