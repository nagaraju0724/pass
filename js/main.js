const dayElement = document.getElementById("day");
const monthElement= document.getElementById("month");
const yearElement = document.getElementById("year");



const invalidDate = (element,message,limitValue=0) => {
    console.log(element);
    element.addEventListener("change",() => {
        value = parseInt(element.value);
        value2 = element.value;
        if(limitValue ==='year'){
            if(value2 !== ''){
                if(!checkInputType(value2)){
                    
                    alert(message);
                    element.value = ''
        
                } 
            }
        }
        else{
            if(value2 !== ''){
        if(!checkInputType(value) || value>limitValue){
            
            alert(message);
            element.value = ''
            

        }
    }
    }


    });
};

invalidDate(dayElement,"Invalid day input",31);
invalidDate(monthElement,"Invalid month input",12);
invalidDate(yearElement,"Invalid year input","year");


document.getElementById("calcAge").addEventListener("click", function (event) {

    const day = (dayElement.value);
    const month= (monthElement.value);
    const year = (yearElement.value);
    console.log(day,month,year);
    const startDateStr = `${year}-${month}-${day}`;
    console.log(startDateStr);
    if(checkInputType(day) && checkInputType(month) && checkInputType(year)){
        const datee = age_calc(startDateStr)
    console.log(datee);
    changeDate(datee)
    }
    else{
        alert("Please enter valid date");
    }
    

   
    

});

const checkInputType = (input) =>{
    value = parseInt(input);
    if(Number.isInteger(value)){
        return true;
}
else{
    return false;
}
}


const changeDate  = (datee) => {

    document.getElementById("days").textContent = datee.days;
    document.getElementById("months").textContent = datee.months;
    document.getElementById("years").textContent = datee.years;
};
const age_calc = (startDateStr) => {

    const today = new Date();
    const tday = today.getDate();
    const tmonth = today.getMonth();
    const tyear = today.getFullYear();
    console.log(tday,tmonth,tyear);
    const endDateStr = `${tyear}-${tmonth}-${tday}`;

    const firstDate = new Date(startDateStr);
    const secondDate = new Date(endDateStr);
  
    // Calculate the time difference in milliseconds
    const timeDiff = Math.abs(secondDate.getTime() - firstDate.getTime());
  
    // Calculate days, months, and years
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.4375); // Average days per month
    const years = Math.floor(months / 12);
  
    return {
      days,
      months,
      years
    };



};

// document.getElementById("day").addEventListener("change", function (event) {
//     const day = event.target.value;
//     console.log(day)
//     // month= document.getElementById("month").value
//     // year = document.getElementById("year").value
//     if(typeof(day) === "string"){
//         alert("Please enter");
//     }

// });