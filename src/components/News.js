import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import './NewsItem.css'


export class News extends Component {


    static defaultProps ={
      country : 'in',
      category : 'general'

    }

    static propTypes ={
      country : PropTypes.string,
      category : PropTypes.string


    }

    // articles= []


    constructor(){
        super(); 
        console.log("this is the newsss component...");
        
        this.state={
            articles: [],
            loading:true,
            page:1,
            totalResults:0
            // https://eagle-dev4.crownit.in/assets/gifs/Loader_spinner.gif
        }
    }


    async componentDidMount(){
      this.props.setProgress(15);
      let geturl=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5dbbc172978040f3994a693882ff328e&page1&pageSize=8`;
        
      this.props.setProgress(60);
      this.setState({loading:true})
      let data = await fetch(geturl);
      this.props.setProgress(70);
      let parsedData=await data.json()
      this.props.setProgress(80);
      console.log(parsedData);
      this.setState({
        articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading:false})

    this.props.setProgress(100);



    //   const Do = ()=>{if(this.state.page<2){

    //     document.getElementById('prevbtn').style.visibility='hidden';
  
  
    //   }else{
    //     document.getElementById('prevbtn').style.visibility='visible';
    //   }
    // }

    
  

    }


    handleNextClick=async ()=>{
      console.log("Next");

      // if(this.state.page+1>Math.ceil(this.state.totalResults/8)){
      //   document.getElementById('nextbtn').style.visibility='hidden';


      // }

      // else {

      //   document.getElementById('nextbtn').style.visibility='visible';
      let geturl=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5dbbc172978040f3994a693882ff328e&page=${this.state.page+1}&pagesize=8`;
      this.setState({loading:true});
      let data = await fetch(geturl);
      let parsedData=await data.json()
      console.log(parsedData);
      console.log(this.state.page);

    
      this.setState({page:this.state.page+1,
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      })
    // }
    console.log(this.state.totalResults);
    
      
    }



    fetchMoreData = async () => {
      
      this.setState({page : this.state.page+1})
      const geturl=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5dbbc172978040f3994a693882ff328e&page=${this.state.page}&pageSize=8`;
      let data = await fetch(geturl);
      let parsedData=await data.json()
      console.log(parsedData);
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
      })

      
    };





    handlePrevClick= async ()=>{
      console.log("Prev");
      let geturl=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5dbbc172978040f3994a693882ff328e&page=${this.state.page-1}&pagesize=8`;
      this.setState({loading:true});
      let data = await fetch(geturl);
      let parsedData=await data.json()
      console.log(parsedData);
      console.log(this.state.page);
      console.log("this one"+ this.state.totalResults);

    
      this.setState({page:this.state.page-1,
        articles:parsedData.articles,
        totalResults:this.state.totalResults,
        loading:false

      })

    }





    







  render() {
    return (
      <div className='container my-3'>

          {/* {this.state.loading && <Spinner/>} */}

          <h1 className='text-center heading'><span className=''>News Page</span></h1> 

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          // loader={<div className='text-center'>
          //           <img src="https://i.gifer.com/origin/6a/6a2dfb96f278692f0900cc08975efe0e_w200.gif" alt="Processing/Loading" className='text-center loader_image'/>
          //         </div>}
          loader={<Spinner />}
          >
         
           <div className="row">

              
              {/* {!this.state.loading &&  */}
              {this.state.articles.map((elem,idx)=>{

                  return <div className="col-md-4"  key={idx} >             
                        <NewsItem title={elem.title?elem.title.slice(0,40)+'...' : "<Description>"} desc={elem.description?elem.description.slice(0,80)+'...': "<Description>..."} imgurl={elem.urlToImage} newsurl={elem.url} date={elem.publishedAt} author={elem.author} source={elem.source.name}/>
                        </div>



              })}

              </div>

              </InfiniteScroll>


          {/* <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1}  type="button" className="btn btn-dark" id='prevbtn' onClick={this.handlePrevClick}> &larr; Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/8)} type="button" className="btn btn-dark" id='nextbtn' onClick={this.handleNextClick}> &nbsp;&nbsp;&nbsp; Next &rarr;</button>
          </div> */}

                
                {/* {this.state.isLoading ? "*showLoadingScreen*" : "played"} */}

                {/* disabled={this.state.page+1 > Math.ceil(this.state.totalResults/8)} */}
        
      </div>
    )
  }
}

export default News
