import uri from './uri';
import request from '@/utils/request';
import { aberrant } from '@/utils/decorator';

class api {
    @aberrant
    static getTopics() {
        return request.get(uri.url2);
    }
}

export default api;
