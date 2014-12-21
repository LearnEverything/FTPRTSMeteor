Items = new Mongo.Collection("items", {
	transform: function(doc){return new ModelItems(doc)}
});

ModelItems = function(doc){
	_.extend(this, doc)
}

_.extend(ModelItems.prototype, {
	
});

Items.attachSchema(new SimpleSchema({
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