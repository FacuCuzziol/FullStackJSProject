const Paciente = require('../models/Paciente');



//when new client is created


exports.nuevoCliente = async (req,res,next) =>{

    const paciente = new Paciente(req.body);


    try {
        await paciente.save(); 
        res.json({mensaje: 'El cliente se agrego correctamente'});

    } catch (error) {
        console.log(error);
        next();
    }

}

//get all patients

exports.obtenerPacientes = async (req,res,next) =>{
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

//get one patient by id

exports.obtenerPaciente = async (req,res,next) =>{
    try {
        const paciente = await Paciente.findById(req.params.id);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}


//update a register with an id

exports.actualizarPaciente = async (req,res,next) => {

    try {
        const paciente = await Paciente.findOneAndUpdate({_id:req.params.id}, req.body, {
            new : true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }

}


//delete a patient

exports.eliminarPaciente = async (req,res,next) => {
    try {
        await Paciente.findOneAndDelete({_id:req.params.id});
        res.json({mensaje:'El paciente fue eliminado'})
    } catch (error) {
        console.log(error);
        next();
    }
}