import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user:'root',
    password:'6399',
    port: 3306,
    database: 'mantenimiento_utn'
})