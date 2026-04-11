/**
 * Valida un objeto de datos contra un conjunto de reglas.
 * @param {Object} data - Los datos del formulario { name: '...', email: '...' }
 * @param {Object} rules - Las reglas { email: { required: true, pattern: /.../ } }
 * @returns {Object} Errores encontrados { email: 'Email inválido' } o {} si todo es correcto.
 */
export const validate = (data, rules) => {
    const errors = {};
  
    for (const field in rules) {
      const value = data[field];
      const rule = rules[field];
  
      if (rule.required && !value) {
        errors[field] = 'Este campo es obligatorio';
      } else if (rule.pattern && !rule.pattern.test(value)) {
        errors[field] = rule.message || 'Formato inválido';
      } else if (rule.minLength && value.length < rule.minLength) {
        errors[field] = `Mínimo ${rule.minLength} caracteres`;
      }
    }
  
    return errors;
  };
