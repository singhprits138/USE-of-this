class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ["Max","Manu","Sahil","Siddhu"]
        this.currentIndex =0;
      // btn.addEventListener('click', this.addName.bind(this)); // alternative
        btn.addEventListener('click', () => {
             console.log(this);
            this.addName();
        });
    }

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentIndex]);
        this.currentIndex++;
        if(this.currentIndex >= this.names.length){
            this.currentIndex = 0;
        }

    }
}

const gen = new NameGenerator();