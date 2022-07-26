const { Router } = require('express')
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controller')
const {loguearRequest}=require('../middlewares/utils')

const router = Router()
router.get('',[loguearRequest], usuariosGet)
router.put('/:id',[loguearRequest], usuariosPut) //forma de pasar parametros por la url
router.post('', [loguearRequest],usuariosPost)
router.delete('', [loguearRequest],usuariosDelete)
router.patch('', [loguearRequest],usuariosPatch)
module.exports = router;