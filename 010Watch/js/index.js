class Clock {
  constructor() {
    this.fullDate = new Date();
    this.delay = this.fullDate.getSeconds();

    this.dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    this.monthArr = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    this.dateText = document.querySelector(".date");
    this.timeText = document.querySelector(".time");
    this.arc = document.querySelector(".arc");
    this.arcBefore = document.querySelector(".before");
    this.arcAfter = document.querySelector(".after");

    this.arc.style.animationDelay = `-${this.delay}s`;
    this.arcBefore.style.animationDelay = `-${this.delay}s`;
    this.arcAfter.style.animationDelay = `-${this.delay}s`;

    this.updateTime = () => {
      this.fullDate = new Date();
    
      this.day = this.dayArr[this.fullDate.getDay()];
      this.date = this.fullDate.getDate();
      this.month = this.monthArr[this.fullDate.getMonth()];
      this.year = this.fullDate.getFullYear();
    
      this.hour = this.fullDate.getHours();
      this.minute = this.fullDate.getMinutes();
      this.second = this.fullDate.getSeconds();
    
      this.dateText.textContent = `${this.day} ${this.date<10? "0"+this.date : this.date} ${this.month} ${this.year}`;
      this.timeText.textContent = `${this.hour<10? "0"+this.hour : this.hour}:${this.minute<10? "0"+this.minute : this.minute}`;
    };

    this.updateTime();  

    setInterval(this.updateTime, 1000);

    document.querySelector(".frame").style.display = "block";
  }
}

new Clock();

