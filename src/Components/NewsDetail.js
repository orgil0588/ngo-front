import React from "react";
function NewsDetail(props) {



  return (
    <div>
      <div className="">
     
        <img className="w-full" src={`data:image/jpeg;base64,${props.image}`} />
        <div className="flex justify-between text-primary-gray px-4">
          <div>{props.category}</div>
          <div>{props.createdAt}</div>
          
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
      </div>
  
    </div>
  );
}

export default NewsDetail;
