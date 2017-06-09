function initcontent(value){

   console.log("init");

   var mywriter =   document.getElementById("emailinfo").innerHTML;



   console.log(mywriter);


   console.log("test");
  console.log("value"+value);
  email=value;



var mywriter="";
//var email=document.getElementById("emailinfo").innerHTML;
//console.log(email);

       var i=0;
       var chance=0;

      
       while(chance==0){
          if(email[i] == "@") {
             chance=1;
          } else {
          mywriter=mywriter+email[i];
          i++;
          }
       }  
       console.log(mywriter);   

     //  imagedown();





}

function imagedown(){

var storageRef = firebase.storage.ref("61/image/image.jpg");
storageRef.getDownloadURL().then(function(url) {
  console.log(url);
});


}





function search(){

  console.log("search");



   var mywriter="";
   var email=document.getElementById("emailinfo").innerHTML;
    var i=0;
    var chance=0;

    while(chance==0){
       if(email[i] == "@") {
          chance=1;
       } else {
       mywriter=mywriter+email[i];
       i++;
       }
    }


  var temp="";

  var searchtag;
  var hashtagtemp="";
  var boardtemp;
  var i=0;
  var j=0;
  var tempnum=0;

   searchtag=document.getElementById("searchinput").value;




  console.log(searchtag);

                 $(document).ready(function() {
                         $.ajax({
                            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/hashtag/"+searchtag+".json",
                            method :"GET",
                            success : function(data) {
                              temp=data.tagboardnum;
                              console.log(temp);
                              console.log("length"+temp.length);
                            
                              boardtemp=temp.split("#");


                              //해당 태그 content 불러오기 
                                 //$(".container").remove();


                                     $(document).ready(function() {
                                     $.ajax({

                                     url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum.json",
                                                 method :"GET",
                                                 success : function(data) {
                                                    console.log(data);

                                                     if(data==null){
                                                               var board = document.createElement("div");
                                                               board.setAttribute("class","board");

                                                               var title_s=document.createElement("p");
                                                               var titls_s_text=document.createTextNode("해당 메모가 존재하지 않습니다");
                                                               title_s.appendChild(titls_s_text);
                                                               title_s.setAttribute("class","title_s");

                                                               board.appendChild(title_s);
                                                              $(".container").append(board);


                                                      }


                                                    for(var i=1;i<boardtemp.length;i++){
                                                         console.log("boardnum"+boardtemp[i]);
                                                         tempnum=boardtemp[i];

                                                      if(data==null){
                                                        console.log("hashtag가 없음");

                                                      }
                                                      else{

                                                            console.log("data---"+data);
                                                            console.log(i+" "+ data[tempnum].title);
                              
                                                            var board = document.createElement("div");
                                                             board.setAttribute("class","board");

                                                             var title_s=document.createElement("p");
                                                             var titls_s_text=document.createTextNode("● 제목 :");
                                                             title_s.appendChild(titls_s_text);
                                                             title_s.setAttribute("class","title_s");

                                                             board.appendChild(title_s);

                                                             
                                                             var ptitle = document.createElement("p");
                                                             var ptitletext = document.createTextNode(data[tempnum].title);
                                                             ptitle.appendChild(ptitletext);
                                                             ptitle.setAttribute("class","title");

                                                             board.appendChild(ptitle);

                                                             var content_s=document.createElement("p");
                                                             var content_s_text=document.createTextNode("● 내용 :");
                                                             content_s.appendChild(content_s_text);
                                                             content_s.setAttribute("class","content_s");

                                                             board.appendChild(content_s);


                                 var pcontent = document.createElement("p");
                                 pcontent.innerHTML = data[tempnum].content;
                                 //var pcontenttext = document.createTextNode(data[i].content);
                                 //pcontent.appendChild(pcontenttext);
                                 pcontent.setAttribute("class","content");

                           
                                                                                            

                                                             board.appendChild(pcontent);
                                                             $(".container").append(board);

                                                             var hashtag_s=document.createElement("p");
                                                             var hashtag_s_text=document.createTextNode("● 해쉬태그 :");
                                                             hashtag_s.appendChild(hashtag_s_text);
                                                             hashtag_s.setAttribute("class","hashtag_s");

                                                             board.appendChild(hashtag_s);


                                                             var phashtag = document.createElement("p");
                                                             var phashtagtext = document.createTextNode(data[tempnum].hashtag);
                                                             phashtag.appendChild(phashtagtext);
                                                             phashtag.setAttribute("class","hashtag");

                                                             board.appendChild(phashtag);
                                                             $(".container").append(board);

                                 if(data[tempnum].img!=""){
                                         var image_s=document.createElement("p");
                                         var image_s_text=document.createTextNode("● 이미지");
                                         image_s.appendChild(image_s_text);
                                         image_s.setAttribute("class","image_s");

                                         board.appendChild(image_s);

                                          console.log("??"+data[tempnum].img);
                                          var pimageupper = document.createElement("p");
                                          var pimage= document.createElement("img");
                                          pimage.setAttribute("src",data[tempnum].img);
                                          pimage.setAttribute("width","200px");
                                          pimageupper.appendChild(pimage);
                                          board.appendChild(pimageupper);

                                 }

                                 if(data[tempnum].vod!=""){

                                  var vod_s=document.createElement("p");
                                         var vod_s_text=document.createTextNode("● 비디오");
                                         vod_s.appendChild(vod_s_text);
                                         vod_s.setAttribute("class","vod_s");

                                         board.appendChild(vod_s);

                                             console.log("vod??"+data[tempnum].vod);
                                          var pvodupper = document.createElement("p");
                                          var pvod= document.createElement("video");
                                          var psource = document.createElement("source");
                                           pvod.setAttribute("controls","");
                                           pvod.setAttribute("width","200px");
                                           console.log("vodurl:"+data[tempnum].vod);
                                           psource.setAttribute("src",data[tempnum].vod);
                                           psource.setAttribute("type","video/mp4");

                                          
                                          pvod.appendChild(psource);
                                          pvodupper.appendChild(pvod);
                                          board.appendChild(pvodupper);

                                 }
                                 if(data[tempnum].file!=""){

                                   var file_s=document.createElement("p");
                                         var file_s_text=document.createTextNode("● 파일");
                                         file_s.appendChild(file_s_text);
                                         file_s.setAttribute("class","file_s");

                                         board.appendChild(file_s);


                                          var pfileupper = document.createElement("p");
                                          var pfile= document.createElement("a");
                                        
                                          pfile.setAttribute("href",data[tempnum].file);
                                          pfile.innerHTML="파일";

                                      
                                          pfileupper.appendChild(pfile);
                                          //pvod.setAttribute("width","500px");
                                          board.appendChild(pfileupper);

                                 }
                                          




                                                              var p = document.createElement("p");
                                                              var buttonmodify = document.createElement("button");
                                                              var buttonmodifytext = document.createTextNode("수정");

                                                              buttonmodify.onclick=function(tempnum) {
                                                                   modify(tempnum);
                                                                }

                                                                buttonmodify.appendChild(buttonmodifytext);
                                                                buttonmodify.setAttribute("class","col-xs-1 col-xs-offset-10 col-md-1 col-md-offset-10 detail");
                                                                buttonmodify.setAttribute("id",tempnum);

                                                                var buttondelete = document.createElement("button");
                                                                var buttondeletetext = document.createTextNode("삭제");

                                                                buttondelete.onclick=function(tempnum){
                                                                  remove(tempnum);
                                                                }

                                                                buttondelete.appendChild(buttondeletetext);
                                                                buttondelete.setAttribute("class","col-xs-1 col-md-1 detail");
                                                                buttondelete.setAttribute("id",tempnum);
                                                                
                                                                p.appendChild(buttonmodify);
                                                                p.appendChild(buttondelete);
                                                                board.appendChild(p);

                                                      }

                                                       }

                                                 
                                                 }
                                              });
                                     });
                         }
                         });
                      });



}

function modify(event){

      console.log(event);
      console.log("id "+event.toElement.id);
      var boardnum=event.toElement.id;
      console.log("boardnum "+boardnum);

      window.location.href = "write.html?boardnum="+boardnum;

}

function remove(event){
      console.log(event);
      console.log("id  "+event.toElement.id);
      var boardnum=event.toElement.id;
      console.log("boardnum "+boardnum);


   var mywriter="";
   var email=document.getElementById("emailinfo").innerHTML;
    var i=0;
    var chance=0;

    while(chance==0){
       if(email[i] == "@") {
          chance=1;
       } else {
       mywriter=mywriter+email[i];
       i++;
       }
    }

  
      $(document).ready(function() {
            $.ajax({

            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum/"+boardnum+".json",
                        method :"DELETE",
                        success : function(data) {
                           alert('삭제되었습니다');
                           window.location.href = "main.html";

             


                     
                     }
                  });
         });

}
