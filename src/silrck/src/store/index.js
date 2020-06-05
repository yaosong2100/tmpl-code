import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import { debug } from '@/config';

import count from './modules/count.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { count },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
