import { Express } from "express";
import { Router } from "express";
import { createURL, getURL, checkURL, deleteURL } from "../controllers/shortUrl";
const router = Router();
router.post("/shortUrl",createURL);
router.get("/shortUrl",getURL);
router.get("/shortUrl/:id",checkURL);
router.post("/shortUrl/:id",deleteURL);
export default router;   