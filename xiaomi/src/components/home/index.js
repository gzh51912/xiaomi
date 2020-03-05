import React, { Component } from 'react'
import "./index.scss";
import Banner from "../banner";
import Floor from "../homeFloor";

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            tabs:["推荐","手机","智能","电视","笔记本","家电","生活周边"],
            nav1:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152", "https://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a3d25fdc76472277b6d342d12aa7ebe.jpg?thumb=1&w=144&h=152", "https://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp", "https://i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp"],
	        nav2:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"],
	        threePic:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?thumb=1&w=358&h=508", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4aea81c738383c9787b49c3d5e6a7ab0.jpg?thumb=1&w=358&h=252", "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?thumb=1&w=358&h=252"]
        }
    }
    render() {
        return (
            <div>
                <header>
                    <span className="mi"></span>
                    <input type="text" placeholder="搜索商品名称" />
                    <span className="iconfont icon-wode"></span>
                </header>
                <section className="homeClassify">
                    <div className="list">
                        <div className="listBox">
                            {
                                this.state.tabs.map((item,index)=>{
                                    return <div key={index}><span className={index===0?"spanActive":""}>{item}</span></div>
                                })
                            }
                        </div>
                    </div>
                    <div className="more"></div>
                </section>
                <section className="banner">
                    <Banner key="1" />
                </section>
                <section className="nav1">
                    <div>
                        {
                            this.state.nav1.map((item,index)=>{
                                return <a href="/#" key={index}><img src={item} alt="" /></a>
                            })
                        }
                    </div>
                    <div>
                        {
                            this.state.nav2.map((item,index)=>{
                                return <a href="/#" key={index}><img src={item} alt="" /></a>
                            })
                        }
                        
                    </div>
                </section>
                <section className="threePic clearFix">
                    <div><img src={this.state.threePic[0]} alt="" /></div>
                    <div>
                        <img src={this.state.threePic[1]} alt="" />
                        <img src={this.state.threePic[2]} alt="" />
                    </div>
                </section>
                <section className="floor">
                    <Floor />
                </section>
                <div className="toTop" onClick={this.toTop}>
                        
                </div>
            </div>
        )
    }
}
