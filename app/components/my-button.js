import Ember from 'ember';
import TooltipsterComponent from 'ember-cli-tooltipster/components/tool-tipster';
export default TooltipsterComponent.extend({
  contentAsHTML: true,
  interactive: true,

  didInsertElement() { 
    let content = this.$('#tooltip-content').html();
    let safeContent = Ember.String.htmlSafe(content);
    this.set('content', safeContent);
  }
});
