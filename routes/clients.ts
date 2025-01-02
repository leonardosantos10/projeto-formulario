import { Router, urlencoded} from 'express';
import clientsController from '../controllers/clientController';




const router = Router();

router.get('/clients', clientsController.index);
router.get('/clients/create', clientsController.create);
router.post('/clients', urlencoded(), clientsController.store);
router.get('/clients/:id', clientsController.show);


 export default router;



 // router.post('/clients/', clientsController.store);








