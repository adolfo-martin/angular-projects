#!/usr/bin/python3

from CodigoIban import CodigoIban, CodigoIbanError


def main():
    try:
        codigo1 = CodigoIban('ES1031859826815357436073')
        print(codigo1)
        print(codigo1.codigo_pais)
        print(codigo1.codigo_banco)
        print(codigo1.codigo_sucursal)
        print(codigo1.digitos_control)
        print(codigo1.numero_cuenta)
        codigo2 = CodigoIban('ES1212341234121234567890')
        print(codigo2)
    except CodigoIbanError as error:
        print(f'ERROR: {error}')


if __name__ == '__main__':
    main()