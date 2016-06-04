App.PostsIndexRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('post');
    }
});

App.PostIndexRoute = Ember.Route.extend({
    model: function() {
        return this.modelFor('post');
    }
});

App.PostsNewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('title', null);
        controller.set('text', null);
    }
});

App.PostCommentsNewRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('text', null);
    }
});
