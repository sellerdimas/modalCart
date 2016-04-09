Template.modal2.events({
    'click .close': function (e) {
        $('#modal2').closeModal();

    }
});
Template.modal4.events({
    'click .close': function (e) {
        $('#modal4').closeModal();

    }
});
Template.modal4.events({
    'click .modal4Cart': function (e) {
        $('#modal4').closeModal();
        Router.go('checkout');

    }
});
Template.modal4.events({
    'click .cartA': function (e) {
         event.preventDefault();
     $('#modal4').closeModal();
        Router.go('razdelnyy', {name: this.productId});
             console.log(this.productId);

    }
});
Template.modal4.events({
    'click .modal4Next': function (e) {
        event.preventDefault();
        $('#modal4').closeModal();
        


    }
});
Template.modal3.events({
    'click .close': function (e) {
        $('#modal3').closeModal();
    }
});
Template.modal4.helpers({
    'itemCountAll':function(){
        return Session.get('Cart-itemCount');
    },
    'itemTotal':function(){
        return Session.get('Cart-itemTotal');
    },
    'itemsInCart':function(){
        return !Session.equals('Cart-itemCount', 0);
    },
    'items': function(){
        var query = {};
        if(Meteor.userId())
            query.userId = Meteor.userId();
        else
            query.deviceId = Session.get('Cart-deviceId');
            
            
        return Cart.Items.find(query, {sort: {datafiel: -1}});
            
        
    }
});
Template.modal4.events({
    'blur .quantTovar':function(event, template){
        event.preventDefault();
        var quantity = $(event.target).val();
        Cart.Items.update({_id: this._id},{$set: {itemCount: quantity}})
    }
});
Template.modal4.events({
    'click .remove':function(event, template){
        event.preventDefault();
        Cart.Items.remove({_id:this._id});
    }
});



