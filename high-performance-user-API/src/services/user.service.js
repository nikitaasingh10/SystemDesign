
export const getUserData = (id) => {
    // returning dummy data
    const user = {
        id,
        name: "Nikita Singh",
        email: "nsingh@gmail.com",
        createdAt: new Date()
    }

    return user;
};