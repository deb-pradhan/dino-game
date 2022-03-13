import React from 'react';
// import styles from '../styles/Game.moule.css';

import styles from '../styles/Login.module.css';

import { useMoralis } from "react-moralis";


function Game() {
    const{logout } = useMoralis();

const dino = document.getElementsById({dino});
const rock = document.getElementsById("rock");
const score = document.getElementById("score");

function jump() {
  dino.classList.add("jump-animation");
  setTimeout(() =>
    dino.classList.remove("jump-animation"), 500);
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump();
  }
})

setInterval(() => {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
  score.innerText++;

  if (rockLeft < 0) {
    rock.style.display = 'none';
  } else {
    rock.style.display = ''
  }

  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    alert("You got a score of: " + score.innerText +
      "\n\nPlay again?");
    location.reload();
  }
}, 50);

  return (
    <div>
        Game is lit man
        <button onClick={logout}>sign out</button>
        <br></br>

        <div id={this.game} className={styles.game} >
            <div id={dino} className={styles.dino}  ></div>
            <div id={rock} className={styles.rock} ></div>
        </div>
        <h1 id={this.score} className={styles.score} >0</h1>
        </div>
    
  )
}

export default Game