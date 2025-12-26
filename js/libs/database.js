define([ 'backbone', 'settings' ],
    function( Backbone, settings ){
        var database = {
            Score: Backbone.Model.extend({
                    defaults: function() {
                        return {
                            time: new Date().getTime()
                        }
                    },

                    initialize: function() {
                        if ( !this.get( 'name' ))
                            throw new Error( 'A name must be provided when ' +
                                             'initializing a database.Score' );

                        if ( !this.get( 'score' ))
                            throw new Error( 'A score must be provided when ' +
                                             'initializing a database.Score' );
                    }
                }),

                submitScore: function( highScores ){
                    // Funcionalidad de base de datos deshabilitada temporalmente
                    alert('Funcionalidad de guardar puntuaciones deshabilitada temporalmente.');
                    highScores.add.state.set( 'current', 'stopping' );
                },

                waitUntilConnected: function wait( cb ){
                    // Siempre simula conexión inmediata
                    cb();
                },

                init: function() {
                    // Simula una colección local vacía
                    database.scores = new Backbone.Collection([], { model: database.Score });
                }
            };

        database.init();

        return database
    }
);