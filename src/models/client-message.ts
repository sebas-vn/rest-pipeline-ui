export class ClientMessage {
    
    message: string;
    state: boolean

    constructor(message: string) {
        this.message = message;
        this.state = true;
    }
}