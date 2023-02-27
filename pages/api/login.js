
export default function handler(req, res) {
    if (req.method === 'POST') {
        return handlePost(req, res)
    }

    res.status(404).send();
}

function handlePost(req, res) {
    const mockedUser = { name: 'admin' };

    res.status(200).send({ user: mockedUser });
}