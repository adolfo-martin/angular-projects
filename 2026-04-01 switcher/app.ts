import { PhysicalAddress } from "./models/physical-address.model.ts";
import { WireSwitch } from "./models/wire-switch.model.ts";

const wireSwitch = new WireSwitch([
    new PhysicalAddress('A1:01:23:45:AB:CD'),
    new PhysicalAddress('B2:01:23:45:AB:CD'),
    new PhysicalAddress('C3:01:23:45:AB:CD'),
    new PhysicalAddress('D4:01:23:45:AB:CD'),
]);

console.log(wireSwitch.toString());