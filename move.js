const rockImage = document.getElementById('rock')
const paperImage = document.getElementById('paper')
const scissorImage = document.getElementById('scissor')

const randomImage = ['rock.png', 'paper.png', 'scissors.png']

function randomNum () {
    let computer = Math.floor(Math.random() * 3);
    document.getElementById('computerSelection').src = randomImage[computer]
    window.computerOption = computer;
}


let x = 0;
let y = 0;

rockImage.addEventListener('click', () => {

    document.getElementById('playerSelection').src = 'rock.png';
    randomNum ();

    if (computerOption === 2) {
        x += 1;
        document.getElementById('score').textContent = x;

        setTimeout(() => {
            if (x===5) 
            alert('YOU WON!')
         
        }, 100);
        
    }

    else if (computerOption === 1) {
        y += 1;
        document.getElementById('other-score').textContent = y;

        setTimeout(() => {
          
        if (y===5) 
            alert('YOU LOST!')
            
        }, 100);
        
    }
    }
)

paperImage.addEventListener('click', () => {

    document.getElementById('playerSelection').src = 'paper.png';
    randomNum ();

    if (computerOption === 0) {
        x += 1;
        document.getElementById('score').textContent = x;

        setTimeout(() => {
            if (x===5) 
            alert('YOU WON!')
         
        }, 100);
    }

    else if (computerOption === 2) {
        y += 1;
        document.getElementById('other-score').textContent = y;

        setTimeout(() => {
          
            if (y===5) 
                alert('YOU LOST!')
                
            }, 100);
    }

})

scissorImage.addEventListener('click', () => {
   
    document.getElementById('playerSelection').src = 'scissors.png';
    randomNum ();

    if (computerOption === 1) {
        x += 1;
        document.getElementById('score').textContent = x;

        setTimeout(() => {
            if (x===5) 
            alert('YOU WON!')
         
        }, 100);
    }

    else if (computerOption === 0) {
        y += 1;
        document.getElementById('other-score').textContent = y;

        setTimeout(() => {
          
            if (y===5) 
                alert('YOU LOST!')
                
            }, 100);
    }

  
})





