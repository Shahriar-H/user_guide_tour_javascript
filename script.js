    //add button on body to handle guide
    window.onload=()=>{
        if(localStorage.getItem('guid')){
            let bodyContent = document.querySelector("body");
            bodyContent.innerHTML = bodyContent.innerHTML+ "<p onclick='startGuid()' class='configBtn20111'><aabr title='start guide tour'>⚙</abbr></p>";
        }
    
    }
    function startGuid(){
        localStorage.removeItem("guid");
        window.location.reload();
    }

    let c1 = document.querySelectorAll('.relativeClass');
    console.log(c1.length);
    c1.forEach((element,index) => {
        element.setAttribute("id","element"+index)
    });

    if(!localStorage.getItem("guid")){
        
        let v1 = "<div class='MainGuidDiv'><p><Strong>"+dataUserGuid[0]?.id+". </Strong>"+dataUserGuid[0]?.message+"</p><p class='nxtbtn' id='idNext' onclick='changeStateOfGuid()'>Next</p></div>";
        let indx = 0;
        let prevValue = c1[indx].innerHTML; //main content of a div
        window.onload=()=>{
            c1[indx].innerHTML = c1[indx].innerHTML+v1; //initial load
            c1[indx].style.border = "2px solid rgba(238, 255, 0, 0.763)"; //initial bg when 1st load
            c1[indx].style.color = "white"; //initial bg when 1st load
            c1[indx].style.position = "relative"; //initial position when 1st load
            
        }

        function changeStateOfGuid(){
            c1[indx].innerHTML=prevValue; //put the previous div's main content
            c1[indx].style.border = ""; //color winthdraw 
            c1[indx].style.position = ""; //initial position when 1st load
            c1[indx].style.color = "";
            if((indx+1)<c1.length){
                
                
                
                indx++; //change the div
                
                v1 = "<div class='MainGuidDiv'><p><Strong>"+dataUserGuid[indx]?.id+". </Strong>"+dataUserGuid[indx]?.message+"</p><p class='nxtbtn' id='idNext' onclick='changeStateOfGuid()'>Next</p></div>";
                

                
                prevValue = c1[indx]?.innerHTML; // store main content
                c1[indx].innerHTML = c1[indx]?.innerHTML+v1; //add v1 in new div
                c1[indx].style.border = "2px solid rgba(238, 255, 0, 0.763)";
                c1[indx].style.position = "relative"; //initial position when 1st load
                c1[indx].style.color = "white";
                document.getElementById("element"+indx).scrollIntoView();
                if(indx==c1.length-1){
                    document.querySelector("#idNext").innerHTML = "Done";
                }
                
            }
            else{
                    
                    localStorage.setItem("guid",'true')
                    alert("End Tour")
                }
            }
        
    
    }



