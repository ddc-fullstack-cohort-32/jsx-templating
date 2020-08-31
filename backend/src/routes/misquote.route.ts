import {Router} from "express";
import {

  getAllMisquoteController,
  postMisquoteController,
} from "../controllers/misquote.contoller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import { misquoteValidator} from "../validators/misquote.validator";



const {checkSchema} = require("express-validator");

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
  .get(getAllMisquoteController)
  //TODO add the isLoggedIn controller back to post after final misquote lecture
  .post( asyncValidatorController(checkSchema(misquoteValidator)), postMisquoteController)

