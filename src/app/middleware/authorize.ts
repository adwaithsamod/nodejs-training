
import express from "express";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";
import RequestWithUser from "../util/rest/request";
import jsonwebtoken from "jsonwebtoken";
import APP_CONSTANTS from "../constants";
const authorize = () => {
 return async (
   req: RequestWithUser,
   res: express.Response,
   next: express.NextFunction
 ) => {
   try {
     const token = getTokenFromRequestHeader(req);
     jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
     console.log(jsonwebtoken.decode(token))
     return next();
   } catch (error) {
     return next(new UserNotAuthorizedException());
   }
 };
};

const authorizeCreateAndEdit = () => {
  return async (
    req: RequestWithUser,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const token = getTokenFromRequestHeader(req);
      jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
      const details = (jsonwebtoken.decode(token));
      const role = (JSON.parse(JSON.stringify(details))).customRole;
      if(role==="admin")
      return next();
      else
      return next(new UserNotAuthorizedException());
    } catch (error) {
      return next(new UserNotAuthorizedException());
    }
  };
 };

const getTokenFromRequestHeader = (req: RequestWithUser) => {
    const tokenWithBearerHeader = req.header(
      `${APP_CONSTANTS.authorizationHeader}`
    );
    if (tokenWithBearerHeader) {
      return tokenWithBearerHeader.replace(`${APP_CONSTANTS.bearer} `, "");
    }
    return "";
   };


export {authorize, authorizeCreateAndEdit};