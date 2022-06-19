import * as increment from './increment';
import * as decrement from './decrement';
import * as posts from './posts';

export default {
    ...increment,
    ...decrement,
    ...posts
}