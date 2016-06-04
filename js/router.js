App.Router.map(function() {
    this.route('posts', function() {
        this.route('new');
    });
    this.route('post', {
        path: '/posts/:post_id'
    }, function() {
        this.route('comments', function() {
            this.route('new');
            this.route('create');
        });
        this.route('comment', {
            path: 'comments/:comment_id'
        });
    });
});
