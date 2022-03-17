class DigitalRootFinder {
    constructor(num) {
        this.num = num; // number, letters, array numbers
    }
  
    calcNumberDigitalRoot(){
        if(typeof this.num != 'number'){
            console.log('Supplied type is not a Number!');
            return false;
        }
            
        console.log('Summing up all the digits to find the digital root number of: '+ this.num);
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
        console.log('Collaboratively summing up to find the digital root number of: '+ arrNum.toString());
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
        
        console.log('Breaking letters from name to find the digital root number of: '+ this.num);
      
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
}

/** // OUTPUT **/
const digitalRoot = new DigitalRootFinder('asdf');
console.log(digitalRoot.calcNumberDigitalRoot());

const digitalRoot2 = new DigitalRootFinder([10,15,8,14,4,15,5]);
console.log(digitalRoot2.calcArrayDigitalRoot());

const digitalRoot3 = new DigitalRootFinder('JOHNDOE');  // UPPERCASE 
console.log(digitalRoot3.individualNameDigitalRoot());

const digitalRoot4 = new DigitalRootFinder('johndoe');  // LOWERCASE
console.log(digitalRoot4.individualNameDigitalRoot());
