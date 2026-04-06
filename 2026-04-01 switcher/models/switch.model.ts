import { Port } from "./port.model.ts";

export class Switch {
    protected ports = [] as Port[];

    public toString() {
        let ports: string = '';
        this.ports.forEach(port => ports += `'${port.address}'`);
        return `[Switch ${ports}]`;
    }
}


export class SwitchException extends Error {
    public constructor(message: string) {
        super('[SwitchException] cause: ' + message + '.');        
    }
}