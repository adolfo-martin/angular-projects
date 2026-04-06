import { PhysicalAddress } from "./physical-address.model.ts";
import { Port } from "./port.model.ts";
import { Switch, SwitchException } from "./switch.model.ts";

export class WireSwitch extends Switch {

    public constructor(addresses: PhysicalAddress[]) {
        super();

        try {
            for (const address of addresses) {
                const port = new Port(address);
                this.ports.push(port);
            }
        } catch (error) {
            new SwitchException('Problem with address into WireSwitch.constructor().')
        }
    }
}