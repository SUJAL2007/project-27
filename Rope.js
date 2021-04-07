class Rope{
constructor(body1,body2,offsetX,offsetY)
  {
      this.offsetX=offsetX;
      this.offsetY=offsetY;
       
      var smb = 
      {
          bodyA :body1,
          bodyB :body2,
            
          pointB:{x:this.offsetX,y:this.offsetY}
       }

      this.rope=Matter.constraint.create(smb);
      World.add(world,rope);


   display()
   {
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

       



   }


  }

}