export default class Socket {
    constructor(id, name, platform, maximum_cores, maximum_memory, maximum_pci_lines, maximum_power) {
        this.id = id;
        this.name = name;
        this.platform = platform;
        this.maximum_cores = maximum_cores;
        this.maximum_memory = maximum_memory;
        this.maximum_pci_lines = maximum_pci_lines;
        this.maximum_power = maximum_power;
    }
}