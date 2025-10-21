import jwt from 'jsonwebtoken';

export function isRequestAuthenticated(req, res, next) {

    const authHeader = req.headers.authorization;
    const jwtToken = authHeader?.split(" ")[1];

    console.log({jwtToken})

    if (!authHeader || !jwtToken) {
        res.status(400).json(
            {
                status: "fail",
                msg: "Auth header not properly defined",
            }
        );
        return;
    }

    const JWT_SECRET = process.env.JWT_SECRET;
    let token = null;
    
    try {
        token = jwt.verify(jwtToken, JWT_SECRET);
    } catch (err) {
        console.log(`Invalid Token ${err}`);
        res.status(400).json({
            status: "fail",
            msg: "Invalid token",
        });
        return;
    }

    req.userdetails = {username : token.username, uid: token.uid};
    console.log(req.userdetails);

    next();
}