function studentGrading(){ 
    let score =prompt("Enter score") 
    let grade; 
    // const msg= function(grade){ 
        // return `you Grade is'{grade}` 
    // } 
    if(score >=0 && score <= 100){ 
        if(score >= 79){ 
            grade ='A' 
        } 
        else if(score >59 && score <79){ 
            grade ='B' 
        } 
        else if(score >39 && score <49){ 
            grade ='C' 
        } 
        else if(score <40){ 
            grade ='D' 
        } 
        else{ 
            grade ='E' 
        } 
         
    document.body.innerHTML=`you Grade is ${grade}` 
    } 
    else { 
        document.body.innerHTML="invalid Score" 
    } 
    } 
    studentGrading()
   