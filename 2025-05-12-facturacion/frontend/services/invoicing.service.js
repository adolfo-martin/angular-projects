export default class InvoicingService {
    static customers = [
        {
            identificadorFiscal: "IF1234567890",
            nombre: "Juan",
            apellido: "Pérez",
            direccion: "Calle Falsa 123",
            ciudad: "Madrid",
            codigoPostal: "28001",
            limiteCredito: 5000
        },
        {
            identificadorFiscal: "IF0987654321",
            nombre: "María",
            apellido: "Gómez",
            direccion: "Avenida Siempre Viva 742",
            ciudad: "Barcelona",
            codigoPostal: "08001",
            limiteCredito: 7000
        },
        {
            identificadorFiscal: "IF1122334455",
            nombre: "Carlos",
            apellido: "López",
            direccion: "Calle del Sol 45",
            ciudad: "Valencia",
            codigoPostal: "46001",
            limiteCredito: 6000
        },
        {
            identificadorFiscal: "IF2233445566",
            nombre: "Ana",
            apellido: "Martínez",
            direccion: "Plaza Mayor 10",
            ciudad: "Sevilla",
            codigoPostal: "41001",
            limiteCredito: 8000
        },
        {
            identificadorFiscal: "IF3344556677",
            nombre: "Luis",
            apellido: "Hernández",
            direccion: "Calle Luna 78",
            ciudad: "Bilbao",
            codigoPostal: "48001",
            limiteCredito: 5500
        },
        {
            identificadorFiscal: "IF4455667788",
            nombre: "Sofía",
            apellido: "Fernández",
            direccion: "Avenida del Mar 12",
            ciudad: "Málaga",
            codigoPostal: "29001",
            limiteCredito: 7500
        },
        {
            identificadorFiscal: "IF5566778899",
            nombre: "Miguel",
            apellido: "Sánchez",
            direccion: "Calle de la Paz 34",
            ciudad: "Granada",
            codigoPostal: "18001",
            limiteCredito: 6200
        },
        {
            identificadorFiscal: "IF6677889900",
            nombre: "Lucía",
            apellido: "Ramírez",
            direccion: "Paseo de Gracia 56",
            ciudad: "Zaragoza",
            codigoPostal: "50001",
            limiteCredito: 5800
        },
        {
            identificadorFiscal: "IF7788990011",
            nombre: "Pedro",
            apellido: "Torres",
            direccion: "Calle Mayor 89",
            ciudad: "Alicante",
            codigoPostal: "03001",
            limiteCredito: 6400
        },
        {
            identificadorFiscal: "IF8899001122",
            nombre: "Elena",
            apellido: "Vargas",
            direccion: "Avenida Central 67",
            ciudad: "Córdoba",
            codigoPostal: "14001",
            limiteCredito: 7200
        }
    ];

    static invoices = [
        {
            identificadorFactura: 202500001,
            identificadorCliente: "IF1234567890",
            fecha: "2025-01-15",
            estado: "Pendiente  ",
            importe: 1500.00,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500002,
            identificadorCliente: "IF3344556677",
            fecha: "2025-02-20",
            estado: "Pagada",
            importe: 2300.50,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500003,
            identificadorCliente: "IF2233445566",
            fecha: "2025-03-25",
            estado: "Pendiente",
            importe: 800.75,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500004,
            identificadorCliente: "IF1122334455",
            fecha: "2025-04-10",
            estado: "Pagada",
            importe: 1750.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500005,
            identificadorCliente: "IF0987654321",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2100.00,
            formaPago: "Tarjeta de Crédito"
        },
        
        {
            identificadorFactura: 202500006,
            identificadorCliente: "IF8899001122",
            fecha: "2025-01-20",
            estado: "Pendiente",
            importe: 3200.00,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500007,
            identificadorCliente: "IF0987654321",
            fecha: "2025-02-15",
            estado: "Pagada",
            importe: 2800.50,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500008,
            identificadorCliente: "IF4455667788",
            fecha: "2025-03-20",
            estado: "Pendiente",
            importe: 1900.00,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500009,
            identificadorCliente: "IF8899001122",
            fecha: "2025-04-25",
            estado: "Pagada",
            importe: 2100.75,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500010,
            identificadorCliente: "IF3344556677",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 1500.25,
            formaPago: "Transferencia Bancaria"
        },
        
        {
            identificadorFactura: 202500011,
            identificadorCliente: "IF1122334455",
            fecha: "2025-01-10",
            estado: "Pendiente",
            importe: 2450.00,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500012,
            identificadorCliente: "IF0987654321",
            fecha: "2025-02-15",
            estado: "Pagada",
            importe: 1875.50,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500013,
            identificadorCliente: "IF7788990011",
            fecha: "2025-03-20",
            estado: "Pendiente",
            importe: 3100.25,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500014,
            identificadorCliente: "IF1234567890",
            fecha: "2025-04-25",
            estado: "Pagada",
            importe: 2200.75,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500015,
            identificadorCliente: "IF1122334455",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 1950.00,
            formaPago: "Tarjeta de Crédito"
        },
        
        {
            identificadorFactura: 202500016,
            identificadorCliente: "IF5566778899",
            fecha: "2025-01-05",
            estado: "Pagada",
            importe: 2850.00,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500017,
            identificadorCliente: "IF8899001122",
            fecha: "2025-02-28",
            estado: "Pendiente",
            importe: 1650.75,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500018,
            identificadorCliente: "IF5566778899",
            fecha: "2025-03-15",
            estado: "Pendiente",
            importe: 3300.50,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500019,
            identificadorCliente: "IF7788990011",
            fecha: "2025-04-20",
            estado: "Pagada",
            importe: 2100.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500020,
            identificadorCliente: "IF2233445566",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2750.00,
            formaPago: "Transferencia Bancaria"
        },
        
        {
            identificadorFactura: 202500021,
            identificadorCliente: "IF4455667788",
            fecha: "2025-01-08",
            estado: "Pagada",
            importe: 2150.00,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500022,
            identificadorCliente: "IF3344556677",
            fecha: "2025-02-12",
            estado: "Pagada",
            importe: 1950.75,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500023,
            identificadorCliente: "IF0987654321",
            fecha: "2025-03-18",
            estado: "Pendiente",
            importe: 2800.50,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500024,
            identificadorCliente: "IF1234567890",
            fecha: "2025-04-22",
            estado: "Pendiente",
            importe: 1875.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500025,
            identificadorCliente: "IF4455667788",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2250.00,
            formaPago: "Tarjeta de Crédito"
        },
        
        {
            identificadorFactura: 202500026,
            identificadorCliente: "IF4455667788",
            fecha: "2025-01-12",
            estado: "Pendiente",
            importe: 3100.00,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500027,
            identificadorCliente: "IF3344556677",
            fecha: "2025-02-25",
            estado: "Pendiente",
            importe: 2450.50,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500028,
            identificadorCliente: "IF4455667788",
            fecha: "2025-03-22",
            estado: "Pagada",
            importe: 1950.75,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500029,
            identificadorCliente: "IF0987654321",
            fecha: "2025-04-18",
            estado: "Pagada",
            importe: 2700.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500030,
            identificadorCliente: "IF4455667788",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2850.00,
            formaPago: "Transferencia Bancaria"
        },
        
        {
            identificadorFactura: 202500031,
            identificadorCliente: "IF6677889900",
            fecha: "2025-01-14",
            estado: "Pagada",
            importe: 2250.75,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500032,
            identificadorCliente: "IF5566778899",
            fecha: "2025-02-18",
            estado: "Pendiente",
            importe: 1850.50,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500033,
            identificadorCliente: "IF7788990011",
            fecha: "2025-03-25",
            estado: "Pendiente",
            importe: 2950.25,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500034,
            identificadorCliente: "IF5566778899",
            fecha: "2025-04-15",
            estado: "Pagada",
            importe: 1975.50,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500035,
            identificadorCliente: "IF2233445566",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2400.00,
            formaPago: "Tarjeta de Crédito"
        },
        
        {
            identificadorFactura: 202500036,
            identificadorCliente: "IF6677889900",
            fecha: "2025-01-18",
            estado: "Pagada",
            importe: 2800.25,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500037,
            identificadorCliente: "IF5566778899",
            fecha: "2025-02-22",
            estado: "Pendiente",
            importe: 1925.50,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500038,
            identificadorCliente: "IF1122334455",
            fecha: "2025-03-28",
            estado: "Pendiente",
            importe: 3150.75,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500039,
            identificadorCliente: "IF6677889900",
            fecha: "2025-04-20",
            estado: "Pagada",
            importe: 2275.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500040,
            identificadorCliente: "IF4455667788",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2650.00,
            formaPago: "Transferencia Bancaria"
        },
        
        {
            identificadorFactura: 202500041,
            identificadorCliente: "IF7788990011",
            fecha: "2025-01-16",
            estado: "Pendiente",
            importe: 2450.75,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500042,
            identificadorCliente: "IF2233445566",
            fecha: "2025-02-20",
            estado: "Pagada",
            importe: 1975.50,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500043,
            identificadorCliente: "IF5566778899",
            fecha: "2025-03-25",
            estado: "Pendiente",
            importe: 3050.25,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500044,
            identificadorCliente: "IF1122334455",
            fecha: "2025-04-18",
            estado: "Pagada",
            importe: 2175.50,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500045,
            identificadorCliente: "IF7788990011",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2600.00,
            formaPago: "Tarjeta de Crédito"
        },
        
        {
            identificadorFactura: 202500046,
            identificadorCliente: "IF2233445566",
            fecha: "2025-01-22",
            estado: "Pagada",
            importe: 2900.25,
            formaPago: "Transferencia Bancaria"
        },
        {
            identificadorFactura: 202500047,
            identificadorCliente: "IF6677889900",
            fecha: "2025-02-25",
            estado: "Pendiente",
            importe: 2025.50,
            formaPago: "Tarjeta de Crédito"
        },
        {
            identificadorFactura: 202500048,
            identificadorCliente: "IF8899001122",
            fecha: "2025-03-30",
            estado: "Pagada",
            importe: 3250.75,
            formaPago: "Efectivo"
        },
        {
            identificadorFactura: 202500049,
            identificadorCliente: "IF1234567890",
            fecha: "2025-04-22",
            estado: "Pendiente",
            importe: 2375.25,
            formaPago: "Tarjeta de Débito"
        },
        {
            identificadorFactura: 202500050,
            identificadorCliente: "IF8899001122",
            fecha: "2025-05-12",
            estado: "Pendiente",
            importe: 2750.00,
            formaPago: "Transferencia Bancaria"
        }
    ];
    
    /**
     * Retrieves a list of customers with their details.
     * This is a mock implementation and should be replaced with actual API calls.
     * @returns {Promise<Array<{
     *     identificadorFiscal: string,
     *     nombre: string,
     *     apellido: string,
     *     direccion: string,
     *     ciudad: string,
     *     codigoPostal: number,
     *     limiteCredito: number,
     * }>>} A promise that resolves to an array of customer objects.
     * Each customer object contains the following properties:
     * - identificadorFiscal: The fiscal identifier of the customer.
     * - nombre: The first name of the customer.
     * - apellido: The last name of the customer.
     * - direccion: The address of the customer.
     * - ciudad: The city of the customer.
     * - codigoPostal: The postal code of the customer.
     * - limiteCredito: The credit limit of the customer.
     */
    async retrieveCustomers() {
        return InvoicingService.customers.toSorted((a, b) => {
            if (a.apellido < b.apellido) {
                return -1;
            }
            if (a.apellido > b.apellido) {
                return 1;
            }
            return 0;
        });
    }


    async retrieveCustomerById(identificadorFiscal) {
        const customer = InvoicingService.customers.find(customer => customer.identificadorFiscal === identificadorFiscal);
        if (!customer) {
            throw new Error("Customer not found");
        }
        return customer;
    }

    /**
     * Retrieves a list of invoices with their details.
     * This is a mock implementation and should be replaced with actual API calls.
     * @returns {Promise<Array<{
     *     identificadorFactura: number,
     *     identificadorCliente: string,
     *     fecha: string,
     *     estado: string,
     *     importe: number,
     *     formaPago: string
     * }>>} A promise that resolves to an array of invoice objects.
     */
    async retrieveInvoices() {
        return InvoicingService.invoices;
    }

    async retrieveInvoiceById(identificadorFactura) {
        const invoice = InvoicingService.invoices.find(invoice => invoice.identificadorFactura === identificadorFactura);
        if (!invoice) {
            throw new Error("Invoice not found");
        }
        return invoice;
    }

    async retrieveInvoicesByCustomerId(identificadorFiscal) {
        const invoices = InvoicingService.invoices.filter(invoice => invoice.identificadorCliente === identificadorFiscal);
        if (invoices.length === 0) {
            throw new Error("No invoices found for this customer");
        }
        return invoices;
    }
}