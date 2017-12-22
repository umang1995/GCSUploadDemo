$(document).ready(function(){
	$('#submit').click(function(){
		var inputByUser = $("#getName").val()
		var inputByUser2 = $("#getFavHobby").val()
		request_JSON = JSON.stringify({ "Name" : inputByUser,"Hobby":inputByUser2})
		/* $.ajax(
			{
			  type : 'POST',
			  url : "http://127.0.0.1:5000/test",
			  contentType: "application/json;charset=UTF-8",
			  dataType:'json',
			  data : request_JSON,
			  success : function(json)
			  {
				alert(json)
			  },/*success : function() {}
			  error : function()
			  {
				alert('fail')
			  }
			}
		); $.ajax*/
		$.ajax({
			url: "http://127.0.0.1:5000/test",
			type: "POST",
			data: request_JSON,
			cache: false,
			dataType: "json",
			processData: false,
			contentType: false,
			cache:false,
			success:function(resp){
				if(resp){
					$("#printing").html(resp.msg)
				}
			},
			error:function(resp){
					$("#printing").html("ERROR" + resp)
			}
		});
	});
});