export default class TestClassCreation {

    constructor(id, name){
        console.log("In TestClassCreation constructor " + "id: " + id + " name: " + name);
        
        // INSTANCE PROPERTIES: These are now attached to the instance, very common pattern to send information in and save it on the instance
        this.id = id;
        this.name = name;
    }

    // INSTANCE METHOD
    fly(){
        console.log("Drone: " + this.id + " is flying");
    }    

}

// STATIC PROPERTIE, on the class itself (we set it like this, outside the class)
TestClassCreation.maxHeight = 2000;