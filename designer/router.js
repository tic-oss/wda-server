var wda = require('./controller');

module.exports = function(router) {
    router.get('/blueprints',wda.getBlueprints);
    router.delete('/delete/:project_id', wda.deleteBlueprint);
    router.get('/projects', wda.getProjectNames);
    router.post('/update/:project_id',wda.updateBlueprint);
    router.get('/user/:project_id',wda.verifyproject);
    router.post('/create',wda.createBlueprint);
}