export const COUNTRIES = {
  CL: { name: 'Chile',           flag: '🇨🇱', locale: 'es-CL', currency: 'CLP', timezone: 'America/Santiago',              language: 'es',    idField: 'RUT',          accountTypes: ['Cuenta corriente', 'Cuenta vista', 'Cuenta de ahorro', 'Cuenta RUT'] },
  AR: { name: 'Argentina',       flag: '🇦🇷', locale: 'es-AR', currency: 'ARS', timezone: 'America/Argentina/Buenos_Aires', language: 'es',    idField: 'CUIL / CUIT',  accountTypes: ['Cuenta corriente', 'Caja de ahorro'] },
  MX: { name: 'México',          flag: '🇲🇽', locale: 'es-MX', currency: 'MXN', timezone: 'America/Mexico_City',           language: 'es',    idField: 'RFC / CURP',   accountTypes: ['Cuenta de débito', 'Cuenta de ahorro', 'Cuenta corriente'] },
  CO: { name: 'Colombia',        flag: '🇨🇴', locale: 'es-CO', currency: 'COP', timezone: 'America/Bogota',                language: 'es',    idField: 'Cédula / NIT', accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  PE: { name: 'Perú',            flag: '🇵🇪', locale: 'es-PE', currency: 'PEN', timezone: 'America/Lima',                  language: 'es',    idField: 'DNI / RUC',    accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  BR: { name: 'Brasil',          flag: '🇧🇷', locale: 'pt-BR', currency: 'BRL', timezone: 'America/Sao_Paulo',             language: 'pt-BR', idField: 'CPF / CNPJ',   accountTypes: ['Conta corrente', 'Conta poupança', 'Conta salário'] },
  UY: { name: 'Uruguay',         flag: '🇺🇾', locale: 'es-UY', currency: 'UYU', timezone: 'America/Montevideo',            language: 'es',    idField: 'Cédula / RUT', accountTypes: ['Cuenta corriente', 'Caja de ahorro'] },
  PY: { name: 'Paraguay',        flag: '🇵🇾', locale: 'es-PY', currency: 'PYG', timezone: 'America/Asuncion',              language: 'es',    idField: 'RUC / CI',     accountTypes: ['Cuenta corriente', 'Cuenta de ahorro'] },
  BO: { name: 'Bolivia',         flag: '🇧🇴', locale: 'es-BO', currency: 'BOB', timezone: 'America/La_Paz',                language: 'es',    idField: 'NIT / CI',     accountTypes: ['Cuenta corriente', 'Caja de ahorros'] },
  EC: { name: 'Ecuador',         flag: '🇪🇨', locale: 'es-EC', currency: 'USD', timezone: 'America/Guayaquil',             language: 'es',    idField: 'RUC / CI',     accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  VE: { name: 'Venezuela',       flag: '🇻🇪', locale: 'es-VE', currency: 'VES', timezone: 'America/Caracas',               language: 'es',    idField: 'RIF / CI',     accountTypes: ['Cuenta corriente', 'Cuenta de ahorro'] },
  GT: { name: 'Guatemala',       flag: '🇬🇹', locale: 'es-GT', currency: 'GTQ', timezone: 'America/Guatemala',             language: 'es',    idField: 'NIT / DPI',    accountTypes: ['Cuenta monetaria', 'Cuenta de ahorro'] },
  CR: { name: 'Costa Rica',      flag: '🇨🇷', locale: 'es-CR', currency: 'CRC', timezone: 'America/Costa_Rica',            language: 'es',    idField: 'Cédula / NIT', accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  PA: { name: 'Panamá',          flag: '🇵🇦', locale: 'es-PA', currency: 'PAB', timezone: 'America/Panama',                language: 'es',    idField: 'Cédula / RUC', accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  DO: { name: 'Rep. Dominicana', flag: '🇩🇴', locale: 'es-DO', currency: 'DOP', timezone: 'America/Santo_Domingo',         language: 'es',    idField: 'Cédula / RNC', accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  SV: { name: 'El Salvador',     flag: '🇸🇻', locale: 'es-SV', currency: 'USD', timezone: 'America/El_Salvador',           language: 'es',    idField: 'DUI / NIT',    accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  HN: { name: 'Honduras',        flag: '🇭🇳', locale: 'es-HN', currency: 'HNL', timezone: 'America/Tegucigalpa',           language: 'es',    idField: 'RTN / DNI',    accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  NI: { name: 'Nicaragua',       flag: '🇳🇮', locale: 'es-NI', currency: 'NIO', timezone: 'America/Managua',               language: 'es',    idField: 'RUC / Cédula', accountTypes: ['Cuenta corriente', 'Cuenta de ahorros'] },
  CU: { name: 'Cuba',            flag: '🇨🇺', locale: 'es-CU', currency: 'CUP', timezone: 'America/Havana',                language: 'es',    idField: 'CI',           accountTypes: ['Cuenta corriente', 'Cuenta de ahorro'] },
}

export const DEFAULT_COUNTRY = 'CL'
