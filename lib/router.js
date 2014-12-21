Router.configure({
	layoutTemplate: "defaultLayout"
})

Router.map(function(){
	this.route("home", {
		path: "/",
		template: "maps"
	});
	this.route("maps", {
		path: "/maps",
		waitOn: function(){
			return Meteor.subscribe("allMaps");
		},
		data: function(){
			return {
				maps: function(){
					return Maps.find({})
				}
			}
		}
	});
	this.route("map", {
		path: "/map/:_id",
		controller: "MapController"
	});
	this.route("mapUpdate", {
		path: "/map/update/:_id",
		controller: "MapController"
	});
	this.route("NPCs", {
		path: "/NPCs",
		template: "NPCs",
		waitOn: function(){
			return Meteor.subscribe("allNPCs");
		},
		data: function(){
			return {
				NPCs: function(){
					return NPCs.find();
				}
			}
		}
	});
	this.route("NPC", {
		path: "/NPC/:_id",
		template: "NPC",
		controller: "NPCController"
	});
	this.route("NPCUpdate", {
		path: "/NPC/update/:_id",
		template: "NPCUpdate",
		controller: "NPCController"
	});
	this.route("items", {
		path: "/items",
		waitOn: function(){
			return Meteor.subscribe("allItems");
		},
		data: function(){
			return {
				items: function(){
					return Items.find({})
				}
			}
		}
	});
	this.route("item", {
		path: "/item/:_id",
		controller: "ItemController"
	});
	this.route("itemUpdate", {
		path: "/item/update/:_id",
		controller: "ItemController"
	});
})