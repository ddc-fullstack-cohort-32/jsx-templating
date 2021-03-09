import {Router} from "express";
import {

  getAllMisquoteController,
  postMisquoteController,
} from "./misquote.contoller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { misquoteValidator} from "./misquote.validator";



const {checkSchema} = require("express-validator");

export const MisquoteRoute = Router()

MisquoteRoute.route("/")
  .get(getAllMisquoteController)
  .post( asyncValidatorController(checkSchema(misquoteValidator)), postMisquoteController)

