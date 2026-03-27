from dataclasses import dataclass

@dataclass
class CuatroOctetos:
    primer_octeto: int = 0
    segundo_octeto: int = 0
    tercer_octeto: int = 0
    cuarto_octeto: int = 0

    def __init__(self, octetos: str):
        if not isinstance(octetos, str):
            raise DireccionError(f'El elemento {octetos} no tiene cuatro octetos')

        if not CuatroOctetos.__es_cuatro_octetos(octetos):
            raise DireccionError(f'El elemento {octetos} no tiene cuatro octetos')

        self.primer_octeto, self.segundo_octeto, self.tercer_octeto, self.cuarto_octeto = \
            CuatroOctetos.__separar_octetos(octetos)

    @classmethod
    def __es_cuatro_octetos(cls, octetos: str) -> bool:
        octetos_as_list = octetos.split('.')
        if len(octetos_as_list) != 4:
            return False

        for octeto in octetos_as_list:
            try:
                numero = int(octeto)
            except ValueError as error:
                return False

            if numero < 0 or numero > 255:
                return False

        return True


    @classmethod
    def __separar_octetos(cls, octetos: str):
        octetos_as_list = octetos.split('.')
        return octetos_as_list[0], octetos_as_list[1], octetos_as_list[2], octetos_as_list[3]

    def __repr__(self) -> str:
        return f'{self.primer_octeto}.{self.segundo_octeto}.{self.tercer_octeto}.{self.cuarto_octeto}'


class Direccion(CuatroOctetos):
    pass


class DireccionError(Exception):
    pass


@dataclass(init=False, repr=False)
class Mascara(Direccion):
    primer_octeto: int = 0
    segundo_octeto: int = 0
    tercer_octeto: int = 0
    cuarto_octeto: int = 0

    def __init__(self, mascara):
        if isinstance(mascara, int):
            self.primer_octeto, self.segundo_octeto, self.tercer_octeto, self.cuarto_octeto = \
                self.__extraer_octetos_de_mascara_abreviada(mascara)
        elif isinstance(mascara, str):
            self.primer_octeto, self.segundo_octeto, self.tercer_octeto, self.cuarto_octeto = \
                self.__extraer_octetos_de_mascara_larga(mascara)

    def __extraer_octetos_de_mascara_abreviada(self, mascara_abreviada: int):
        primer_octeto = 0
        segundo_octeto = 0
        tercer_octeto = 0
        cuarto_octeto = 0

        if mascara_abreviada >= 8:
            primer_octeto = 255
        if mascara_abreviada >= 16:
            segundo_octeto = 255
        if mascara_abreviada >= 24:
            tercer_octeto = 255

        resto = mascara_abreviada % 8
        octeto = 0
        for i in range(0, resto):
            octeto += 2 ** (7 - i)

        if primer_octeto == 0:
            primer_octeto = octeto
        elif segundo_octeto == 0:
            segundo_octeto = octeto
        elif tercer_octeto == 0:
            tercer_octeto = octeto
        else:
            cuarto_octeto = octeto

        return primer_octeto, segundo_octeto, tercer_octeto, cuarto_octeto
        # self.primer_octeto = primer_octeto
        # self.segundo_octeto = segundo_octeto
        # self.tercer_octeto = tercer_octeto
        # self.cuarto_octeto = cuarto_octeto

    def __extraer_octetos_de_mascara_larga(self, mascara_larga: str):
        mascara_troceada = mascara_larga.split('.')
        return mascara_troceada[0], mascara_troceada[1], mascara_troceada[2], mascara_troceada[3]

    def __repr__(self) -> str:
        return f'{self.primer_octeto}.{self.segundo_octeto}.{self.tercer_octeto}.{self.cuarto_octeto}'

    def es_mascara_abreviada(mascara: str) -> bool:
        try:
            mascara_numero = int(mascara)
            if mascara_numero < 1 or mascara_numero > 30:
                return False

            return True
        except ValueError:
            return False
