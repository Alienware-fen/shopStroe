function submitUserData() {
  const data = {};
  data.name = $("#name").val();
  data.email = $("#email").val();
  data.password = $("#pwd").val();
  data.cpwd = $("#cpwd").val();


  $.ajax({
    url: "/users/register",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function (data) {
      if(data.success){
        location.replace("/index.html");
      }else{
        alert(data.msg);
      }
    },
    error: function (err) {
      console.log("Got error " + err);
    },
  });
}
//  password show n hide functionality
function showHidePwd() {
  const currentType = $(".pwd").attr("type");
  if (currentType == "password") {
    $(".pwd").attr("type", "text");
  } else {
    $(".pwd").attr("type", "password");
  }
}
