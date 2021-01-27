const gameScene= new Phaser.Scene('Game');
var s=0;
var fx;
function myFunction() {
  location.reload();
}
gameScene.preload=function(){
    this.load.image('background', 'assets/sky.jpg');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('balloon', 'assets/ball.png');
    this.load.image('blue', 'assets/blue.png');
    this.load.image('green', 'assets/green.png');
    this.load.image('yellow', 'assets/yellow.png');
    this.load.image('arrow','assets/arrow_new.png');
    this.load.audio('sfx', 'assets/shotgun.wav');
};   
gameScene.create=function(){
    this.background=this.add.image(120,120,'background');
    this.sound.add('sfx');
    this.background.setScale(10,10);
    this.text = this.add.text(300,700, "Your Score:", {
            font: "bold 30px Arial",
            align: "center",
            color: "black"
        });
   this.ball=this.add.sprite(130,140,'ball');
    this.balloon=this.add.sprite(210,140,'yellow');
    this.balloon1=this.add.sprite(290,140,'blue');
     this.balloon2=this.add.sprite(200,280,'green');
    this.balloon3=this.add.sprite(210,400,'blue');
    this.balloon4=this.add.sprite(130,350,'green');
    this.balloon5=this.add.sprite(290,370,'balloon');
    this.balloon6=this.add.sprite(130,400,'yellow');
    
    // this.ball=this.add.sprite(150,180,'ball',{align:"center"});
     this.ball.setScale(0.5,0.5);
    this.balloon.setScale(0.5,0.5);
     this.balloon1.setScale(0.5,0.5);
     this.balloon2.setScale(0.5,0.5);
    this.balloon3.setScale(0.5,0.5);
    this.balloon4.setScale(0.5,0.5);
    this.balloon5.setScale(0.5,0.5);
    this.balloon6.setScale(0.5,0.5);
    this.physics.add.existing(this.ball);
    this.physics.add.existing(this.balloon);
    this.physics.add.existing(this.balloon1);
    this.physics.add.existing(this.balloon2);
    this.physics.add.existing(this.balloon3);
    this.physics.add.existing(this.balloon4);
    this.physics.add.existing(this.balloon5);
    this.physics.add.existing(this.balloon6);
    this.arrow=this.add.sprite(130,800,'arrow');
    this.arrow.angle=45;
    this.physics.add.existing(this.arrow);
    
    this.move=true;
    this.physics.add.collider(this.ball, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon1, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon2, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon3, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon4, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null,this);
    this.physics.add.collider(this.balloon5, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    this.physics.add.collider(this.balloon6, this.arrow, (ball, arrow) => {
        this.sound.play('sfx');
    ball.destroy();
        s=s+1;
        this.text.setText("Your score: "+s);
        console.log('s',s);
        this.arrow.body.velocity.set(0,-1000);
}, null, this);
    
    //  this.physics.add.existing(this.ball);
   
};
        gameScene.update=function(){
            if(this.input.activePointer.isDown)
               
                {
                    if(this.move)
                        {
                          this.arrow.body.velocity.set(0,-1000);
                            
                            console.log(this.arrow.x);
                            if(this.arrow.x<200)
                                {
                                    this.arrow.x=130;
                                    this.arrow.y=800;
                                }
                            
                        }
                    
                }
             
            this.ball.x+=3;
            if(this.ball.x>800)
                {
                    this.ball.x=-150;
                }
            this.balloon1.x+=2;
            if(this.balloon1.x>800)
                {
                    this.balloon1.x=-150;
                }
           this.balloon.x+=5;
            if(this.balloon.x>800)
                {
                    this.balloon.x=-150;
                }
            this.balloon2.x+=4;
            if(this.balloon2.x>700)
                {
                    this.balloon2.x=-150;
                }
            this.balloon3.x+=3;
            if(this.balloon3.x>500)
                {
                    this.balloon3.x=-150;
                }
            
             this.balloon4.x+=5;
            if(this.balloon4.x>800)
                {
                    this.balloon4.x=-150;
                }
            this.balloon5.x+=3;
            if(this.balloon5.x>900)
                {
                    this.balloon5.x=-150;
                }
            if(s==8)
        {
            console.log("game over");
            this.text.setText("Your score: "+s+" You won!");
        }
   
        };
        window.onload = function() {     
    
        let config={
            type:Phaser.AUTO,
            width:700,
            height:950,
            scene: gameScene,
            physics:{
                default: 'arcade',
                arcade:{
                    gravity:{y: 0},
                    debug:false
                }
            }
        }
        const game=new Phaser.Game(config);
        // this.scene.start('background');
        window.focus();
        resize();
        window.addEventListener("resize", resize, false);
    }
    function resize() {
        var canvas = document.querySelector("canvas");
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio = 640 / 450;
        if(windowRatio < gameRatio){
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        }
        else{
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }