MapItems = new Mongo.Collection("mapItems", {
	transform: function(doc){return new ModelItems(doc)}
});

ModelMapItems = function(doc){
	_.extend(this, doc)
}

_.extend(ModelMapItems.prototype, {
	map: function(){
		return Maps.findOne({_id: this.mapId});
	},
	item: function(){
		return Items.findOne({_id: this.itemId});
	}
});
