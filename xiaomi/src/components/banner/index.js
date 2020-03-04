import React from 'react'
import Swiper from 'swiper/js/swiper.js'
import 'swiper/css/swiper.min.css'
import "./banner.scss";
class Banner extends React.Component {
constructor(){
    super();
    this.state={
        bannerPic:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/68caca6f6cda76280dabe48ca92f23a7.jpg?thumb=1&w=720&h=360",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b223e8d31a49b32e28bfc891df909f0.jpg?thumb=1&w=720&h=360",
                    "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ab01cce3c45907bebb8df28086ac3ca.jpg?thumb=1&w=720&h=360"]
    }
}
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',
        paginationType:"bullets",
        paginationElement : 'li',
        autoplay:3000
    })
  }
  render() {
   
    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    this.state.bannerPic.map((item,index)=>{
                        return <div className="swiper-slide" key={index}><img alt="" src={item} /></div>
                    })
                }
            </div>
            {/* <div className="swiper-pagination"></div> */}
        </div>
    );
  }
}

export default Banner;