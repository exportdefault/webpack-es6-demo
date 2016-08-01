export default class Module {
    constructor(name) {
        this.name = name;
        console.log('Initialization entity of Module class');
    }
    toString() {
        return this.name;
    }
}