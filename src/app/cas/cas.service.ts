import { Cas } from './cas.model';
import { EventEmitter, Output } from '@angular/core';

export class CasService {

    c_cpp_desc = `
        <h4>Ispit programiranja</h4>
        <p>
            Sa vise godina iskustva u drzanju casova i mnostvom zadovoljnih studenata sa etfa, a i drugih fakulteta
            sa pouzdanjem smatramo da je sasvim izvjesto da cete poloziti Programiranje[1-2] :))
        </p>
        <h4>Domaci i projekti</h4>
        <p>
            U skripcu ste sa vremenom a uzdate se u svoje znanje da mozete valjano razumjeti i prezentovati
            tudji kod? Odlicno! Radimo i domace i projekte.
        </p>
        <h4>Ostalo</h4>
        <p>
            Ukoliko pak, iz bilo kod drugog razloga radite ovaj jezik (igrice, POSIX, neki drugi ispit)
            ponovo ste dobrodosli! Mada se prethodne konsultacije o sadrzaju casova neophodne.
        </p>
    `;

    java_desc = `
        Java je strava :))) Naucite oop bla bla bla...
    `;

    web_desc = `
    <p>Bilo da je za fax, za prvo iskustvo idt iz zelje profesionalnog usavrsavanja,
    napor ulozen u web, zbog njegove sveprisutnosti, ne moze biti suvisan!</p>
    <h3>Teme:</h3>
    <dl>
        <dt>JavaScript</dt>
            <dd> core jezika i novi standardi - asinhrono programiranje i ostalo</dd>
        <dt>frontend</dt>
            <dd>html, css, js, jquery, ajax - http, bootstrap</dd>
        <dt>angular</dt>
        <dt>backend</dt>
        <dd>nodejs, express, socket, ...</dd>
        <dt>studijski programi</dt>
        <dt>ostalo - po dogovoru<dt>
    </ul>
    `;

    casovi: Array<Cas> = [
        new Cas('c', 'C/C++', 'https://i.ytimg.com/vi/zLpaYVIoXqc/hqdefault.jpg', this.c_cpp_desc),
        new Cas('java', 'Java', 'https://ubisafe.org/images/java-vector-icon-4.png', this.java_desc),
        new Cas('web', 'Web programiranje', 'https://waynengwrites.com/wp-content/uploads/2017/07/www.png', this.web_desc)
      ];
    @Output()
    selectedCas = new EventEmitter<Cas>();
    selectedCasVal: Cas;


    getCasovi() {
        return this.casovi;
    }
    getSelected() {
        return this.selectedCasVal;
    }
    selectCas(cas: Cas) {
        this.selectedCas.emit(cas);
        this.selectedCasVal = cas;
    }
    selectByName(name: string) {
        switch (name) {
            case 'C/C++':
                this.selectedCas.emit(this.casovi[0]);
                this.selectedCasVal = this.casovi[0];
                break;
                case 'Java':
                this.selectedCas.emit(this.casovi[1]);
                this.selectedCasVal = this.casovi[1];
                break;
                case 'Web programiranje':
                this.selectedCas.emit(this.casovi[2]);
                this.selectedCasVal = this.casovi[2];
                break;
                default: throw new Error(`Invalid name ${name} for cas`);
            }
        }
        selectByUrl(urlParam: string) {
            switch (urlParam) {
            case 'c':
                this.selectedCas.emit(this.casovi[0]);
                this.selectedCasVal = this.casovi[0];
                break;
            case 'java':
                this.selectedCas.emit(this.casovi[1]);
                this.selectedCasVal = this.casovi[1];
                break;
            case 'web':
                this.selectedCas.emit(this.casovi[2]);
                this.selectedCasVal = this.casovi[2];
            break;
    }
}
}
