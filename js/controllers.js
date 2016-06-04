App.PostCommentsNewController = Ember.Controller.extend({
    needs: 'post',

    text: null,

    actions: {
        save: function() {
            var post = this.get('controllers.post.content');
            var comment = this.get('store').createRecord('comment', {
                post: post,
                text: this.get('text')
            });
            comment.save().then(function(comment) {
                post.get('comments').pushObject(comment);
            });
            this.get('target').transitionTo('post.index');
        }
    }
});

App.PostsNewController = Ember.Controller.extend({

    title: null,
    text: null,

    actions: {
        save: function(post) {
            var me = this;
            var post = this.get('store').createRecord('post', {
                title: this.get('title'),
                text: this.get('text')
            });
            post.save().then(function(post) {
                me.get('target').transitionTo('posts.index');
            });
        }
    }
});
