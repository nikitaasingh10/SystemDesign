import { getUserData } from "../services/user.service.js";

const simulateDelay = async() => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
};

export const getUser = async (req, res) => {
    const {userId} = req.params;

    await simulateDelay(); // simulate slow DB
    
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