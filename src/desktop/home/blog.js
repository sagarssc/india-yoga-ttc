import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import { blogs } from "../../blogData";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_index: 1,
      no_of_pages: 1,
      isloaded: false,
      isLast: false
    };
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount(){
    let start = 0
    let end = start + 3
    let current_blogs = blogs.slice(start,end)
    let no_of_blog = blogs.length
    let no_of_pages = Math.ceil(no_of_blog / 3)
    this.setState({
      current_blogs: current_blogs,
      no_of_blog: no_of_blog,
      no_of_pages: no_of_pages,
      isloaded: true
    })
  }

  changePage(pageNo){
    window.scrollTo(0, 50);
    let {no_of_pages} = this.state
    let start = (pageNo-1) * 3
    let end = start + 3
    let current_blogs = blogs.slice(start,end)
    let no_of_blog = blogs.length
    let isLast = no_of_pages == pageNo
    this.setState({
      current_blogs: current_blogs,
      current_index: pageNo,
      no_of_blog: no_of_blog,
      no_of_pages: no_of_pages,
      isloaded: true,
      isLast: isLast
    })
  }

    render() {
        let {current_blogs, no_of_blog, no_of_pages, current_index, isloaded, isLast} = this.state
        let indexes = []
        Array(no_of_pages).fill().map((item, i) => indexes.push(i+1))
        return (
          <div style={{width:"100%", padding:"5%", display:"flex"}}>
            {isloaded && <div className="post-sections"style={{width:"75%", display:"block"}}>
              {current_blogs.map((blog, index)=>( 
              <div style={{padding:"2%"}}>
                <img className="blog-image" src={blog.img} style={{width:"90%"}}/>
              <div style={{paddingTop:"2%", color:"gold", fontSize:"18px", fontWeight:"500", fontFamily:"Poppins"}}><text>{blog.date}</text></div>
              <div className="blog-heading"><text>{blog.header}</text></div>
              <div style={{paddingTop:"2%", color:"black", fontSize:"15px", fontWeight:"300", width:"90%"}}><text>{blog.des}</text></div>
              <div onClick={{}} style={{width:"20%", backgroundColor:"#5c5889", height:"3rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"1.5%"}}>
                  <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
              </div></div>))}
              {indexes.length != 0 && <div style={{width:"100%", height:"4rem", paddingLeft:"10%", display: "flex", marginTop:"2rem"}}>
                  {current_index != 1 && <div className="index-button" style={{display:"flex", width:"15%",backgroundColor:"black", height:"80%", borderRadius:"50px", color:"white", margin:"0.5rem", paddingTop:"0", paddingLeft:"2%", paddingRight:"2%", justifyContent:"space-between"}}>
                    <div className="triangle-left" />
                    <div style={{fontSize:"medium"}}>PREV</div>
                  </div>}

                  {indexes.map((val, index) => ( <div style={{width:"6%", margin:".5rem" }}> 
                    {val == current_index ? <div className="index-button" style={{width:"100%",backgroundColor:"gold", height:"100%", borderRadius:"50%"}}>
                    {val}
                    </div> :  <div className="index-button" style={{width:"100%",backgroundColor:"#f0e7d6", height:"100%", borderRadius:"50%"}} onClick={()=>this.changePage(val)}>
                    {val}
                    </div>}
                  </div>
                  ))}
                  {!isLast && <div className="index-button" style={{display:"flex", width:"15%",backgroundColor:"black", height:"80%", borderRadius:"50px", color:"white", margin:"0.5rem", paddingTop:"0", paddingLeft:"2%", paddingRight:"2%", justifyContent:"space-between"}}>
                    <div style={{fontSize:"medium"}}>NEXT</div>
                    <div className="triangle-right" />
                  </div>}
              </div>}
            </div>}
            <div className="category" style={{width:"25%",backgroundColor:"green"}}>

            </div>
          </div>
        );
    }
}
