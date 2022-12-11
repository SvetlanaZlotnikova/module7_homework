function ElectricalAppliances(power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
    this.getPower = function(){
      console.log(`Power is ${power} W`)
    }
  }
  
  const lamp = new ElectricalAppliances(60);
  const laptop = new ElectricalAppliances(150);
  
  lamp.getPower()
  laptop.getPower()

  ElectricalAppliances.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
  }
  
  ElectricalAppliances.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
  }

  console.log(lamp.getPowerUsed() + laptop.getPowerUsed());
  
  lamp.plugIn();
  console.log(lamp.getPowerUsed() + laptop.getPowerUsed());
  
  laptop.plugIn();
  console.log(lamp.getPowerUsed() + laptop.getPowerUsed());

  