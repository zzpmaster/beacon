import { defineApp } from './application-loader';

class Beacon {
    constructor() {
        console.log('Hello beacon!!')
        defineApp('fistApp', null)
    }

    call() {
        console.log('call');
    }
}

export default Beacon

// export const beacon = new Beacon()