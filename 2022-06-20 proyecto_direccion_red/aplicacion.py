from Direccion import CuatroOctetos, Direccion


def main():

    test_clase_CuatroOctetos()

    # direccion = Direccion(24)
    # print(direccion)
    direccion = Direccion('255.255.0.0')
    print(direccion)
    # direccion = Direccion(8)
    # print(direccion)
    # direccion = Direccion('255.0.0.0')
    # print(direccion)
    # direccion = Direccion(14)
    # print(direccion)
    # direccion = Direccion('255.192.0.0')
    # print(direccion)


def test_clase_CuatroOctetos():
    octetos = CuatroOctetos('255.255.255.0')
    octetos = CuatroOctetos('192.168.1.1')
    try:
        octetos = CuatroOctetos('0.0.0')
    except:
        pass

if __name__ == '__main__':
    main()
