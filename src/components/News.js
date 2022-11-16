import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
       country:'in',
       pageSize:9,
       category:'general',
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state = {
        articles: [],
        loading:false,
        page:1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Now`;
    }
    async updateNews(){

        const url = `https://newsapi.org/v2/top-headlines?country=${this.capitalizeFirstLetter(this.props.country)}&category=${this.props.category}&apiKey=5be5def14e4e4c0f9c323309af79f632&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, 
            totalArticles:parsedData.totalResults ,
            loading:false
        })
        
    }
    async componentDidMount(){
     
        this.updateNews();
    }
    handlePreviousClick = async ()=>{
      await
       this.setState({page:this.state.page - 1})
       this.updateNews();
       }
    
  
   handleNextClick = async () =>{
      await
      this.setState({page:this.state.page + 1});
      this.updateNews();
      }
    
     
  
 



    render() {
        return (

            <div className="container my-3">
                
                <h2 className='shadow p-3 mb-5 bg-body rounded' style={{marginTop:'90px',textAlign:"center"}}>NewsBuzz  - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
            
                       {this.state.loading && <Spinner />}                               
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url} >
                  <Newsitem title={element.title?element.title:""}
                   description={element.description?element.description.slice(0,90):""}
                   imageURL={element.urlToImage}
                   newsURL={element.url} author={!element.author?"Unknown":element.author} date={element.publishedAt} source={element.source.name} />
         </div>
                       

                })}
                   

                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button"className="btn btn-dark"onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News