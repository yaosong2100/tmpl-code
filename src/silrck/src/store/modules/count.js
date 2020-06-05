/**
 * count
 */

import * as types from '../types';
import api from '@/api';
const state = {
    count: 0
};

const getters = {
    count: state => state.count
};

const mutations = {
    increment: state => {
        const obj = state;
        obj.count += 1;
    },
    decrement: state => {
        const obj = state;
        obj.count -= 1;
    },
    [types.LOGIN_POST](state, res) {
        state.count += res.data.length;
    }
};
const actions = {
    async getTopics({ commit }) {
        const topics = await api.getTopics();
        if (topics.length === 0) {
            return false;
        }
        commit(types.LOGIN_POST, topics);
    }
};
export default {
    state,
    getters,
    mutations,
    actions
};
