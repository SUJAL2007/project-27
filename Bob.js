class Bob {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':2,
          'friction':0,
          'density':6.6
      }
      
      this.body = Bodies.circle(x, y,25, options);
      World.add(world, this.body);

    }
    
    display(){
      push(); 
      Fill("pink");
       ellips( this.body.position.x,this.body.position.y,25,25); 
       pop();
    }
  };
  