const gameScene= new Phaser.Scene('Game');
function myFunction() {
  location.reload();
}
gameScene.preload=function(){
    this.load.image('background', 'assets/background_new.png');
    this.load.image('ball', 'assets/ball.png');
    this.load.image('balloon', 'assets/ball.png');
    this.load.image('arrow','assets/arrow_mod.png');
};   
gameScene.create=function(){
    this.background=this.add.image(120,120,'background');
    this.background.setScale(10,10);
   this.ball=this.add.sprite(130,140,'ball');
    this.balloon=this.add.sprite(210,140,'balloon');
    this.balloon1=this.add.sprite(290,140,'balloon');
     this.balloon2=this.add.sprite(200,280,'balloon');
    this.balloon3=this.add.sprite(210,400,'balloon');
    this.balloon4=this.add.sprite(130,350,'balloon');
    this.balloon5=this.add.sprite(290,370,'balloon');
    this.balloon6=this.add.sprite(130,400,'balloon');
    
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
    this.physics.add.existing(this.arrow);
    
    this.move=true;
    this.physics.add.collider(this.ball, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon1, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon2, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon3, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon4, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null,this);
    this.physics.add.collider(this.balloon5, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
    this.physics.add.collider(this.balloon6, this.arrow, (ball, arrow) => {
    ball.destroy();
}, null, this);
   
    //  this.physics.add.existing(this.ball);
   
};
        gameScene.update=function(){
            if(this.input.activePointer.isDown)
                {
                    if(this.move)
                        {
                          this.arrow.body.velocity.set(170, -500);
                            console.log(this.arrow.x);
                            if(this.arrow.x>200)
                                {
                                    this.arrow.x=130;
                                    this.arrow.y=800;
                                }
                            
                        }
                    
                }
             
            this.ball.x+=2;
            if(this.ball.x>900)
                {
                    this.ball.x=-150;
                }
           this.balloon.x+=3;
            if(this.balloon.x>900)
                {
                    this.balloon.x=-150;
                }
            this.balloon2.x+=1;
            if(this.balloon2.x>900)
                {
                    this.balloon2.x=-150;
                }
            this.balloon3.x+=0.5;
            if(this.balloon3.x>900)
                {
                    this.balloon3.x=-150;
                }
            
             this.balloon4.x+=0.3;
            if(this.balloon4.x>900)
                {
                    this.balloon4.x=-150;
                }
            this.balloon5.x+=0.3;
            if(this.balloon5.x>900)
                {
                    this.balloon5.x=-150;
                }
        };
        window.onload = function() {     
    
        let config={
            type:Phaser.AUTO,
            width:1000,
            height:1000,
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