//^ addeventlistener le olan hershey callbackdir

window.addEventListener("load", myClock=()=>{      //* window load olanda
    let time = new Date();


    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    //todo   ishleyir amma sifirsiz  sifiri getirmeliyik iflede olar ternary ilede
    hour = hour < 10 ? "0" + hour:hour;         //* bu ternary if else dir eynidir..IF-hour kicikdirse 10 dan 0...ELSE-if olmasa 
    minute = minute < 10 ? "0" + minute:minute;
    second = second < 10 ? "0" + second:second;

    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    
    month = month < 10 ? "0" + (month + 1) : month; //*1 elave ettik 0 adan basladigin gore

    document.getElementById("hour").innerHTML = hour + ":";      //*  + ":" htmlde silinmisdi getirirk
    document.getElementById("minute").innerHTML = minute + ":";
    document.getElementById("second").innerHTML = second;

    let interval = setInterval(myClock, 1000);  //* 1 saniyeden 1 olsun

    document.querySelector(".date").innerHTML = day + "-" +  month + "-"  + year;
    
 });

   


   
    //todo  DATE 
   




    




 
 

 
 
 
 
 
 
 
 
 
 
 
 
 