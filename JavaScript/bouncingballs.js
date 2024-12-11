/*A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)? */

//PREP

//P: Numbers, h, bounce, window
//R: Positive Integer or -1
//E: h=3, bounce = 0.66, window = 1.5, result is

function bouncingBall(h,  bounce,  window) {
    
//Identify variables

if(h <= 0 || bounce <= 0 || bounce >= 1 || window >=h ){
    return console.log(-1)
}

let count = 0 
let currenHeight = h

while( currenHeight > window){
    count++;
    currenHeight *= bounce;
    if(currenHeight > window){
        count++;
    }
}

return console.log(count)
}

bouncingBall(5, 2, 4)