from dataclasses import dataclass, field


@dataclass(repr=True)
class CodigoIban:

    codigo_iban: str = field(repr=False)
    codigo_pais: str
    codigo_banco: str
    codigo_sucursal: str
    digitos_control: str
    numero_cuenta: str

    def __init__(self, codigo_iban: str):
        self.codigo_iban = codigo_iban

        es_correcto, mensaje = self.es_correcto(codigo_iban)
        if not es_correcto:
            raise CodigoIbanError(mensaje)

        self.codigo_pais = self._obtener_codigo_pais()
        self.codigo_banco = self._obtener_codigo_banco()
        self.codigo_sucursal = self._obtener_codigo_sucursal()
        self.digitos_control = self._obtener_digitos_control()
        self.numero_cuenta = self._obtener_numero_cuenta()


    def es_correcto(self, codigo_iban: str) -> tuple:
        if len(codigo_iban) != 24:
            return False, 'La longitud del código IBAN no es correcta para España'

        if codigo_iban[12] != self._calcular_primer_digito_control():
            return False, 'El primer dígito de control no es correcto'

        if codigo_iban[13] != self._calcular_segundo_digito_control():
            return False, 'El segundo dígito de control no es correcto'

        return True, None


    def _obtener_codigo_pais(self) -> str:
        codigo_pais: str = self.codigo_iban[0:4]
        return codigo_pais



    def _obtener_codigo_banco(self) -> str:
        codigo_banco: str = self.codigo_iban[4:8]
        return codigo_banco


    def _obtener_codigo_sucursal(self) -> str:
        codigo_sucursal: str = self.codigo_iban[8:12]
        return codigo_sucursal


    def _obtener_digitos_control(self) -> str:
        digitos_control: str = self.codigo_iban[12:14]
        return digitos_control


    def _obtener_numero_cuenta(self) -> str:
        numero_cuenta: str = self.codigo_iban[14:24]
        return numero_cuenta


    def _calcular_primer_digito_control(self) -> str:
        numero_banco_sucursal: str = self.codigo_iban[4:12]
        multiplicadores = (4, 8, 5, 10, 9, 7, 3, 6)

        suma = 0
        for i in range(0, 8):
            suma += int(numero_banco_sucursal[i]) * multiplicadores[i]
        
        resto = suma % 11
        digito = 11 - resto
        if digito == 10:
            digito_control = 1
        elif digito == 11:
            digito_control = 0
        else:
            digito_control = digito 

        return str(digito_control)

    def _calcular_segundo_digito_control(self) -> str:
        numero_cuenta: str = self.codigo_iban[14:24]
        multiplicadores = (1, 2, 4, 8, 5, 10, 9, 7, 3, 6)

        suma = 0
        for i in range(0, 10):
            suma += int(numero_cuenta[i]) * multiplicadores[i]
        
        resto = suma % 11
        digito = 11 - resto
        if digito == 10:
            digito_control = 1
        elif digito == 11:
            digito_control = 0
        else:
            digito_control = digito 

        return str(digito_control)


class CodigoIbanError(Exception):
    pass
