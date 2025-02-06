import { Router } from 'express';
import { getManageShop } from '../handlers/manageshop_handler';
const router = Router();

router.get('/manage-shop', getManageShop);


export { router };
