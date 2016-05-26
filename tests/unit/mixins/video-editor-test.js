import Ember from 'ember';
import VideoEditorMixin from 'ember-js-getting-started/mixins/video-editor';
import { module, test } from 'qunit';

module('Unit | Mixin | video editor');

// Replace this with your real tests.
test('it works', function(assert) {
  let VideoEditorObject = Ember.Object.extend(VideoEditorMixin);
  let subject = VideoEditorObject.create();
  assert.ok(subject);
});
