export function getBlogs() {
    return Liferay.Util.fetch(
        "/o/headless-delivery/v1.0/sites/20121/blog-postings",

        { method: "GET" }

    ).then(response => response.json());

}

export function addBlog({ headline, description, articleBody }) {
    const data = {

        headline,
        description,
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
        "/o/headless-delivery/v1.0/sites/20121/blog-postings",
        request
    ).then(res => res.json())
        .then((data) => {
            alert("Employee Added Successfully");
            location.reload();
        });
}

export function delBlogs(id) {
    var url = "/o/headless-delivery/v1.0/blog-postings/" + id;
    return Liferay.Util.fetch(
        url,

        { method: "DELETE" }


    );

}



export function updateBlog(id) {

    const newheadline = document.getElementById("headline").value;
    alert(newheadline);
    const newarticleBody = document.getElementById("articlebody").value;
    const newdescription = document.getElementById("description").value;


    const data = {

        headline: newheadline,
        articleBody: newarticleBody,
        description: newdescription

    };

    var url = "/o/headless-delivery/v1.0/blog-postings/" + id;
    return Liferay.Util.fetch(
        url,

        {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {

                'Content-Type': 'application/json'

            }

        }



    );

}

export function upload(data) {

    return Liferay.Util.fetch('/o/headless-delivery/v1.0/sites/20121/documents/', { // Your POST endpoint
        method: 'POST',

        body: data // This is your file object
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        success => console.log(success), alert("Upload Success")// Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );

}





