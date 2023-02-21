import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useRef,useState} from 'react';
import Element from './components/element';

function App() {
  const [data,setData]=useState([]);
  const pushRef=useRef(null)
  const topRef=useRef(null)
  const push=()=>{
    let val=pushRef.current.value;
    if(val){
      let arr=[val,...data]
      setData(arr);
      pushRef.current.value='';
      topRef.current.value='';
    }
  }
  const pop=()=>{
    if(data.length<=0){
      alert('Stack is Empty');
    }else{
      data.splice(0,1);
      setData([...data])
    }
    topRef.current.value='';
  }
  const top=()=>{
    if(data.length) topRef.current.value=data[0];
  }
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          <Element ele={data}/>
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={push}>
              PUSH
            </button>
            <input type="text" className="form-control" ref={pushRef}/>
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={pop}>
              POP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={top}>
              TOP
            </button>
            <input type="text" disabled className="form-control" ref={topRef}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
