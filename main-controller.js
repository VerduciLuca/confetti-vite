import confetti from "canvas-confetti";

export class MainController{

    constructor(){

    }

    render(){
        const mainContainer= document.getElementById('main-container')
        mainContainer.innerHTML=''

        const button1 = document.createElement('button')
        button1.appendChild(document.createTextNode('Fire 1'))
        button1.addEventListener('click', () => {
            console.log('fire 1');
            confetti({
                particleCount: 100,
                spread: 180,
                origin: { y: 0.5 }
            });
        })
        mainContainer.appendChild(button1)

        const button2 = document.createElement('button')
        button2.appendChild(document.createTextNode('Fire 2'))
        button2.addEventListener('click', () => {
            console.log('fire 2');
            var count = 200;
            var defaults = {
                origin: { y: 0.5 }
            };
        
        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }
        
        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
        })
        mainContainer.appendChild(button2)

        const button3 = document.createElement('button')
        button3.appendChild(document.createTextNode('Fire 3'))
        button3.addEventListener('click', ()=> {
            console.log('fire 3');
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
    
    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
    
        if (timeLeft <= 0) {
        return clearInterval(interval);
        }
    
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
        })
        mainContainer.appendChild(button3)
    
        const benchDiv = document.getElementById('bench')
        const img = document.createElement('img')
        img.src = './bench2.png'
        benchDiv.appendChild(img)
        mainContainer.appendChild(benchDiv)
    }

    

}