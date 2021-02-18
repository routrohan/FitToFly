import React from 'react';
import { render } from 'react-dom';
import Results from '../Result';
import './index.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  display: 'flex',
};



class FileUplaod extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      files: [],
      showResults:false
    };
  }

  onContinueClick()
  {
      this.props.continueClick(this.state.files);
  }

  onChange(e) {
    var files = e.target.files;
    console.log(files);
    var filesArr = Array.prototype.slice.call(files);
    console.log(filesArr);
    this.setState({ files: [...this.state.files, ...filesArr] });
  }
  
  removeFile(f) {
       this.setState({ files: this.state.files.filter(x => x !== f) }); 
  }

  

  render() {
    return (
        <div> 
      <div className="attach-box" style={styles}>
        <label style={{backgroundColor:"#072F5F",color:"white",padding:"20px",width:"200px"}} className=" custom-file-upload">
          <input type="file" multiple onChange={this.onChange} />
          <i className="fa fa-cloud-upload" />
          Attach
        </label>
        {this.state.files.map(x => 
           <div className="file-preview" onClick={this.removeFile.bind(this, x)}>{x.name}</div>
         )}

         {
             this.state.files.length>0 && 
         <button onClick={()=>this.onContinueClick()}  className="button-box" >Continue&nbsp;&nbsp;&nbsp;
         <svg xmlns="http://www.w3.org/2000/svg" width="50" height="40" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
         <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
       </svg>
 
         </button>
         }
      </div>
      </div>)
}
}

export default FileUplaod;

