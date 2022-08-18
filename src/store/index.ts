import { defineStore } from 'pinia';
import { allStore } from './allStore';
interface stateInterFace{
    msg:string,
    num:number,
    count:number,
}
export const mainStore = defineStore('main', {
    state: ():stateInterFace => {
        return {
            msg: "i am pinia",
            num: 99,
            count: 77,
        }
    },
    getters: {
        getCount(state):number {
            return state.count * 2;
        }
    },
    actions: {
        changeMsgByAction():void {
            this.msg = "acitonMsg";
        },
        getAllStoreMsg():string {
            return allStore().allMsg;
        }

    },
})