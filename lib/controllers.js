MapController = RouteController.extend({
	waitOn: function(){
		return Meteor.subscribe("oneMap", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			oneMap: function(){
				return Maps.findOne({_id: self.params._id});
			}
		}
	}
});

NPCController = RouteController.extend({
	waitOn: function(){
		return Meteor.subscribe("oneNPC", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			NPC: function(){
				return NPCs.findOne({_id: self.params._id});
			}
		}
	}
})

ItemController = RouteController.extend({
	waitOn: function(){
		return Meteor.subscribe("oneItem", this.params._id);
	},
	data: function(){
		var self = this;
		return {
			item: function(){
				return Items.findOne({_id: self.params._id})
			}
		}
	}
})