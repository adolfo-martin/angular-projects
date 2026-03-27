# 19_Jose_david_martinez

from una_dimension_edades import edades
from dos_dimensiones_personas import personas
from con_diccionario_empleados import empleados



#######################################################

def ejercicio_01_calcular_media(edades):
    suma = 0
    for edad in edades:
        suma+=edad
    media= suma /len(edades)
    return media

print(ejercicio_01_calcular_media(edades))


#######################################################
def ejercicio_02_calcular_edad_superior_media(edades):
    media = ejercicio_01_calcular_media(edades)
    cantidad_personas_encima_media = 0
    for edad in edades:
        if edad > media:
            cantidad_personas_encima_media+=1
    return cantidad_personas_encima_media


print(ejercicio_02_calcular_edad_superior_media(edades))


#######################################################
def ejercicio_03_calcular_cinco_edades_maximas(edades):
    edades_max = []
    edad_max1 = 0
    edad_max2 = 0
    edad_max3 = 0   
    for edad in edades:
        if edad_max1 < edad:
            edad_max1 = edad
        edades_max.append(edad_max1)
        if edad_max2 < edad and edad_max2 <edad_max1:
            edad_max2 = edad
        edades_max.append(edad_max2)
        if edad_max3 < edad and edad_max3 <edad_max2:
            edad_max3 = edad
        edades_max.append(edad_max3)

        return edades_max



print(ejercicio_03_calcular_cinco_edades_maximas(edades))


#######################################################

def ejercicio_04_calcular_salario_medio(personas):
    suma_mujeres = 0
    cont_mujeres = 0
    
    for persona in personas:
        if persona[0] == 'mujer' and persona[1] == 24:
            suma_mujeres+= persona[2]
            cont_mujeres+=1
            media_mujeres = suma_mujeres/cont_mujeres
        return media_mujeres

        
        


#print(ejercicio_04_calcular_salario_medio(personas))


#######################################################
def ejercicio_05_calcular_cotizacion(genero,edad,):
    
        if genero[0]== 'mujer':
            if edad[1] <35:
                print('La tasa sobre el salario aplicado es del 9%')
            elif edad[1] >=35 and edad[1]<55:
                print('La tasa sobre el salario aplicado es del 13%')
            else:
                print('La tasa sobre el salario aplicado es del 4%')
        elif genero[0]== 'hombre':
            if edad[1] <35:
                print('La tasa sobre el salario aplicado es del 12%')
            elif edad[1] >=35 and edad[1]<55:
                print('La tasa sobre el salario aplicado es del 17%')
            else:
                print('La tasa sobre el salario aplicado es del 7%')

genero = 'mujer'
edad = 54
# print(ejercicio_05_calcular_cotizacion(genero,edad))
# def ejercicio_05_


# ejercicio_05_


#######################################################
def ejercicio_06_calcular_salario_medio(empleados):
    suma_1f= 0
    cont_suma_1f=0
    suma_1m=0
    cont_suma_1m=0
    for empleado in empleados:
        if empleado['categoria'] == 'Informatico' and empleado['genero'] == 'mujer':
            suma_1f+=empleado['salario_bruto']
            cont_suma_1f+=1
        media_mujeres_informaticas = suma_1f/cont_suma_1f

        if empleado['categoria'] == 'Informatico' and empleado['genero'] == 'hombre':
            suma_1m+=empleado['salario_bruto']
            cont_suma_1m+=1
        media_hombres_informaticas = suma_1m/cont_suma_1m




# print(ejercicio_06_


#######################################################
# def ejercicio_07_


# print(ejercicio_07_
