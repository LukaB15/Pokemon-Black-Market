import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  console.log("dans verify token");
  console.log("request", req);
  const autHeader = req.headers.token;
  //console.log("request.headers  ", req.headers);
  console.log("autheader : ", autHeader);
  if (autHeader) {

    const token = autHeader && autHeader.split(" ")[1];
    console.log("token : ",token);
    
    if (token == null) return res.status(401);
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that");
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
