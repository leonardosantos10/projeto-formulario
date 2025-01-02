import { Request, Response} from 'express';
import { IClients } from '../models/clients';
import clientRepository from '../models/clientsModel';


 async function index(req: Request, res: Response, next: any) {
    const clients = await clientRepository.findAll();
    res.render('index', {clients: clients});
}

async function show(req:  Request, res: Response, next: any) {
     const client = await clientRepository.findByPk(req.params.id);
    res.render('show', {client: client});
   }

function create(req: Request, res: Response, next: any){
   res.render('create');
}

async function store(req: Request, res: Response, next: any){
    try {
          await clientRepository.create(req.body as IClients);
         res.redirect('/clients');
             
    }catch(error){
       console.log(error);
       res.status(500).end();
    }
}

export default { index, show, create, store};


