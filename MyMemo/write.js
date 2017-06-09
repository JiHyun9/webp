
function submit(){


  var write;
  var doc=window.document.body;

  write=CKEDITOR.instances.userwrite.getData();
  //doc.innerHTML="";
//  doc.innerHTML+="내용"+write;
  console.log(write);

}

function addimage() {
   console.log("regimage");
   var userRef=firebase.database().ref('boards');
   var data={
     title: 'grape', content : 'me', date : 'me', writer: 'me', boardnum: 8
   }
   userRef.set(data);
}

function getTodayDate(){
  var date=new Date();
  var year=date.getFullYear();
  var month=""+(date.getMonth()+1);
  var day=""+date.getDate();
  if(month.length==1){
    month="0"+month;

  }
  if(day.length==1){
    day="0"+day;
  }
  var tmp=""+year+month+day;


  //시간
  myDate=new Date();
  myH=myDate.getHours();
  myMinute=myDate.getMinutes();
  mySeconds=myDate.getSeconds();

  tmp=tmp+myH+myMinute+mySeconds;

  return tmp;
}


function test() {

  var title;
  var content;
  var date;
  var writer;
  var boardnum;
  var hashtag; 
  var image;
  var video;
  var email;
  var imageboardnum;
  var ex;
  var p=0;


  var boardnum;
  var mywriter="";

  title=document.getElementById("titletxt").value;
  hashtag=document.getElementById("hashtxt").value;
  writer="JiHyun";
  //hashtag="people";
  date=getTodayDate();
  image="이미지";
  video="비디오";


   var email=document.getElementById("emailinfo").innerHTML;
   //console.log(email);
    var i=0;
    var chance=0;

    while(chance==0){
       if(email[i] == "@") {
          chance=1;
       } else{
       mywriter=mywriter+email[i];
       i++;
     }
    }
    console.log(mywriter);


   
   //화면 값 불러오기 
   title=document.getElementById("titletxt").value;


   content=CKEDITOR.instances.userwrite.getData();

   //console.log(mywriter); 
   hashtag=document.getElementById("hashtxt").value;
   console.log(hashtag);



  var update_num=document.getElementById("temp").innerHTML;
  console.log("update"+update_num);
  var updatetemp=update_num.length;
  console.log("updatetemp"+updatetemp);




  //글쓰기
  if(updatetemp>10){

    upload1(mywriter);
 
  }
  //수정
  else{

    upload1(mywriter);

    console.log("수정");
  }

   
}


function upload1(mywriter){


  var title;
  var content;
  var date;
  var writer;
  var hashtag; 
  var email;
  var imageboardnum;


  var boardnum;
  var mywriter="";

  title=document.getElementById("titletxt").value;
  hashtag=document.getElementById("hashtxt").value;
  writer="JiHyun";
  //hashtag="people";
  date=getTodayDate();

                 var r=Math.random(Math.random()*2);
                 console.log("r"+r);

   var email=document.getElementById("emailinfo").innerHTML;
   //console.log(email);
    var i=0;
    var chance=0;

    while(chance==0){
       if(email[i] == "@") {
          chance=1;
       } else{
       mywriter=mywriter+email[i];
       i++;
     }
    }
    console.log(mywriter);

      var update_num=document.getElementById("temp").innerHTML;
  console.log("update"+update_num);
  var updatetemp=update_num.length;
  console.log("updatetemp"+updatetemp);

/*
  if(updatetemp>10){
     console.log("wlsWK글쓰기");
  }
  else{

      boardnum=update_num;
      console.log("수정"+boardnum);
  }
*/


   
   //화면 값 불러오기 
   title=document.getElementById("titletxt").value;
   content=CKEDITOR.instances.userwrite.getData();
   //console.log(mywriter); 
   hashtag=document.getElementById("hashtxt").value;
   console.log(hashtag);



  var update_num=document.getElementById("temp").innerHTML;
  console.log("update"+update_num);
  var updatetemp=update_num.length;
  console.log("updatetemp"+updatetemp);




 var imgurl="";
 var vodurl="";
 var fileurl="";

 var base=0;

    
                
              var boardimage = document.getElementById("boardimage");
              var image = boardimage.files[0];

     //이미지 추가 
      if(image != undefined) {

                    var userRef=firebase.storage().ref(r+'/'+'image');
                    console.log("me1");
                       
                        userRef.put(image).then(function(snapshot) {

                                console.log('Uploaded a blob or file!');
                                console.log(snapshot.downloadURL);
                                imgurl=snapshot.downloadURL;


      console.log("글쓰기");
       $(document).ready(function() {
         $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum.json",
            method :"GET",
            success : function(data) {

  
              if(data==null){
                 console.log("data:"+data);
                 boardnum=1;

               }
               else{
                if(updatetemp>10){
                     boardnum=data.length;
                }
                else{

                  boardnum=update_num;
                  console.log("수정"+boardnum);
                 
                  vodurl=data[boardnum].vod;
                  fileurl=data[boardnum].file;
                  console.log("vod   "+vodurl);


                }
                 
               }
               




               var userRef=firebase.database().ref('boards/'+ mywriter+'/boardnum/'+boardnum);
                var data={
                      title : title, content : content, date : date, hashtag : hashtag, img : imgurl, vod : vodurl, file : fileurl
               }

               userRef.set(data);
               console.log("1"+boardnum);


               //hashtagadd(boardnum);
               var myhashtag;
               myhashtag=document.getElementById("hashtxt").value;

               var temp=myhashtag.split("#");
               for(var i=1;i<temp.length;i++) {
                console.log()
                reghashtag(mywriter,boardnum,temp[i]);
               }





              // upload(boardnum);
               //databaseImg(boardnum);

            }



         });
   });
                           

 });

base=1;

               }
               
               var boardvod = document.getElementById("boardvod");
                 var vod = boardvod.files[0];
                 console.log(boardvod);


//동영상 추가
         if(vod != undefined) {
          console.log("me2");
          var userRef=firebase.storage().ref(r+'/'+'vod');
            
             userRef.put(vod).then(function(snapshot) {
                     console.log('Uploaded a blob or file!');
                     console.log(snapshot.downloadURL);
                       vodurl=snapshot.downloadURL;

                              $(document).ready(function() {
         $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum.json",
            method :"GET",
            success : function(data) {

             if(data==null){
                console.log("data:"+data);
                 boardnum=1;

               }
               else{
                if(updatetemp>10){
                     boardnum=data.length;
                }
                else{
                   boardnum=update_num;
                  console.log("수정"+boardnum);
                   imgurl=data[boardnum].img;
                  fileurl=data[boardnum].file;
                  
                  console.log("a   "+imgurl);

                }
                 
               }
               
               


               var userRef=firebase.database().ref('boards/'+ mywriter+'/boardnum/'+boardnum);
                var data={
                      title : title, content : content, date : date, hashtag : hashtag, img : imgurl, vod : vodurl, file : fileurl
               }

               userRef.set(data);
               console.log("1"+boardnum);
               //hashtagadd(boardnum);
              // upload(boardnum);
               //databaseImg(boardnum);
               var myhashtag;
               myhashtag=document.getElementById("hashtxt").value;

               var temp=myhashtag.split("#");
               for(var i=1;i<temp.length;i++) {
                console.log()
                reghashtag(mywriter,boardnum,temp[i]);
               }




            }



         });
   });


                           });

base=1;

               }


               console.log(boardfile);
               var boardfile = document.getElementById("boardfile");
                var file = boardfile.files[0];

//file 추가 
        if(file != undefined) {
                    console.log("me3");

                    var userRef=firebase.storage().ref(r+'/'+'file');
                    userRef.put(file).then(function(snapshot) {

                    console.log('Uploaded a blob or file!');
                    console.log(snapshot.downloadURL);
                    fileurl=snapshot.downloadURL;

         $(document).ready(function() {
         $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum.json",
            method :"GET",
            success : function(data) {

                if(data==null){
                console.log("data:"+data);
                 boardnum=1;

               }
               else{
                if(updatetemp>10){
                     boardnum=data.length;
                }
                else{
                   boardnum=update_num;
                  console.log("수정"+boardnum);

                  imgurl=data[boardnum].img;
                  vodurl=data[boardnum].vod;                  
                 // console.log("a   "+imgurl);

                }
                 
               }

               var userRef=firebase.database().ref('boards/'+ mywriter+'/boardnum/'+boardnum);
                var data={
                      title : title, content : content, date : date, hashtag : hashtag, img : imgurl, vod : vodurl, file : fileurl
               }

               userRef.set(data);
               console.log("1"+boardnum);

               var myhashtag;
               myhashtag=document.getElementById("hashtxt").value;


               var temp=myhashtag.split("#");
               for(var i=1;i<temp.length;i++) {
                console.log()
                reghashtag(mywriter,boardnum,temp[i]);
               }

             //  hashtagadd(boardnum);
              // upload(boardnum);
               //databaseImg(boardnum);

            }



         });
   });

 });
base=1;


               }
if(base!=1){

 //파일 아무것도 없을 때 

imgurl="";
vodurl="";
fileurl="";

        $(document).ready(function() {
         $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum.json",
            method :"GET",
            success : function(data) {

               //console.log(data.length);
              if(data==null){
                console.log("data:"+data);
                 boardnum=1;

               }
               else{
                if(updatetemp>10){
                     boardnum=data.length;
                }
                else{
                  boardnum=update_num;
                  console.log("수정"+boardnum);

                  imgurl=data[boardnum].img;
                  vodurl=data[boardnum].vod;
                  fileurl=data[boardnum].file;
                  
                }
                 
               }


               var userRef=firebase.database().ref('boards/'+ mywriter+'/boardnum/'+boardnum);
                var data={
                      title : title, content : content, date : date, hashtag : hashtag, img : imgurl, vod : vodurl, file : fileurl
               }

               userRef.set(data);
               console.log("1"+boardnum);

               var myhashtag;
               myhashtag=document.getElementById("hashtxt").value;


               var temp=myhashtag.split("#");
               for(var i=1;i<temp.length;i++) {
                console.log()
                reghashtag(mywriter,boardnum,temp[i]);
               }

             //  hashtagadd(boardnum);
              // upload(boardnum);
               //databaseImg(boardnum);

            }



         });
   });



}

alert("메모 업로드까지 잠시만 기다려주세요");
if(window.confirm("메모 업로드 중..확인을 누르고 페이지가 넘어갈 때까지 잠시만 기다려주세요")){
  console.log("xxx");
  setTimeout(timer,10000);
}
              

}

function timer(){
  window.location.href="main.html";
}




function reghashtag(mywriter,myboardnum,myhashtag) {

   var submitbutton = document.getElementById("submit");
   var result="#"+myboardnum;

      $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/hashtag/"+myhashtag+".json",
            method :"GET",
            success : function(data) {
               if(data != null) {
               result=data.tagboardnum+"#"+myboardnum;
             }

             var data = {tagboardnum : result}

            $.ajax({
                  url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/hashtag/"+myhashtag+".json",
                  method :"PUT",
                  data : JSON.stringify(data),
                  success : function(data) {
                        console.log(myhashtag+"  "+result);
               }
               });
         }
         });
   
}

  function initcontent(value){

                


   console.log("init");
   var myAddress = unescape(location.href);
   var parameters = (myAddress.slice(myAddress.indexOf("?")+1,myAddress.length));
   var parameter = (myAddress.slice(myAddress.indexOf("=")+1,myAddress.length));
   var mywriter =   document.getElementById("emailinfo").innerHTML;



   console.log(mywriter);
   console.log(parameters);
   console.log("parameter"+parameter);

   var temp2=document.getElementById("temp");
   temp.innerHTML=parameter;

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

//글쓰기
   if(parameters=="") {

   }
//수정
    else {   
      $(document).ready(function() {
         $.ajax({
            url: "https://mymemo-2d3f9.firebaseio.com/boards/"+mywriter+"/boardnum/"+parameter+".json",
            method :"GET",
            success : function(data) {
               console.log(data);
               console.log(data.content);
               console.log(data.hashtag);
               content=CKEDITOR.instances.userwrite.getData();

               CKEDITOR.instances.userwrite.setData(data.content);

               $("#titletxt").val(data.title);
              // $("#cke_1_contents").html(data.content);
               $("#hashtxt").val(data.hashtag);

               
               var temp=document.getElementById("test");
               temp.innerHTML="수정";

               var myhashtag = data.hashtag.split("#");

             for(var j=1;j<myhashtag.length;j++) {
                console.log("j"+myhashtag[j]);
                delhashtag(myhashtag[j],mywriter,parameter);
             }


         }
         });
      });

   }




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