const { Post } = require('../models');

const postData = [{
        title: 'Awesome Post I',
        content: 'Some information to add in here.',
        user_id: 1

    },
    {
        title: 'Awesome Post II',
        content: 'Some information to add in here also.',
        user_id: 2
    },
    {
        title: 'Awesome Post III',
        content: 'Finally, some information to add in here too.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;