 function index(req, res, next) {
  res.render('index', { title: 'Express World' });
}


function handlePost(req,res) {
    res.status(200).send("This is a post request")
};

function handlePut(req,res) {
    res.status(200).send("This is a put request")
};

function handlePatch(req,res) {
    res.status(200).send("This is a patch request")
};

function handleDelete(req,res) {
    res.status(200).send("This is a delete request")
};

module.exports = { index, handlePost, handlePut, handlePatch, handleDelete };