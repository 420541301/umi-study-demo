const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

export default {
    'post /api/login': async (req, res) => {
        const { user, pwd, type } = req.body;
        await waitTime(1000);
        console.log(user, pwd, type)
        if (pwd === '123' && user === 'admin') {
            res.send({
                status: 'ok',
                type: type,
                currentAuthority: 'admin',
            });
            return;
        } else {
            res.send({
                status: 'fail',
            });
        }
    }
}