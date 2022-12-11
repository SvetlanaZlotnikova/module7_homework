 class Parent {
    constructor(ownName) {   
    this.ownName = ownName;
    this.isPlugged = true;
      }
       getInfo() {
    return 'I have a laptop' + this.ownName;
      }
    }
    
   class Child extends Parent {
    constructor(isElectricalAppliances, name, ownName){
        super(ownName);
        this.isElectricalAppliances = isElectricalAppliances;
        this.name = isElectricalAppliances ? name : ownName;
 }	
 getInfo() {
    if (this.isElectricalAppliances) {
        return 'I have a laptop '+ this.name 
 } else {
   return super.getInfo();
 }
}
}
const ElectricalAppliances = new Child(true, 'Acer')
console.log(ElectricalAppliances.getInfo())