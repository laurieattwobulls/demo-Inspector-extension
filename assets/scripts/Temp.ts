// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property, inspector} = cc._decorator;

@ccclass
@inspector("packages://inspectors/temp-inspector.js")
export default class Temp extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

}
