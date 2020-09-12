
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
            secs = 60;
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

    }

    saveToStorage(){

    }
  };
