import DeliveryMockRepository from "./DeliveryMockRepository.js";
import DeliveryRestServer from "./DeliveryRestServer.js";

try {
    const repository = new DeliveryMockRepository();
    const restserver = new DeliveryRestServer();
    restserver._port = 3000;
    restserver.repository = repository;
    restserver.listen();
} catch (e) {
    console.error(e);
}