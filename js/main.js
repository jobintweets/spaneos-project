$(document).ready(function () {
    
    showHomePage();
    
    $('#viewall').click(function () {
        showHomePage();
       
    });
    
    function showHomePage(){
         $.ajax({
            type:'get',
            url:'viewall.html',
            success:function(data){
               $("#content").html(data); 
            },error:function(error){
                alert("something went wrong");
            }
        });   
    }
    $('#reports').click(function () {
        $.ajax({
            type:'get',
            url:'reports.html',
            success:function(data){
               $("#content").html(data); 
            },error:function(error){
                alert("something went wrong");
            }
        });   
    });
   
});
