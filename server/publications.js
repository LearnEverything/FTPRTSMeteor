Meteor.publish("allNPCs", function(){
	return NPCs.find({})
});

Meteor.publish("oneNPC", function(npcId){
	return NPCs.find({_id: npcId});
});

Meteor.publish("allMaps", function(){
	return Maps.find({})
});

Meteor.publish("oneMap", function(mapId){
	return Maps.find({_id: mapId});
});

Meteor.publish("allItems", function(){
	return Items.find({})
});

Meteor.publish("oneItem", function(itemId){
	return Items.find({_id: itemId})
});