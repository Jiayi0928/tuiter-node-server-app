import posts from './tuits.js';
let tuits = posts;

const TuitsController = (app) => {

    app.get('/api/tuits', findTuits);
    app.get('/api/tuits/:tid', findTuitById);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}

const updateTuit = (req, res) => {
    const tuitId = req.params.tid;
    const updates = req.body;
    tuits = tuits.map(t => t._id === tuitId ?
        updates : t
    );
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitID = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitID);
    res.sendStatus(200);
}

const createTuit = (req, res) => {
    const newTuit = req.body;

    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.retuits = 0;
    newTuit.comments = 0;
    newTuit.username = "Jiayi";
    newTuit.handle = "jiayi";
    newTuit.time =  "Just now";
    newTuit.logo = "./pics/profile.jpg";
    tuits.push(newTuit);
    res.json(tuits);

}

const findTuitById = (req, res) => {

    const tid = req.params.tid;
    const tuit = tuits.find(t => t._id === tid);
    res.json(tuit);
}

const findTuits = (req, res) => {
    res.json(tuits);
}


export default TuitsController;