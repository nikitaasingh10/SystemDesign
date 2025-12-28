import {pool} from "../db/postgres.js"

export const getUserData = async (id) => {
    try {
        const result = await pool.query(
            "SELECT * from users WHERE id = $1", [id]
        );

        if (result.rows.length == 0) {
            throw new Error("User not found");
        }

        return {
            status: 200,
            data: result.rows[0] // passing rows from here inside data hence inside controller there is result.data
        };
    } catch (err) {
        console.log("Database error: ", err.message);
        return {
            status: 400,
            error: err.message
        };
    }
};