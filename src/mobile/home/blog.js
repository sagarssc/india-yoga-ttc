import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../../style.css";
import "../../index.css";
import RightSideBar from "../blog/rightSideBar"
import DetailedBlog from "../blog/detailed";
import { getBlogs } from "../../core/request";
import Loader from "../../core/loader"

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_index: 1,
      no_of_pages: 1,
      isloaded: false,
      isLast: false,
      categories: [],
      selected: -1,
      allBlogs: [],
      loader: false,
      selected_category: "",
    };
    this.changePage = this.changePage.bind(this);
    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onReadMore = this.onReadMore.bind(this);
  }

  async componentDidMount(){
    this.setState({loader:true})
    let blogs = await getBlogs()
    let start = 0
    let end = start + 3
    let current_blogs = []
    let no_of_blog = blogs.length
    let no_of_pages = Math.ceil(no_of_blog / 3)
    let tre = blogs
    let categories = []
    if(blogs.length > 0){
      current_blogs = blogs.slice(start,end)
      categories = [...new Set(blogs.map(({category})=> category))]
    }
    this.setState({
      current_blogs: current_blogs,
      no_of_blog: no_of_blog,
      no_of_pages: no_of_pages,
      isloaded: true,
      allBlogs: blogs,
      categories: categories,
      loader: false
    })
  }

  onSelectCategory(selected_category){
    let {allBlogs} = this.state
    let blogs = allBlogs
    let start = 0
    let end = start + 3
    let tmpBlogs = blogs.filter(blog => blog.category == selected_category)
    let current_blogs = tmpBlogs.slice(start,end)
    let no_of_blog = tmpBlogs.length
    let no_of_pages = Math.ceil(no_of_blog / 3)
    let tre = blogs
    let categories = [...new Set(blogs.map(({category})=> category))]
    this.setState({
      current_blogs: current_blogs,
      no_of_blog: no_of_blog,
      no_of_pages: no_of_pages,
      isloaded: true,
      selected: -1,
      selected_category: selected_category,
      categories: categories
    }) 
  }

  changePage(pageNo){
    window.scrollTo(0, 50);
    let {allBlogs} = this.state
    let blogs = allBlogs
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

  onNext(){
    window.scrollTo(0, 50);
    let {allBlogs} = this.state
    let blogs = allBlogs
    let {no_of_pages, current_index} = this.state
    let pageNo = current_index + 1
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

  onPrev(){
    window.scrollTo(0, 50);
    let {allBlogs} = this.state
    let blogs = allBlogs
    let {no_of_pages, current_index} = this.state
    let pageNo = current_index - 1
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

  onReadMore(index){
    window.scrollTo(0, 50);
    let {selected, allBlogs} = this.state
    let blog = allBlogs.filter(blog => blog._id == index)
    if(blog){
      blog = blog[0]
    }
    else{
      blog = {}
    }
    this.setState({
      selectedBlog: blog,
      selected: index
    })
  }

    render() {
        let {loader,current_blogs, no_of_blog, no_of_pages, current_index, isloaded, isLast, categories, allBlogs, selected, selectedBlog, selected_category} = this.state
        let indexes = []
        if(no_of_pages){
          Array(no_of_pages).fill().map((item, i) => indexes.push(i+1))
        }
        return (
          <div>{loader ? <div><div style={{height:"30rem", position:"fixed", zIndex:"999", width:"100%", backgroundColor:"f4f4f4d1"}}>
            <div style={{marginLeft:"50%", marginTop:"10%", }}>
              <Loader />
            </div>
            </div><div style={{height:"30rem"}}></div></div> :
          <div style={{width:"100%", padding:"5%", display:"flex"}}>
            {selected == -1 ? <div style={{width:"70%"}}>
              {isloaded && <div className="post-sections"style={{width:"100%", display:"block"}}>
                {selected_category && <div style={{fontSize:"30px", fontWeight:"700", padding:"2%"}}>Category: {selected_category}</div>}
              {current_blogs.map((blog, index)=>( 
              <div style={{padding:"2%"}}>
                <img className="blog-image" src={blog.image} style={{width:"90%"}}/>
              <div style={{paddingTop:"2%", color:"#5c5889", fontSize:"18px", fontWeight:"500", fontFamily:"Poppins"}}><text>{blog.date}</text></div>
              <div className="blog-heading"><text>{blog.title}</text></div>
              <div style={{paddingTop:"2%", color:"black", fontSize:"15px", fontWeight:"300", width:"90%"}}><text>{blog.description}</text></div>
              <div onClick={()=>this.onReadMore(blog._id)} className="pointer" style={{width:"20%", backgroundColor:"#5c5889", height:"3rem", borderRadius:"2rem", display:"inline-flex", marginTop:"1rem", boxShadow:"-2px 3px 5px 5px", justifyContent:"center", paddingTop:"1.5%"}}>
                  <text style={{fontWeight:"700", color:"wheat"}}>Read More</text>
              </div></div>))}
              {indexes.length != 0 && <div style={{width:"100%", height:"4rem", paddingLeft:"10%", display: "flex", marginTop:"2rem"}}>
                  {current_index != 1 && <div onClick={()=>this.onPrev()} className="index-button" style={{display:"flex", width:"15%",backgroundColor:"black", height:"80%", borderRadius:"50px", color:"white", margin:"0.5rem", paddingTop:"0", paddingLeft:"2%", paddingRight:"2%", justifyContent:"space-between"}}>
                    <div className="triangle-left" />
                    <div style={{fontSize:"medium"}}>PREV</div>
                  </div>}

                  {indexes.map((val, index) => ( <div style={{width:"6%", margin:".5rem" }}> 
                    {val == current_index ? <div className="index-button" style={{width:"100%",backgroundColor:"#5c5889", height:"100%", borderRadius:"50%"}}>
                    {val}
                    </div> :  <div className="index-button" style={{width:"100%",backgroundColor:"#f0e7d6", height:"100%", borderRadius:"50%"}} onClick={()=>this.changePage(val)}>
                    {val}
                    </div>}
                  </div>
                  ))}
                  {!isLast && <div onClick={()=>this.onNext()} className="index-button" style={{display:"flex", width:"15%",backgroundColor:"black", height:"80%", borderRadius:"50px", color:"white", margin:"0.5rem", paddingTop:"0", paddingLeft:"2%", paddingRight:"2%", justifyContent:"space-between"}}>
                    <div style={{fontSize:"medium"}}>NEXT</div>
                    <div className="triangle-right" />
                  </div>}
              </div>}
              </div>}</div> : 
              <div style={{width:"70%"}}>
                <DetailedBlog selectedBlog={selectedBlog} />
              </div>
              }
            {/* {allBlogs.length > 0 && <div className="category" style={{width:"30%",padding:"2%", position: "-webkit-sticky", position:"sticky",top:"0", bottom:"0", height:"90%" }}>
              <RightSideBar categories={categories} onSelectCategory={this.onSelectCategory} onSelectBlog={(id)=>this.onReadMore(id)} blogs={allBlogs}/>
            </div>} */}
          </div>}</div>
        );
    }
}
