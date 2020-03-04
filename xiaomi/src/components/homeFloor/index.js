import React, { Component } from 'react'
import floorData from "./home_floor.json"
import footerData from "./home_footer.json";
import "./floor.scss";
export default class Floor extends Component {
    componentDidMount(){
        
    }
    render() {
        console.log(footerData)
        return (
            
            <div>
                {
                    floorData.map((item,index)=>{
                        return <div key={index}>
                            {item["title-up"]?<div className="floorUpPic">
                            <img src={item["title-up"]} alt="" /></div>:""}
                        <div className="floorTitle "><img src={item.title} alt="" /></div>
                        <div className={index===2?"floorItem control":"floorItem"}>
                            {
                                item.list.map((item,index)=>{
                                    return <a href="/#" key={index}>
                                        <div className="floorImg"><img src={item.imgSrc} alt="" /></div>
                                        <div className="info">
                                            <div className="name">{item.name}</div>
                                            <div className="detail">{item.detail}</div>
                                            <div className="price" dangerouslySetInnerHTML = {{ __html: item.price }}></div>
                                            <div className="buyNow">立即购买</div>
                                        </div>
                                    </a>
                                
                                })
                            }
                        </div>
                        <div className="toMore">更多小米手机产品 ></div>
                        </div>
                    })
                }
                <div className="floorItem">
                {
                    // floorData.list?"<div>123</div>":"<h1>123</h1>"
                    footerData.list?footerData.list.map((item,index)=>{
                        return <a href="/#" key={index}>
                            <div className="floorImg"><img src={item} alt="" /></div>
                        </a>
                        
                    }):""
                }
                <div className="floorUpPic">
                    <img src={footerData["title-up"]} alt="" /></div>
                <div className="toMore">更多小米手机产品 ></div>   
                </div>
                
            </div>
        )
    }
}
