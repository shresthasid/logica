class DigitalRootFinder {
    constructor(num,digitalRootNumber = null,logging = false) {
        this.num = num; // number, letters, array numbers
        this.digitalRootNumber = digitalRootNumber;
        this.logging = logging;
    }
  
    calcNumberDigitalRoot(){
        if(typeof this.num != 'number'){
            console.log('Supplied type is not a Number!');
            return false;
        }
        if(this.logging){    
            console.log('Summing up all the digits to find the digital root number of: '+ this.num);
        }
        let digitalRoot= 0;
        
        let splitNum = this.num.toString();
        let finalNum = [...splitNum+''].map(n=>+n);
        
        digitalRoot = finalNum.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
        
        if(digitalRoot >= 10){
            this.num = digitalRoot;
            digitalRoot = this.calcNumberDigitalRoot();
        }
        
        return digitalRoot;
    }
  
    calcArrayDigitalRoot(){
        let arrCheck = Array.isArray(this.num);
        
        if(!arrCheck){
            console.log('Supplied type is not Array!');
            return false;
        }
            
        let arrNum = this.num;
        // num = 19
        if(this.logging){
            console.log('Collaboratively summing up to find the digital root number of: '+ arrNum.toString());
        }
        let digitalRoot= 0;
        
        digitalRoot = arrNum.reduce( (previousValue, currentValue) => previousValue + currentValue, 0 );
        
        if(digitalRoot >= 10){
            this.num = digitalRoot;
            digitalRoot = this.calcNumberDigitalRoot();
        }
        
        return digitalRoot;
    }
  
    individualNameDigitalRoot(){
        const alpha = Array.from(Array(26)).map((e,i) => i + 65);
        const alphabet = alpha.map((x) => String.fromCharCode(x));
        if(this.logging){
            console.log('Breaking letters from name to find the digital root number of: '+ this.num);
        }
      
        let nameArray = [...this.num.toUpperCase()+'']; //force the string to uppercase
        
        let arrNumber2 = nameArray.map((e) => alphabet.indexOf(e)+1);   //since alphabet array starts from literal 0th number
        
        let digitalRoot= 0;
        
        digitalRoot = arrNumber2.reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
        
        if(digitalRoot >= 10){
            this.num = digitalRoot;
            digitalRoot = this.calcNumberDigitalRoot();
        }
        return digitalRoot;
    }
    
    numbersEndingWithDigitalRoot(){
        let maxNumber = this.num;
        if(maxNumber <= 10){
            console.log('Please input number greater than 10');
            return false;
        }
        if(this.digitalRootNumber <= 0 || this.digitalRootNumber >= 10){
            console.log('Please select the digital root number between 1 and 9');
            return false;
        }
        let result = [];
        for(var i = 0; i <= maxNumber; i++){
            this.num = i;
            let res = this.calcNumberDigitalRoot();
            if(res === this.digitalRootNumber){
               result.push(i);
            }
        }
        return result;
    }
}

/** // OUTPUT **/
const digitalRoot = new DigitalRootFinder('asdf');
console.log(digitalRoot.calcNumberDigitalRoot());

const digitalRoot2 = new DigitalRootFinder([10,15,8,14,4,15,5],null,true);
console.log(digitalRoot2.calcArrayDigitalRoot());

const digitalRoot3 = new DigitalRootFinder('JOHNDOE');  // UPPERCASE 
console.log(digitalRoot3.individualNameDigitalRoot());

const digitalRoot4 = new DigitalRootFinder('johndoe',null,true);  // LOWERCASE
console.log(digitalRoot4.individualNameDigitalRoot());

const nikolaNumber = new DigitalRootFinder(50,9);
console.log(nikolaNumber.numbersEndingWithDigitalRoot());
