let mainData=[];

//Add Review button on click function
function getInfo() {

    //receving values from input fields
  let tempNum= document.getElementById("value-1").value;
  let tempInfo= document.getElementById('value-2').value;

//   console.log(tempNum,tempInfo);

  //Objet creation
  
  let tempData={
    Number: tempNum,
    Review: tempInfo
  }


  //pushing object into array
  if(tempNum >=0 && tempNum<6){
  mainData.push(tempData);
  }

  console.log(mainData);
  document.getElementById("value-1").value="";
  document.getElementById('value-2').value="";
}



function display_1(){

   let rating1= mainData.filter((x)=>{
    if(x.Number==1)
    return x.Number;
    });

    // console.log(rating1);

    let conatiner=document.getElementById('display_container');
    conatiner.innerHTML='';

    rating1.map((x)=>{  
        let div= document.createElement('div');
        div.classList.add('feedback-box'); 
        let rating=document.createElement('h4');
        let Review=document.createElement('p');
        rating.innerHTML=x.Number;
        rating.style.color='#665199';
        Review.innerHTML=x.Review;
         conatiner.appendChild(div);
         div.appendChild(rating);
         div.appendChild(Review);
         })
}

function display_2(){

    let rating2= mainData.filter((x)=>{
     if(x.Number==2)
     return x.Number;
     });
 
     // console.log(rating2);
 
     let conatiner=document.getElementById('display_container');
     conatiner.innerHTML='';
 
     rating2.map((x)=>{  
         let div= document.createElement('div');
         div.classList.add('feedback-box'); 
         let rating=document.createElement('h4');
         let Review=document.createElement('p');
         rating.innerHTML=x.Number;
         Review.innerHTML=x.Review;
          conatiner.appendChild(div);
          div.appendChild(rating);
          div.appendChild(Review);
          })
 }

 function display_3(){

    let rating3= mainData.filter((x)=>{
     if(x.Number==3)
     return x.Number;
     });
 
     // console.log(rating3);
 
     let conatiner=document.getElementById('display_container');
     conatiner.innerHTML='';
 
     rating3.map((x)=>{  
         let div= document.createElement('div');
         div.classList.add('feedback-box'); 
         let rating=document.createElement('h4');
         let Review=document.createElement('p');
         rating.innerHTML=x.Number;
         Review.innerHTML=x.Review;
          conatiner.appendChild(div);
          div.appendChild(rating);
          div.appendChild(Review);
          })
 }
 
 function display_4(){

    let rating4= mainData.filter((x)=>{
     if(x.Number==4)
     return x.Number;
     });
 
     // console.log(rating4);
 
     let conatiner=document.getElementById('display_container');
     conatiner.innerHTML='';
 
     rating4.map((x)=>{  
         let div= document.createElement('div');
         div.classList.add('feedback-box'); 
         let rating=document.createElement('h4');
         let Review=document.createElement('p');
         rating.innerHTML=x.Number;
         Review.innerHTML=x.Review;
          conatiner.appendChild(div);
          div.appendChild(rating);
          div.appendChild(Review);
          })
 }

 function display_5(){

    let rating5= mainData.filter((x)=>{
     if(x.Number==5)
     return x.Number;
     });
 
     // console.log(rating5);
 
     let conatiner=document.getElementById('display_container');
     conatiner.innerHTML='';
 
     rating5.map((x)=>{  
         let div= document.createElement('div');
         div.classList.add('feedback-box'); 
         let rating=document.createElement('h4');
         let Review=document.createElement('p');
         rating.innerHTML=x.Number;
         Review.innerHTML=x.Review;
          conatiner.appendChild(div);
          div.appendChild(rating);
          div.appendChild(Review);
          })
 }
 

