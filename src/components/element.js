import React from 'react';
function Element(props) {
  const {ele}=props;
  return (
    <>
    {
      ele.map((val)=>{
        return (
          <div className="element">{val}</div>
        )
      })
    }
    </>
  )
}

export default Element;
