import test from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ResourceHeader, ResourceTable, ResourceFeedback } from '../src/blocks/resource-view/index';

test('resource header has one page heading and renders its action', () => {
  const html = renderToStaticMarkup(createElement(ResourceHeader, { title: 'People', action: createElement('button', null, 'Create') }));
  assert.match(html, /<h1[^>]*>People<\/h1>/);
  assert.match(html, /<button>Create<\/button>/);
});
test('resource feedback announces errors before loading and retains retry', () => {
  const html = renderToStaticMarkup(createElement(ResourceFeedback, { error: 'Save failed', loading: true, retry: createElement('button', null, 'Retry') }));
  assert.match(html, /role="alert"/);
  assert.match(html, /Retry/);
  assert.doesNotMatch(html, /Loading/);
  assert.equal(renderToStaticMarkup(createElement(ResourceFeedback, {})), '');
  assert.match(renderToStaticMarkup(createElement(ResourceFeedback, {loading: true})), /role="status"/);
});
test('resource table labels columns, renders records and announces an empty list', () => {
  const props = {title: 'People', records: [{id:'1',name:'Ada'}], getKey: (item: {id:string;name:string}) => item.id, columns:[{id:'name',label:'Name',render:(item:{id:string;name:string}) => item.name}],actions:() => createElement('button',null,'Edit')};
  const html = renderToStaticMarkup(createElement(ResourceTable<{id:string;name:string}>, props));
  assert.match(html, /<caption[^>]*>People<\/caption>/);
  assert.match(html, /scope="col"/);
  assert.match(html, /Ada/);
  assert.match(html, /Actions/);
  const empty = renderToStaticMarkup(createElement(ResourceTable<{id:string;name:string}>, {...props,records:[],emptyMessage:'No people'}));
  assert.match(empty, /role="status">No people/);
});
