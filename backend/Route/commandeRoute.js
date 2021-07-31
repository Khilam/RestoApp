const express = require ('express')
const router = express.Router()
const commande = require ('../Controller/commandeController')


router.get('/getAll', commande.getAllCommande)
router.get('/:id/getOne', commande.getOneCommande)
router.post('/add', commande.addCommande)
router.delete('/:id/delete', commande.deleteCommande)
router.put('/id/update', commande.updateCommande)
module.exports = router