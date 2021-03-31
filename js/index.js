/*

Создать 2 класса для управления самолетами (2 вида МИГ, ТУ-154), 
Самолеты имеют методы: взлет, посадка, с одинаковой реализацией.
Свойства: название самолета, максимальная скорость. Значения можно определить при создание самолета.
Для самолета типа МИГ реализовать дополнительный метод "Атака".
Добавить возможность получить статус состояния самолета, находится он в воздухе или на земле. 

*/

class Plane {
  name;
  maxspeed;
  #status = false;
  constructor(name, maxspeed) {
    this.name = name;
    this.maxspeed = maxspeed;
  }

  Rise() {
    this.#status = true;
    console.log("Самолет " + this.name + " взлетел.");
  }

  Land() {
    this.#status = false;
    console.log("Самолет " + this.name + " сел.");
  }

  GetFlightStatus() {
    console.log(
      ("Самолет " + this.name) + (this.#status
        ? " находится в воздухе"
        : " на земле")
    );
    return this.#status;
  }
}

class MIG extends Plane {
  constructor(maxspeed) {
    super("МИГ", maxspeed);
  }
  Attack(){
    if(this.GetFlightStatus()) {
    console.log((Math.random()>0.7)?("Самолет "+ this.name+" попал в цель!"):("Самолет "+ this.name+" промахнулся."));
    }
    else{
      console.log("Самолет "+ this.name+" не может стрелять пока находится на земле");
    }
  }
}

class TU_154 extends Plane {
  constructor(maxspeed) {
    super("ТУ-154", maxspeed);
  }
}

window.onload = function(e) {
  const plane1 = new MIG(800);
  const plane2 = new TU_154(600);
  const plane3 = new Plane("Unknown plane", 200);

  plane1.GetFlightStatus();
  plane1.Rise();
  plane1.GetFlightStatus();
  plane1.Land();
  plane1.GetFlightStatus();
  plane1.Attack();
  plane1.Rise();
  plane1.Attack();
  plane1.Attack();
  plane1.Attack();
  plane2.Rise();
  plane2.GetFlightStatus();
  plane3.Rise();
  plane3.GetFlightStatus();
}