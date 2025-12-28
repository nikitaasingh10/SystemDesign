import { getUserData } from "../services/user.service.js";

export const getUser = async (req, res) => {
    const {userId} = req.params;

    const result = await getUserData(userId);

    if (result.status != 200) {
        res.status(404).json({
            status: result.status,
            error: result.error
        });
    }
    
    res.json({
        status: 200,
        data: result.data,
        message: `Fetched data successfully for ${userId}`
    });
};