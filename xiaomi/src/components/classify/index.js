import React, { Component } from 'react'
import "./classify.scss";
import "./download/font_jgxfmwipbm/iconfont.css";
import {getClassify} from "../../api/request";
export default class Classify extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            currentIndex:0
        }
    }
    componentDidMount(){
        getClassify().then((res)=>{
            let {data:{list:{data}}} = res
            console.log(data);
            this.setState({
                data
            })
        })
        
    }
    touchEnd=()=>{
        // console.log("end",this.refs.box.scrollTop);
        for(var i in this.refs){
            let index = Number(i.slice(5));
            if(i!=="box"){
                // console.log(this.refs.box.scrollTop,"floor"+Number(index+1))
                if(this.refs.box.scrollTop>=this.refs["floor"+index].offsetTop&&this.refs.box.scrollTop<this.refs["floor"+Number(index+1)].offsetTop){
                    this.setState({
                        currentIndex:index
                    })
                    return
                }

            }
        }
    }
    moveToList(index){
        this.setState({
            currentIndex:index
        })
        // console.log(this.refs["floor"+index].offsetTop);
        this.refs.box.scrollTo(0,this.refs["floor"+index].offsetTop);
    }
    render() {
        let {data} = this.state;
        
        return (
            <div className="clearFix">
                <header>
                    <span className="iconfont icon-fanhui"></span>
                    <span className="tit">分类</span>
                    <span className="iconfont icon-sousuo"></span>
                </header>
                <section className="content">
                    <aside>
                        <ul>
                            {data.map((item,index)=>{
                                return <li data-id={index} 
                                            className={index===this.state.currentIndex?"liCurrent":""} 
                                            key={index}
                                            onClick={this.moveToList.bind(this,index)}
                                        >{item.category_name}</li>
                            })}
                        </ul>
                    </aside>
                    <article>
                        <div ref="box" onTouchEnd={this.touchEnd}>
                        {
                            data.map((item,index3)=>{
                                return <div key={index3} ref={"floor"+index3} data-id={index3+1} className="classify_floor">
                                    {
                                        item?item.category_list.map((item,index)=>{
                                            if(item.view_type==="cells_auto_fill"){
                                                return <div key={index} className={index===0?"classify_tit":"classify_tit classify_toMore"}><img src={"https:"+item.body.items[0].img_url} alt="" /></div>
                                            }else if(item.view_type==="category_title"){
                                                return <div key={index} className="classify_itemTit">{item.body.category_name}</div>
                                            }else if(item.view_type==="category_group"){
                                                let {body:{items}} = item;
                                                return <div key={index} className="classify_itemList clearFix">
                                                <ul>
                                                    {items.map((item2,index2)=>{
                                                        return <li key={index2}><img src={"https:"+item2.img_url} alt=""/>{item2.product_name}</li>
                                                    })
                                                    }
                                                </ul>
                                            </div>
                                            }else{
                                                return "";
                                            }
                                        }):""
                                    }
                                </div>
                            })
                        }
                        </div>
                    
                    </article>
                </section>
            </div>
        )
    }
}
