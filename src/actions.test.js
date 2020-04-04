import * as actions from './actions';
import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants';


import nock from 'nock';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import { apiCall } from './api/api';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'wooo';
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    }
    expect(action[0]).toEqual(expectedAction);
});

it('handles fetching robots Success', () => {
       
    const store = mockStore();
    store.dispatch(actions.requestRobots()).then(data => {    
        const expectedPayload = {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: data         
        }
        const actions2 = store.getActions()
        expect(actions2[0]).toEqual(expectedPayload);
    })
    
})


