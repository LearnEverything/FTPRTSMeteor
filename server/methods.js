Meteor.methods({
	testString : function(){
		console.log("yay");
		return "wooo";
	},
	makeRandomMapItems : function(mapId, numItems){
		var items = Items.find({});
		items = _.shuffle(items);
		items = _.sample(items, numItems);
		_.forEach(items, function(item){
			MapItems.insert({itemId: item._id, map: mapId});
		});
	},
	clearMapItems : function(mapId){
		MapItems.remove({map: mapId});
	},
	makeRandomNPCs : function(mapId, numNPCs){
		var NPCs = NPCs.find({});
		NPCs = _.shuffle(NPCs);
		NPCs = _.sample(NPCs, numNPCs);
		_.forEach(NPCs, function(NPC){
			MapActors.insert({actorId: NPC._id, mapId: mapId, type: "npc"});
		});
	},
	clearRandomNPCs : function(mapId){
		MapActors.remove({mapId: mapId})
	}
})