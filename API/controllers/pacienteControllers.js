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

//Este es el nuevo metodo. Mi contribucion al repo de Facundo es 
//solo añadir comentarios explicando
//un export permite a un programa utilizar la funcionalidad de este
//archivo
exports.obtenerPacienteNombre = async(req,res,next) =>{
//req es la request que el servidor recibe
//res es la respuesta que devolvemos
//next permite continuar la ejecucion del programa frente a algun error    
    try {
        // creamos un objeto paciente, y buscamos por nombre en la base mongodb 
        const paciente = await Paciente.findById(req.params.name);
        //devolvemos la info al usuario
        res.json(paciente);
    } catch (error) {
        //si hay un error mostrarlo por consola
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