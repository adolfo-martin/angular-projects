#!/usr/bin/python3

import sys
import subprocess

# -----------------------------------------


def main() -> None:
    subnet = get_subnet()
    test_comunication(subnet)

# -----------------------------------------


def get_subnet() -> str:
    if len(sys.argv[1:]) != 1:
        print('ERROR: Hay que suministar la subnet')
        sys.exit(1)

    subnet = sys.argv[1]
    return subnet

# -----------------------------------------


def test_comunication(subnet: str) -> None:
    for i in range(143, 255):
        ip = f'{subnet}.{i}'
        result = subprocess.run(
            ['ping', '-n', '1', ip],
            text=True,
            capture_output=True
        )

        if result.returncode == 0:
            print(f'Hay comunicación con el destino {ip}')
        else:
            print(f'No hay comunicación con el destino {ip}')


# -----------------------------------------
if __name__ == '__main__':
    main()

# -----------------------------------------
