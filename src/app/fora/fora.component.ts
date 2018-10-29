import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fora',
  templateUrl: './fora.component.html',
  styleUrls: ['./fora.component.css']
})
export class ForaComponent implements OnInit {

  msg = 'Ovdje ide promotivni teks - popust i picke materine...Kad ima...Kad nema ... JEBIGA! Samo guras kontenjere';
  private animationStep = 1;
  private intervalID;

  constructor() {
  }

  ngOnInit() {
    this.startAnimation();
  }

  startAnimation() {
    this.intervalID =  setInterval(() => {
      this.animationStep++;
      if (this.animationStep % this.msg.length === 0) {
        clearInterval(this.intervalID);
        this.intervalID = undefined;
        setTimeout(() => {
          this.startAnimation();
          this.animationStep = 0;
        }, 5000);
      }
    }, 50);
  }

  getMsg() {
    return this.msg.substring(0, this.animationStep);
  }

}
