// import posts from './tuits.js';
// let tuits = posts;
import * as tuitsDao from '../tuits/tuits-dao.js';

const TuitsController = (app) => {

    app.get('/api/tuits', findTuits);
    // app.get('/api/tuits/:tid', findTuitById);
    app.post('/api/tuits', createTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.put('/api/tuits/:tid', updateTuit);
}


const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;

    // newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.retuits = 0;
    newTuit.comments = 0;
    newTuit.username = "Jiayi";
    newTuit.handle = "jiayi";
    newTuit.time =  "Just now";
    newTuit.logo = "./pics/profile.jpg";
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete);
    res.json(status);
}

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
    res.json(status);
}

//The current implementation of the tuits-controller retrieved, updated, and deleted tuits from a tuits array,
// but now that we have a database that can store data permanently, let's refactor the controller to store the tuits in the tuits collection stored in the mongo database.

// const updateTuit = (req, res) => {
//     const tuitId = req.params.tid;
//     const updates = req.body;
//     tuits = tuits.map(t => t._id === tuitId ?
//         updates : t
//     );
//     res.sendStatus(200);
// }
//
// const deleteTuit = (req, res) => {
//     const tuitID = req.params.tid;
//     tuits = tuits.filter(t => t._id !== tuitID);
//     res.sendStatus(200);
// }
//
// const createTuit = (req, res) => {
//     const newTuit = req.body;
//
//     newTuit._id = (new Date()).getTime() + '';
//     newTuit.likes = 0;
//     newTuit.liked = false;
//     newTuit.retuits = 0;
//     newTuit.comments = 0;
//     newTuit.username = "Jiayi";
//     newTuit.handle = "jiayi";
//     newTuit.time =  "Just now";
//     newTuit.logo = "./pics/profile.jpg";
//     tuits.push(newTuit);
//     res.json(tuits);
//
// }
//
// const findTuitById = (req, res) => {
//
//     const tid = req.params.tid;
//     const tuit = tuits.find(t => t._id === tid);
//     res.json(tuit);
// }

// const findTuits = (req, res) => {
//     res.json(tuits);
// }


export default TuitsController;