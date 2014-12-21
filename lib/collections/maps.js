Maps = new Mongo.Collection("maps", {
	transform: function(doc){return new ModelMaps(doc)}
});

ModelMaps = function(doc){
	_.extend(this, doc)
}

_.extend(ModelMaps.prototype, {

});

Maps.attachSchema(new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	assetName: {
		type: String,
		label: "Asset Name",
		max: 200
	}
}))