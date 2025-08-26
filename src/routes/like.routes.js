import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

import { toggleLikeVideo } from "../controllers/video.controller.js";

const router = Router();

router.use(verifyJWT);

router.post("/video/:id", toggleLikeVideo); // toggle like on video

export default router;
