// var $table = $('#table')

function ajaxRequest(params){
    // function getChallenges(){
  var apiUrl = 'https://floating-atoll-66970.herokuapp.com/getAllChallenges';
    
  $.ajax({
        type: "GET",
        url: "https://floating-atoll-66970.herokuapp.com/getAllChallenges",
        data: "user-id=1",
// You are expected to receive the generated JSON (json_encode($data))
        dataType: "json",
        success: function (data) {
            params.success({
// By default, Bootstrap table wants a "rows" property with the data
                "rows": data,
// You must provide the total item ; here let's say it is for array length
                "total": data.length
            })
        },
        error: function (er) {
            params.error(er);
        }
    });

}
