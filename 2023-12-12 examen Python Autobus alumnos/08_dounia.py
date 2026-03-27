# 08_dounia

from una_dimension_edades import edades
from dos_dimensiones_personas import personas
from con_diccionario_empleados import empleados

# borra este comentario y las tres líneas de prueba
print(len(edades))
print(len(personas))
print(len(empleados))

#######################################################
def ejercicio_01_media(edades):
    suma = 0
    for edad in edades :
        suma += edad
    media = suma/len(edades)
    return(media)

print(ejercicio_01_media(edades))


#######################################################
def ejercicio_02_cantidad(edades):
    media = ejercicio_01_media(edades)
    cantidad = 0
    for edad in edades:
        if edad >= media:
            cantidad += 1
    return(cantidad)


print(ejercicio_02_cantidad(edades))


#######################################################
def ejercicio_03_cinco_maximo(edades):
    for i in range(len(edades)-1):
        maximo = i
        for j in range(i+1,len(edades)):
            if edades[j] > maximo[j]:
                maximo = j
            break
        edades[i], edades[maximo] = edades[maximo], edades[i]
    for i in range(5):
        edad = edades[i]
    return edad



print(ejercicio_03_cinco_maximo(edades))


#######################################################
def ejercicio_04_salario_medio(personas):
    ...

print(ejercicio_04_salario_medio(personas))


#######################################################
# def ejercicio_05_


# def ejercicio_05_


# ejercicio_05_


#######################################################
# def ejercicio_06_


# print(ejercicio_06_


#######################################################
# def ejercicio_07_


# print(ejercicio_07_
