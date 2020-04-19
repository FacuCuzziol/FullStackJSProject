const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');
module.exports = function() {

    //add new patient via post

    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );


    //get one patient

    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );


    //update a register by id

    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )


    //delete a register

    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    )

    return router;
}