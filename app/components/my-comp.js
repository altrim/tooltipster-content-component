import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    actionFromTooltip() {
      console.log('action from my-comp');
      alert('action from my comp');
    }
  }
});
