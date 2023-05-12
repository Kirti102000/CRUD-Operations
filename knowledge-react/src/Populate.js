import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';
import { delBlogs, getBlogs, updateBlog } from "./request";
function Populate() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((response) => {
      setBlogs(response.items)
      console.log("data set get ", response);
    });
  }, []);

  //   handleRefresh = () => {
  //     // by calling this method react re-renders the component
  //     this.setState({});
  //   };

  return (
    
      <div className="col">
        <h1 className="p-5">Articles List</h1>
        <div className="">
        {blogs.map((blog) => (
          

            
              <ClayCard key={blog.id}>
                <ClayCard.Body>
                  
                  <ClayCard.Description truncate={false} displayType="text">
                    <h4>Title</h4>{blog.title}
                  </ClayCard.Description>
                  <ClayCard.Description displayType="description">
                    <h4>Article Body</h4>{blog.articleBody}
                  </ClayCard.Description>
                  <button className="btn btn-primary p-1 m-1" onClick={() => updateBlog(blog.id)(location.reload())}>{"update"} </button>
                    <button className="btn btn-primary p-1 m-1" onClick={() => delBlogs(blog.id)(location.reload())}>{"delete"} </button>

                </ClayCard.Body>
              </ClayCard>
            
          
             )
            )
        }
        </div>
        
      </div>
      
    
  );
}

export default Populate;