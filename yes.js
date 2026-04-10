var Yes=document.getElementById("yes")
        var No=document.getElementById("no")
        var oneh2=document.getElementById("oneH2")

        const pharase=[
            "Are you sure?🧐",
            "Really?😫",
            "🥺Think again!",
            "Last chance....☝️",
            "Surely not?😓",
            "🤧You're heartless💔",
            "🤧Okkk stop.✋",
            "stop..🙏😭",
            "🙏stopppp.....💔🙏"
        ]
        

        let clickCount=0


        No.addEventListener("click",function(){
            No.style.position="absolute"
            No.style.top=Math.floor(Math.random()*80+5)+"%"
            No.style.left=Math.floor(Math.random()*20+5)+"%"

            if(clickCount<pharase.length){
                No.innerText=pharase[clickCount];
                clickCount++;
            }

        });
        yes.addEventListener("mouseenter",()=>{
            // oneh2.classList.add('show');
            No.innerText="Yess do💖 it"
            No.style.backgroundColor="rgb(245, 106, 130)"
           
        });
        yes.addEventListener("mouseleave",()=>{
            // oneh2.classList.remove('show')
            No.innerText="Noo😔"
            No.style.backgroundColor="rgb(255, 255, 255)"
            
            
        })