import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState, useEffect } from "react";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import ClayIcon, {ClayIconSpriteContext} from '@clayui/icon';

import { delBlogs, getBlogs, updateBlog } from "./request";
function PopulateBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((response) => {
      setBlogs(response.items);
    });
  }, []);

  

  return (
    
      <div className="col m-2">
        <h1 className="p-4">EMPLOYEE LIST</h1>
        <div className="">
        {blogs.map((blog) => (
          

            
              <ClayCard key={blog.id}>
                <ClayCard.Body>
                  <ClayCard.Description displayType="title">
                    {blog.headline}
                  </ClayCard.Description>
                  <ClayCard.Description truncate={false} displayType="text">
                    {blog.articleBody}
                  </ClayCard.Description>
                  <ClayCard.Description displayType="description">
                    {blog.description}
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

export default PopulateBlog;