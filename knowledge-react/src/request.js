export async function getBlogs(){
    const response = await Liferay.Util.fetch(
        "/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles/",
    
        {method: "GET"}
    
    );
    var data = await response.json();
    if(response)
    return data;
    }
    
    export function addBlog({ title, articleBody }) {
        const data = {
            
            
            title,
            articleBody
            
        };
        console.log(data);
        const headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        const request = {
            body: JSON.stringify(data),
            headers,
            method: 'POST'
        };
    
        return Liferay.Util.fetch(
            "/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles",
            request
        ).then(res => res.json())
        .then((data) => {
            alert("Blog Added Successfully");
            location.reload();
        });
    }
    
    export function delBlogs(id){
    var url = "/o/headless-delivery/v1.0/knowledge-base-articles/" +id;
        return Liferay.Util.fetch(
            url,
        
            {method: "DELETE"}
    
        
        );
        
        }
    
    
    
    export function updateBlog(id){
    
    const newheadline= document.getElementById("headline").value;
    alert(newheadline);
    const newarticleBody= document.getElementById("articlebody").value;
    const newdescription= document.getElementById("description").value;
    
    
    const data = {
    
    headline : newheadline ,
    articleBody : newarticleBody,
    description : newdescription
    
    };
    
        var url = "/o/headless-delivery/v1.0/knowledge-base-articles/" +id;
        return Liferay.Util.fetch(
            url,
        
            {method: "PATCH",
        body : JSON.stringify(data),
        headers : {
    
            'Content-Type': 'application/json'
    
        }
    
        }
    
    
        
        );
    
    }