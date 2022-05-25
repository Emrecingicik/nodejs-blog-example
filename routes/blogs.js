var express = require('express');
var router = express.Router();
var dummyBlogs = require('../dummy.json');

/* GET blogs listing. */
router.get('/', function(req, res, next) {
    res.send(dummyBlogs);
});

/* GET blogs listing. */
router.get('/:blog_id', function(req, res, next) {
    const { blog_id } = req.params;
    let findedBlog = dummyBlogs.filter((x) => x.id == blog_id)[0];
    res.send(findedBlog);
});

router.post('/', function(req, res, next) {
    dummyBlogs.push(req.body);
    res.send(req.body);
});

router.delete('/:blog_id', function(req, res, next) {
    const { blog_id } = req.params;
    let findedBlog = dummyBlogs.filter((x) => x.id == blog_id)[0];
    let index = dummyBlogs.indexOf(findedBlog);
    dummyBlogs.splice(index, 1);
    res.send(findedBlog);
});



module.exports = router;