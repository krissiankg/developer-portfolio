import { Router, type IRouter } from "express";
import { handleAsk } from "../lib/ambassador-handler";

const router: IRouter = Router();

// Deliberately do not trust caller-supplied forwarding headers.
router.post("/ambassador", (req, res): void => {
  const result = handleAsk(req.body, req.ip);
  res.set(result.headers).status(result.status).json(result.body);
});

export default router;
