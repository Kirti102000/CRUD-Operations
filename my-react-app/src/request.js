export function upload(data){

    return Liferay.Util.fetch('/o/headless-delivery/v1.0/sites/20121/documents/', { // Your POST endpoint
    method: 'POST',
    
    body: data // This is your file object
  }).then(
    response => response.json() // if the response is a JSON object
  ).then(
    success => console.log(success) ,alert("Upload Success")// Handle the success response object
  ).catch(
    error => console.log(error) // Handle the error response object
  );

}


export function gettingdata(){
    return Liferay.Util.fetch('/o/headless-delivery/v1.0/sites/20121/documents/', { // Your POST endpoint
        method: 'GET',
        
        
      }).then(
        response => response.json() // if the response is a JSON object
      );
        

}


export function delDocs(id){

var url = '/o/headless-delivery/v1.0/documents/' + id;
  return Liferay.Util.fetch(url, { 
    method: 'DELETE',
    
    
  }).then(alert("succesfully Deleted File"))
  .then(location.reload())
        
     
  ;


}


export function update(data, id){







  var url = '/o/headless-delivery/v1.0/documents/' + id;

  return Liferay.Util.fetch(url, { // Your POST endpoint
  method: 'PATCH',
  
  body: data // This is your file object
}).then(
  response => response.json() // if the response is a JSON object
).then(
  success => console.log(success) ,alert("Update Success")// Handle the success response object
).catch(
  error => console.log(error) // Handle the error response object
);

}
