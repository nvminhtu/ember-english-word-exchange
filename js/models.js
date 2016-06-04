App.Post = DS.Model.extend({
    comments: DS.hasMany('comment', {
        async: true
    }),
    title: DS.attr('string'),
    text: DS.attr('string')
});

App.Comment = DS.Model.extend({
    post: DS.belongsTo('post'),
    text: DS.attr('string')
});

App.Post.reopenClass({
    FIXTURES: post
});

App.Comment.reopenClass({
    FIXTURES: comment
});
