const canvas = document.querySelector('canvas');
const cntxt = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y

        this.radius = radius
        this.color = color
 }
 draw() {
     cntxt.beginPath()
     cntxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
     cntxt.fillStyle = this.color
     cntxt.fill()
 }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
   }
   draw() {
    cntxt.beginPath()
    cntxt.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    cntxt.fillStyle = this.color
    cntxt.fill()
}
  }

const x = canvas.width / 2
const y = canvas.height / 2
const player = new Player(x, y, 30, 'blue')
player.draw()



addEventListener('click', (event) => {

    const projectile = new Projectile(event.clientX, event.clientY, 5, 'red', null)
    projectile.draw()   
})