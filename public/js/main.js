
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event)=>{
    event.preventDefault(); //to stop refreshing the page after oking alert
    
    let cityval = cityName.value;

    if(cityval==="")
    {
      city_name.innerText = `Enter a city name first`;
      datahide.classList.add('data_hide');
     
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7671e802438983bcbdaef3f81c041041`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood=="Clear")
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style=color:#eccc68;'></i>";
            }else if(tempMood=="Clouds")
            {
                temp_status.innerHTML = "<i class='fas fa-cloud' style=color:#f1f2f6;'></i>";
            }else if(tempMood=="Rain")
            {
                temp_status.innerHTML = "<i class='fas fa-rain' style=color:#a4b0be;'></i>";
            }else
            {
                temp_status.innerHTML = "<i class='fas fa-sun' style=color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
            

        }catch{
            city_name.innerText = `Enter a valid city name`;
            datahide.classList.add('data_hide');
            
        }

        
        
    }

}
submitBtn.addEventListener('click', getInfo);

const getcurrentdate = ()=>{

    let weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thrusday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    let monthday = new Array(12);
    monthday[0]="January";
    monthday[1]="February";
    monthday[2]="March";
    monthday[3]="April";
    monthday[4]="May";
    monthday[5]="June";
    monthday[6]="July";
    monthday[7]="August";
    monthday[8]="September";
    monthday[9]="October";
    monthday[10]="November";
    monthday[11]="December";

    var currenttime = new Date();
    var days = weekday[currenttime.getDay()];
    var date = currenttime.getDate();
    var month = currenttime.getMonth()+1;
    var year = currenttime.getFullYear();
    const day = document.getElementById("day");
    const today_date = document.getElementById("today_date");
    
    day.innerText = `${days}`;
    today_date.innerText = `${date}/${monthday[month-1]}`;
    }
    
    
    getcurrentdate();
