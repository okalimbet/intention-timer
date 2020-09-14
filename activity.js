
class Activity {
    constructor(category, description, minutes, seconds, completed=false, id=Date.now()){
      this.category = category;
      this.description = description;
      this.minutes = minutes;
      this.seconds = seconds;
      this.completed = completed;
      this.id = id;
    }

    startTimer() {
        var secs = this.seconds;
        var mins = this.minutes;
        roundBtn.disabled = true;
        function tick() {
          var current_minutes = mins
          secs--;
          userTimeInput.innerHTML = (mins < 10 ? "0" : "") + String(current_minutes) + ":" + (secs < 10 ? "0" : "") + String(secs);
          if( secs > 0 ) {
            setTimeout(tick, 1000);
          }
          else if(secs === 0 && mins > 0) {
            secs = 59;
            mins--;
            setTimeout(tick, 1000);
          }
          else if(mins > 1) {
              startCountDownTimer(mins-1);
          }
          else {
              displayCompleteMessage();
          }
        }
        tick();
    }

    markComplete(){
      var ul = document.querySelector('ul');
      var li = document.createElement('li');
      roundBtn.disabled = false;
      var activityCardBlock =
       `
         <li id=${this.id}><div class="card">
           <label id="card-category">${this.category}</label>
           <label id="card-time">${this.minutes} MIN ${this.seconds} SECONDS</label>
           <label id="card-description">${this.description}</label>
         </div>
         <div class="color-indicator" style="background-color: ${[color]};"></div>
         </li>
        `
      ul.insertAdjacentHTML("afterbegin", activityCardBlock);
      this.completed = true;
}

    saveToStorage(){

    }
  };
