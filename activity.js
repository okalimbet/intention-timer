
class Activity {
    constructor(category, description, minutes, seconds, completed=false, id=Date.now()){
      this.category = category;
      this.description = description;
      this.minutes = minutes;
      this.seconds = seconds;
      this.completed = completed;
      this.id = id;
    }

    startTimer(){

    }

    markComplete(){

    }

    saveToStorage(){

    }
  };
