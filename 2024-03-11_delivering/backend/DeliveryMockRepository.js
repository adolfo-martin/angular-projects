import Packet from "./Packet.js";
import Van from "./Van.js";

export default class DeliveryMockRepository {
    static _vans = [
        new Van('9ed6e9e5-f168-4774-99f2-0acca2de0965', '2193 MBF', 'Ford Transit', 15100, 2457),
        new Van('8d838a17-ee8b-4829-801d-5168d7bfe288', '3515 LJZ', 'Volkswagen Transporter', 5900, 1188),
        new Van('b9f44127-5dda-4b1f-8ba8-621a7fef5720', '7318 JVN', 'Volkswagen Crafter', 16400, 3483),
        new Van('18e58880-41df-43a8-a26e-9644fb6347f4', '2726 KRM', 'Renault Trafic', 4900, 1259),
    ]

    static _packets = [
        new Packet('483b3a34-a9b6-49dd-b07a-a13cdbf92fee', 'Ratón Logitec M185.', 'Calle Mayor, 15, 3B', 1.00, 0.3),
        new Packet('52e99e7d-bbff-4449-9bbb-4b845cdfbbd5', 'Teclado Logitec T250.', 'Alameda Cervantes, 38, 1B', 5.50, 0.5),
        new Packet('c047b249-b8a1-4b42-89e7-1650461fac1a', 'Taza de desayuno Baby-Yoda.', 'Avenida Libertad, 7, 5B', 2.50, 1.0),
        new Packet('363a9f9d-c5c7-4bf4-a19b-6250cbf39644', 'Gorra azul Nike.', 'Avenida Felipe VI, 83, 4A', 2.50, 0.75),
        new Packet('8384da0f-4eca-4b2e-a2ba-82400373ac4e', 'Estación metereológica.', 'Calle Serrano, 21, 3B', 3, 1.25),
        new Packet('c61afef3-f299-4f24-a645-10e9af8fe4d8', 'Caja de ordenador con cristal templado.', 'Barrio Salamanda, 19, 9A', 60.50, 18.50),
        new Packet('ef55e2eb-e2f0-4f0c-8662-0e53c0e17bdd', 'Regleta de corriente 4 tomas.', 'Avenida Alfonso XIII, 47, 4D', 3.50, 2.00),
        new Packet('b641b39b-61a9-43f0-9a5e-bba75fb3d32f', 'Caja de 10 boligrafos azules.', 'Barrio Severo Ochoa, 9, 4A', 0.75, 0.25),
        new Packet('514eebf7-0d09-4a29-9879-2e5283a2636c', 'Planta de plastico de 40cm.', 'Calle de Asturias, 15, 6C', 12.50, 2.50),
        new Packet('2e5ebc51-fefa-4fef-8602-78d47c6faaf4', 'Colchón 150x220cm.', 'Calle Reina Sofia, 37, 5D', 3200.00, 32.0),
        new Packet('64f0e446-1ac3-43b9-b256-1918f511b897', 'Cama-canape 150x220cm.', 'Calle Reina Sofia, 37, 5D', 4600.00, 28.5),
        new Packet('5378a44f-c87e-4201-9c0a-ae1a7ddb3078', 'Almohada 150cm.', 'Calle Reina Sofia, 37, 5D', 430.00, 2.5),
        new Packet('94b555ca-cc31-4901-b1e1-59de74f58ec7', 'Mesa comedor Siena 200x100cm.', 'Avenida Severo Ochoa, 63, 2G', 2700.00, 43.50),
        new Packet('2136e34d-b8cc-4318-8ff6-d182cb4ffaaf', 'Silla comedor Siena 40x40x100cm.', 'Avenida Severo Ochoa, 63, 2G', 1300.00, 9.25),
        new Packet('ab964027-d931-493f-b433-e83e5396b2ff', 'Silla comedor Siena 40x40x100cm.', 'Avenida Severo Ochoa, 63, 2G', 1300.00, 9.25),
        new Packet('f4306655-1ca7-4dfb-a0ae-7f7d9d6aeb2d', 'Silla comedor Siena 40x40x100cm.', 'Avenida Severo Ochoa, 63, 2G', 1300.00, 9.25),
        new Packet('3062cd61-cd46-4025-85dc-eeb6e965bf69', 'Silla comedor Siena 40x40x100cm.', 'Avenida Severo Ochoa, 63, 2G', 1300.00, 9.25),
        new Packet('b9fd5539-06ab-40fc-afe6-e9639d01b700', 'Mueble salón 240x60x60cm.', 'Calle Ian Flemming, 28, 9A', 3100.00, 34.50),
    ]

    static _vansAndTheirPackets = [
        { van: '9ed6e9e5-f168-4774-99f2-0acca2de0965', packets: ['94b555ca-cc31-4901-b1e1-59de74f58ec7', '2136e34d-b8cc-4318-8ff6-d182cb4ffaaf', 'ab964027-d931-493f-b433-e83e5396b2ff', 'f4306655-1ca7-4dfb-a0ae-7f7d9d6aeb2d', '3062cd61-cd46-4025-85dc-eeb6e965bf69', 'b9fd5539-06ab-40fc-afe6-e9639d01b700',] },
        { van: '8d838a17-ee8b-4829-801d-5168d7bfe288', packets: ['514eebf7-0d09-4a29-9879-2e5283a2636c', 'c047b249-b8a1-4b42-89e7-1650461fac1a', '363a9f9d-c5c7-4bf4-a19b-6250cbf39644', 'b641b39b-61a9-43f0-9a5e-bba75fb3d32f'] },
        { van: 'b9f44127-5dda-4b1f-8ba8-621a7fef5720', packets: ['2e5ebc51-fefa-4fef-8602-78d47c6faaf4', '64f0e446-1ac3-43b9-b256-1918f511b897', '5378a44f-c87e-4201-9c0a-ae1a7ddb3078'] },
        { van: '18e58880-41df-43a8-a26e-9644fb6347f4', packets: ['483b3a34-a9b6-49dd-b07a-a13cdbf92fee', '52e99e7d-bbff-4449-9bbb-4b845cdfbbd5', '8384da0f-4eca-4b2e-a2ba-82400373ac4e', 'c61afef3-f299-4f24-a645-10e9af8fe4d8', 'ef55e2eb-e2f0-4f0c-8662-0e53c0e17bdd'] },
    ]

    /**
     * @returns {Van[]}
     */
    async retrieveVans() {
        return DeliveryMockRepository._vans;
    }

    /**
     * @param {string} id 
     * @returns {Van | undefined}
     */
    async retrieveVanById(id) {
        return DeliveryMockRepository._vans.find(van => van.id === id);
    }


    /**
     * @returns {Packet[]}
     */
    async retrievePackets() {
        console.log('retrievePacketsEnter')
        return DeliveryMockRepository._packets;
    }

    /**
     * @param {string} id 
     * @returns {Packet | undefined}
     */
    async retrievePacketById(id) {
        return DeliveryMockRepository._packets.find(packet => packet.id === id);
    }

    /**
     * Gets all the packets within a van.
     * @param {string} vanId 
     * @returns {Packet | undefined}
     */
    async retrievePacketsByVan(vanId) {
        const item = DeliveryMockRepository._vansAndTheirPackets.find(item => item.van === vanId);
        return item.packets;
    }
}