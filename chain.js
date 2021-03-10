class Chain{
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 250,
    };

    this.pointB = pointB;
    this.Chain = Constraint.create(options);
    World.add(world, this.rope);
  }
  attach(body) {
    this.Chain.bodyA = body;
  }

  fly() {
    this.Chain.bodyA = null;
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.Chain.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(48, 22, 8);
      strokeWeight(3);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}
    