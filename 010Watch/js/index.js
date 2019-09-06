class Clock {
  constructor() {
    const fullDate = new Date();
    const delay = fullDate.getSeconds();

    const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const dateText = document.querySelector(".date");
    const timeText = document.querySelector(".time");
    const arc = document.querySelector(".arc");
    const arcBefore = document.querySelector(".before");
    const arcAfter = document.querySelector(".after");

    arc.style.animationDelay = `-${delay}s`;
    arcBefore.style.animationDelay = `-${delay}s`;
    arcAfter.style.animationDelay = `-${delay}s`;

    const updateTime = () => {
      const fullDate = new Date();
    
      const day = dayArr[fullDate.getDay()];
      const date = fullDate.getDate();
      const month = monthArr[fullDate.getMonth()];
      const year = fullDate.getFullYear();
    
      const hour = fullDate.getHours();
      const minute = fullDate.getMinutes();
    
      dateText.textContent = `${day} ${date<10? "0"+date : date} ${month} ${year}`;
      timeText.textContent = `${hour<10? "0"+hour : hour}:${minute<10? "0"+minute : minute}`;
    };

    updateTime();  

    setInterval(updateTime, 1000);

    document.querySelector(".frame").style.display = "block";
  }
}

new Clock();

