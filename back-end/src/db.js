import {createPool} from 'mysql2/promise'

export const pool = createPool({
    host: 'localhost',
    user:'root',
<<<<<<< HEAD
    password:'30816031',
=======
    password:'6399',
>>>>>>> 5ccb2529453dfa152c29defb53748b25cdb6dd13
    port: 3306,
    database: 'mantenimiento_utn'
})