
function test(value){


console.log("test");
console.log("value"+value);
email=value;
var title;



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

//무한 스크롤
         $(document).ready(function() {
         $(window).on("scroll", function() {
          
            var scrollHeight=$(window).scrollTop() +$(window).height();
            var documentHeight=$(document).height();

            if(scrollHeight == documentHeight) {
               //appendP(16);
            }
         });

         appendP(1);
      });

       function appendP(num) {

         //db가져오기
         
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
                                 var titls_s_text=document.createTextNode("메모가 존재하지 않습니다");
                                 title_s.appendChild(titls_s_text);
                                 title_s.setAttribute("class","title_s");

                                 board.appendChild(title_s);
                                $(".container").append(board);


                        }
                        
                        for(var i=data.length-1;i>0;i--) {

                          if(data[i]==null){

                                

                          }
                          else{
                            console.log(i+" "+ data[i].title);
  
                                var board = document.createElement("div");
                                 board.setAttribute("class","board");

                                 var title_s=document.createElement("p");
                                 var titls_s_text=document.createTextNode("● 제목 :");
                                 title_s.appendChild(titls_s_text);
                                 title_s.setAttribute("class","title_s");

                                 board.appendChild(title_s);

                                 
                                 var ptitle = document.createElement("p");
                                 var ptitletext = document.createTextNode(data[i].title);
                                 ptitle.appendChild(ptitletext);
                                 ptitle.setAttribute("class","title");

                                 board.appendChild(ptitle);

                                 var content_s=document.createElement("p");
                                 var content_s_text=document.createTextNode("● 내용 :");
                                 content_s.appendChild(content_s_text);
                                 content_s.setAttribute("class","content_s");

                                 board.appendChild(content_s);


                                 var pcontent = document.createElement("p");
                                 pcontent.innerHTML = data[i].content;
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
                                 var phashtagtext = document.createTextNode(data[i].hashtag);
                                 phashtag.appendChild(phashtagtext);
                                 phashtag.setAttribute("class","hashtag");
                                 phashtag.setAttribute("id","hashtag"+i);


                                 board.appendChild(phashtag);
                                 $(".container").append(board);

                                 console.log("img"+data[i].img);
                                  console.log("vod"+data[i].vod);
                                  console.log("file"+data[i].file);



                                 if(data[i].img!=""){

                                         var image_s=document.createElement("p");
                                         var image_s_text=document.createTextNode("● 이미지");
                                         image_s.appendChild(image_s_text);
                                         image_s.setAttribute("class","image_s");

                                         board.appendChild(image_s);

                                  
                                          var pimageupper = document.createElement("p");
                                          var pimage= document.createElement("img");
                                          pimage.setAttribute("src",data[i].img);
                                          pimage.setAttribute("width","200px");
                                          pimageupper.appendChild(pimage);
                                          board.appendChild(pimageupper);

                                 }

                                 if(data[i].vod!=""){

                                         var vod_s=document.createElement("p");
                                         var vod_s_text=document.createTextNode("● 비디오");
                                         vod_s.appendChild(vod_s_text);
                                         vod_s.setAttribute("class","vod_s");

                                         board.appendChild(vod_s);


                                          var pvodupper = document.createElement("p");
                                          var pvod= document.createElement("video");
                                          var psource = document.createElement("source");
                                           pvod.setAttribute("controls","");
                                           pvod.setAttribute("width","200px");
                                           console.log("vodurl:"+data[i].vod);
                                           psource.setAttribute("src",data[i].vod);
                                           psource.setAttribute("type","video/mp4");

                                          
                                          pvod.appendChild(psource);
                                          pvodupper.appendChild(pvod);
                                          board.appendChild(pvodupper);

                                 }
                                 if(data[i].file!=""){

                                         var file_s=document.createElement("p");
                                         var file_s_text=document.createTextNode("● 파일");
                                         file_s.appendChild(file_s_text);
                                         file_s.setAttribute("class","file_s");

                                         board.appendChild(file_s);

                                          var pfileupper = document.createElement("p");
                                          var pfile= document.createElement("a");
                                        
                                          pfile.setAttribute("href",data[i].file);
                                          pfile.innerHTML="파일다운";

                                      
                                          pfileupper.appendChild(pfile);
                                          //pvod.setAttribute("width","500px");
                                          board.appendChild(pfileupper);

                                 }

//button append
                                  var p = document.createElement("p");
                                  var buttonmodify = document.createElement("button");
                                  var buttonmodifytext = document.createTextNode("수정");

                                  buttonmodify.onclick=function(i) {
                                       modify(i);
                                    }

                                    buttonmodify.appendChild(buttonmodifytext);
                                    buttonmodify.setAttribute("class","col-xs-1 col-xs-offset-9 col-md-1 col-md-offset-8 detail");
                                    buttonmodify.setAttribute("id",i);

                                    var buttondelete = document.createElement("button");
                                    var buttondeletetext = document.createTextNode("삭제");

                                    buttondelete.onclick=function(i){
                                     // console.log("i"+i+"여기"+temph);
                                      remove(i);
                                    }

                                    buttondelete.appendChild(buttondeletetext);
                                    buttondelete.setAttribute("class","col-xs-1 col-xs-offset-1 col-md-1 detail");
                                    buttondelete.setAttribute("id",i);
                                    
                                    p.appendChild(buttonmodify);
                                    p.appendChild(buttondelete);
                                    board.appendChild(p);

                          }

                           }

                     
                     }
                  });
         });
        
}



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


   var hashtag = document.getElementById("hashtag"+boardnum).innerHTML;
    var hashtagtemp = hashtag.split("#");
    console.log("hshtag    "+hashtag);

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

      for(var j=1;j<hashtagtemp.length;j++) {
          console.log("j"+hashtagtemp[j]);
          delhashtag(hashtagtemp[j],mywriter,boardnum);
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

function delhashtag(hashtag, mywriter, myboardnum) {
   var result="";
 $(document).ready(function() {
            $.ajax({

            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/hashtag/"+hashtag+".json",
                        method :"GET",
                        success : function(data) {
                           console.log(data.tagboardnum);
                           var temp = data.tagboardnum.split("#");

                           for(var i=1;i<temp.length;i++) {

                              if(temp[i]==myboardnum) {

                                       } 
                                       else {
                                       result=result+"#"+temp[i];
                                    }
                           }

                           console.log("result"+result);



                   var userRef=firebase.database().ref('boards/'+ mywriter+'/hashtag/'+hashtag);
                            var data={
                               tagboardnum : result
                           }

                        userRef.set(data);
                     
                     }
                  });
         });
}