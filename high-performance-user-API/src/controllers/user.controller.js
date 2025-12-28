import { getUserData } from "../services/user.service.js";

export const getUser = (req, res) => {
    const {userId} = req.params;

    const data = getUserData(userId);
    
    res.json({
        data,
        message: `Fetched data successfully for ${userId}`
    });
};