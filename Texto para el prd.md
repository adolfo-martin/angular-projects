# Documento de Requerimientos de Producto (PRD)
## Sitio Web de Compraventa de Vehículos

---

### 1. RESUMEN EJECUTIVO

**Nombre del Proyecto:** VehicleMarket
**Versión:** 1.0
**Fecha:** 30 de Agosto, 2025

**Descripción:** Desarrollo de un sitio web simulado de compraventa de vehículos que permite a los usuarios consultar información de vehículos disponibles. El proyecto es una demostración técnica con datos mock, sin funcionalidades de compra real.

**Objetivo:** Crear una plataforma web bilingüe (español/inglés) para mostrar un catálogo de vehículos con información detallada, utilizando una arquitectura separada de frontend y backend.

---

### 2. ALCANCE DEL PROYECTO

#### 2.1 Funcionalidades Incluidas
- ✅ Visualización de catálogo de vehículos en formato de tarjetas
- ✅ Vista detallada individual de cada vehículo
- ✅ Interfaz bilingüe (español/inglés)
- ✅ Filtros de búsqueda por marca, precio y año
- ✅ Barra de búsqueda de texto
- ✅ Ordenamiento por precio y año
- ✅ Diseño responsive (desktop, tablet, móvil)

#### 2.2 Funcionalidades NO Incluidas
- ❌ Registro de usuarios
- ❌ Sistema de compra/venta real
- ❌ Base de datos persistente
- ❌ Gestión de inventario
- ❌ Sistema de pagos
- ❌ Funcionalidades de administrador

---

### 3. REQUERIMIENTOS FUNCIONALES

#### 3.1 Página Principal (Catálogo)
- **RF-001:** El sistema debe mostrar todos los vehículos disponibles en formato de tarjetas
- **RF-002:** Cada tarjeta debe mostrar: imagen principal, marca, modelo, año, precio
- **RF-003:** El usuario debe poder filtrar por:
  - Marca del vehículo
  - Rango de precios (0-10k, 10k-25k, 25k-50k, 50k+)
  - Año (últimos 5 años, 5-10 años, más de 10 años)
- **RF-004:** El usuario debe poder ordenar por:
  - Precio (ascendente/descendente)
  - Año (más nuevo/más antiguo)
- **RF-005:** Debe incluir una barra de búsqueda que filtre por marca, modelo o año

#### 3.2 Vista de Detalle del Vehículo
- **RF-006:** Al hacer clic en una tarjeta, se debe mostrar la vista detallada del vehículo
- **RF-007:** La vista detallada debe incluir:
  - Imagen principal del vehículo
  - Marca y modelo
  - Año de fabricación
  - Precio en EUR
  - Kilometraje
  - Tipo de combustible (Gasolina, Diésel, Híbrido, Eléctrico)
  - Tipo de transmisión (Manual, Automática)
  - Color
  - Descripción adicional
- **RF-008:** Debe incluir un botón "Volver al catálogo"

#### 3.3 Funcionalidad Multiidioma
- **RF-009:** El sitio debe soportar español e inglés
- **RF-010:** Debe incluir un selector de idioma visible en el header
- **RF-011:** El idioma seleccionado debe persistir durante la sesión
- **RF-012:** Todos los textos de la interfaz deben traducirse según el idioma seleccionado

---

### 4. REQUERIMIENTOS NO FUNCIONALES

#### 4.1 Rendimiento
- **RNF-001:** La página debe cargar en menos de 3 segundos
- **RNF-002:** Las imágenes deben optimizarse para web

#### 4.2 Usabilidad
- **RNF-003:** El diseño debe ser responsive para desktop (1920px+), tablet (768px-1024px) y móvil (320px-767px)
- **RNF-004:** La interfaz debe ser intuitiva y fácil de navegar
- **RNF-005:** Los filtros deben aplicarse en tiempo real

#### 4.3 Compatibilidad
- **RNF-006:** Compatible con navegadores modernos (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

---

### 5. ESPECIFICACIONES TÉCNICAS

#### 5.1 Arquitectura
- **Frontend:** HTML5, JavaScript ES6+, TailwindCSS
- **Backend:** Node.js con Express
- **Comunicación:** API REST
- **Datos:** Mock estático (archivo JSON)

#### 5.2 Estructura de Datos del Vehículo
```json
{
  "id": "number",
  "marca": "string",
  "modelo": "string",
  "año": "number",
  "precio": "number",
  "kilometraje": "number",
  "combustible": "string", // "Gasolina", "Diésel", "Híbrido", "Eléctrico"
  "transmision": "string", // "Manual", "Automática"
  "color": "string",
  "imagen": "string", // URL de la imagen
  "descripcion": "string"
}
```

#### 5.3 API Endpoints
- **GET /api/vehicles** - Obtener todos los vehículos
- **GET /api/vehicles/:id** - Obtener un vehículo específico
- **GET /api/vehicles/search?q=** - Buscar vehículos por texto
- **GET /api/vehicles/filter?marca=&precio=&año=** - Filtrar vehículos

#### 5.4 Datos Mock
- **Cantidad:** 20 vehículos
- **Tipos:** Solo automóviles (sedán, SUV, hatchback, coupé)
- **Marcas:** Toyota, Honda, BMW, Audi, Mercedes-Benz, Volkswagen, Ford, Chevrolet
- **Precios:** Rango de €5,000 - €80,000
- **Años:** 2015 - 2024
- **Imágenes:** URLs de imágenes stock de vehículos

---

### 6. DISEÑO DE INTERFAZ

#### 6.1 Wireframes Principales

**Página Principal:**
```
+------------------------------------------+
|  [Logo] VehicleMarket    [ES/EN] [🔍]   |
+------------------------------------------+
|  Filtros: [Marca ▼] [Precio ▼] [Año ▼] |
|  Ordenar: [Precio ▼]  Buscar: [_____]   |
+------------------------------------------+
|  [Tarjeta1] [Tarjeta2] [Tarjeta3]      |
|  [Tarjeta4] [Tarjeta5] [Tarjeta6]      |
|  [Tarjeta7] [Tarjeta8] [Tarjeta9]      |
+------------------------------------------+
```

**Vista Detalle:**
```
+------------------------------------------+
|  [← Volver]              [ES/EN]         |
+------------------------------------------+
|  [Imagen Grande]    | Marca Modelo       |
|                     | Año: 2022          |
|                     | Precio: €25,000    |
|                     | Km: 50,000         |
|                     | Combustible: Gas   |
|                     | Transmisión: Auto  |
|                     | Color: Azul        |
|                     | Descripción...     |
+------------------------------------------+
```

#### 6.2 Paleta de Colores
- **Primario:** #2563EB (Azul)
- **Secundario:** #64748B (Gris)
- **Éxito:** #059669 (Verde)
- **Fondo:** #F8FAFC (Gris claro)
- **Texto:** #1E293B (Gris oscuro)

---

### 7. CRITERIOS DE ACEPTACIÓN

#### 7.1 Historia de Usuario Principal
**Como** visitante del sitio
**Quiero** poder ver todos los vehículos disponibles y filtrarlos
**Para** encontrar vehículos que me interesen

**Criterios de Aceptación:**
- ✅ Veo un catálogo con 20 vehículos en tarjetas
- ✅ Puedo filtrar por marca, precio y año
- ✅ Puedo buscar por texto
- ✅ Puedo cambiar el idioma entre español e inglés
- ✅ Al hacer clic en una tarjeta veo el detalle completo
- ✅ El sitio funciona en móvil, tablet y desktop

#### 7.2 Definición de Hecho (Definition of Done)
- [ ] Funcionalidad implementada según especificaciones
- [ ] Responsive design validado en múltiples dispositivos
- [ ] Traducciones completas en ambos idiomas
- [ ] API funcionando correctamente
- [ ] Datos mock cargados
- [ ] Pruebas manuales completadas
- [ ] Código documentado

---

### 8. CRONOGRAMA ESTIMADO

| Fase | Duración | Tareas |
|------|----------|--------|
| **Setup** | 1 día | Configuración de proyecto, estructura de carpetas |
| **Backend** | 2 días | API REST, datos mock, endpoints |
| **Frontend Base** | 2 días | HTML, CSS con Tailwind, estructura responsive |
| **Funcionalidades** | 3 días | Filtros, búsqueda, navegación, multiidioma |
| **Integración** | 1 día | Conexión frontend-backend, pruebas |
| **Pulido** | 1 día | Optimizaciones, ajustes finales |

**Total Estimado:** 10 días

---

### 9. RIESGOS Y MITIGACIONES

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| Problemas con imágenes stock | Media | Bajo | Tener imágenes de respaldo locales |
| Complejidad del multiidioma | Baja | Medio | Usar estructura JSON simple para traducciones |
| Responsive design complejo | Media | Medio | Usar Tailwind CSS con clases predefinidas |

---

### 10. ANEXOS

#### 10.1 Estructura de Archivos Sugerida
```
proyecto/
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── data/
│   │   └── vehicles.json
│   └── routes/
│       └── vehicles.js
├── frontend/
│   ├── index.html
│   ├── detail.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   ├── api.js
│   │   └── translations.js
│   └── assets/
│       └── images/
└── README.md
```

---

**Documento creado por:** GitHub Copilot  
**Fecha de última actualización:** 30 de Agosto, 2025  
**Versión:** 1.0