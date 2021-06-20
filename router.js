import express from 'express'
import {v4 as uuidv4} from 'uuid'
const router=express.Router()
let kiadok=[]
router.get('/',(req,res)=>{
    console.log('Welcome to the KIADOK page !')
    res.send(kiadok)
})
router.post('/',(req,res)=>{
    //console.log(kiadok)
    let kiado=req.body
    kiado={...kiado, id:uuidv4()}
    kiadok.push(kiado)
    res.send("POSTED!!")
})
//get a record by unique id from database(array):
router.get('/:id',(req,res)=>{
    const {id}=req.params
    const foundKiado=kiadok.find(kiado=>kiado.id===id)
    res.send(foundKiado)
})
//delete a record by id:
router.delete('/:id',(req,res)=>{
    const {id}=req.params
    kiadok=kiadok.filter(kiado=>kiado.id!==id)
    res.send(`Törölve a követkő azonosítójú kiado: ${id}`)
})
//update a record:
router.patch('/:id',(req,res)=>{
    const {id}=req.params
    const {nev}=req.body
    let getKiado=kiadok.find(kiado=>kiado.id===id)
    if(nev)
        getKiado.nev=nev
    res.send(`Sikeresen módosítva a ${id} azonosítójú kiadó neve!`)
})
export default router