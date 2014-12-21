NPCs = new Mongo.Collection("npcs");

NPCs.attachSchema(new SimpleSchema({
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