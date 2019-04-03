var $table = $('#table')

$(function() {
    // function getChallenges(){
    var apiUrl = 'http://127.0.0.1:3000/getAllChallenges';

    fetch(apiUrl,{
      method: "GET",
      // mode: "cors",
      // Access-Control-Allow-Origin: "*",
      // origin: "*",
      headers: {
        // "Access-Control-Request-Method": "GET",
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Header": "Content-Type",
        // "Access-Control-Allow-Origin": "*"

      }
    }).then(response => {
      console.log((response))
      return response;
    }).then(data =>{
      console.log(data);
      return data;
    }).catch(err => {
      console.log("ERROR" + err);
      return err;
      // Do something for an error here
    });
    // $table.bootstrapTable({data: data})
  }
);
