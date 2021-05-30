
function Fractal(config) {
    this.listItemSymbols = [
        'minus', 'spade', 'heart', 'blub', 'diamond', 'hash', 'star', 'sun', 'cloud', 'rain', 'snow', 'finger', 'skull', 'smile', 'coffee', 'baseball', 'airplane', 'peace', 'unicorn'
    ]

    this.getRandomArbitrary = function(min, max) {
        return Math.random() * (max - min) + min;
    }

    this.getRandomArrayItem = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    this.getRandomRGBValueAsArray = function() {
        return [
            this.getRandomArbitrary(0, 255),
            this.getRandomArbitrary(0, 255),
            this.getRandomArbitrary(0, 255)
        ]
    }

    this.getRandomRGBValue = function() {
        return `rgb(
            ${this.getRandomArbitrary(0, 255)}, ${this.getRandomArbitrary(0, 255)}, ${this.getRandomArbitrary(0, 255)}
        )`;
    }

    this.setHeadlines=function(){
        const randomH1Value = this.getRandomArbitrary(32, 38);
        h1Headlines = document.getElementsByTagName("h1");

        Array.from(h1Headlines).forEach(child => {
            child.style.fontSize = `${randomH1Value}px`;
        });
    }

    this.setParagraphs=function() {
        const randomH1Value = this.getRandomArbitrary(16, 22);
        paragraphs = document.getElementsByTagName("p");

        Array.from(paragraphs).forEach(child => {
            child.style.fontSize = `${randomH1Value}px`;
        });
    }

    this.setHeaders=function(hasPadding, header) {
        headers = document.getElementsByClassName("fractal-header");
        const randomPaddingValue = this.getRandomArbitrary(5, 8);
        newBackgroundColor = [];
        let newBackgroundColorValue = '';

        if(header.gradient) {
            newBackgroundColorValue= `linear-gradient(to right,
                ${this.getRandomRGBValue()}, ${this.getRandomRGBValue()})`;
        } else if (header.gradient === undefined) {
            if (header.backgroundColor) {
                newBackgroundColor = this.getRandomRGBValueAsArray();
            }
            
            if(header.backgroundColor !== undefined && Array.isArray(header.backgroundColor)) {
                const firstValue = header.backgroundColor[0];
                const secondValue = header.backgroundColor[1];
                const thirdValue = header.backgroundColor[0];
    
                const newFirstValue = this.getRandomArbitrary(firstValue -10, firstValue + 10);
                const newSecondValue = this.getRandomArbitrary(secondValue -10, secondValue + 10);
                const newThirdValue = this.getRandomArbitrary(thirdValue -10, thirdValue + 10);
                newBackgroundColor[0] = newFirstValue > 0 ? newFirstValue : 0;
                newBackgroundColor[1] = newSecondValue > 0 ? newSecondValue : 0;
                newBackgroundColor[2] = newThirdValue > 0 ? newThirdValue : 0;
            } 

            newBackgroundColorValue = `rgb(${newBackgroundColor[0]}, ${newBackgroundColor[1]}, ${newBackgroundColor[2]})`;
        }


        Array.from(headers).forEach(child => {
            child.style.background = newBackgroundColorValue;

            if(hasPadding !== undefined) {
                child.style.padding = `${randomPaddingValue}px`;
            }

            const h1Headlines = child.getElementsByTagName("h1");

            Array.from(h1Headlines).forEach(child => {
                child.style.color = 'white';
            });
        });
    }

    this.setLists=function() {
        document.documentElement.style.setProperty('--listStyleType', 'px')
        lists = document.getElementsByClassName('fractal-list');

        Array.from(lists).forEach(list => {
            let liItems = list.getElementsByTagName("li");
            var newlist = document.createElement('ul');
            var listItemSymbol = this.getRandomArrayItem(this.listItemSymbols);
            
            Array.from(liItems).forEach(li => {
                let newItem = document.createElement('li');
                newItem.innerHTML = li.innerHTML;
                newItem.classList.add(listItemSymbol);

                newlist.appendChild(newItem);
            });
            list.innerHTML = newlist.innerHTML;            
        });

    }

    this.init = function(){
        if (config.h1) {
            this.setHeadlines();
        }

        if (config.p) {
            this.setParagraphs();
        }
        
        if (config.header !== undefined) {
            this.setHeaders(config.header.padding, config.header);
        }

        
        this.setLists();
    }
}