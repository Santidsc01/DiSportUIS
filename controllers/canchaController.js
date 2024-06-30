const Cancha =require('../models/Cancha')

async function addCancha(req, res){
    try{
        const{
            nombre
            
        }=req.body
        const cancha = Cancha({
            nombre
            
         })
    
        const canchaReservada =   await cancha.save()
        res.status(201).send({ canchaReservada})
    }catch(e){
        res.status(500).send({message: e.message})
    }
}

async function getCancha (req,res){
    const cancha = await Cancha.find().lean().exec()
    res.status(200).send({cancha})
}

module.exports={
    addCancha,
    getCancha
}