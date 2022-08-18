import * as Interface from './interfaceUrl';
import * as RequestFn from './requestFn';
import { allStore } from '../allStore';
import { mainStore } from '../index';


export default {
    /**登录 */
    login(params: object): any {
        //改变其他store的数据
        mainStore().msg = "apiCHANGE";
        return RequestFn.postJsonData(Interface.login, params);
    },
} 