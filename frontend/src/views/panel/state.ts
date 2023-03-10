import { atom } from 'recoil';

function cov_1njvbf9rej(){var path="/Users/siyiwang/Desktop/wsy/retro-board/frontend/src/views/panel/state.ts";var hash="bbb2506d23bfbe311b2b29aa561937ec336d9552";var global=window;var gcv="__coverage__";var coverageData={path:"/Users/siyiwang/Desktop/wsy/retro-board/frontend/src/views/panel/state.ts",statementMap:{"0":{start:{line:3,column:33},end:{line:6,column:2}}},fnMap:{},branchMap:{},s:{"0":0},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bbb2506d23bfbe311b2b29aa561937ec336d9552"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
// eslint-disable-next-line no-func-assign
  cov_1njvbf9rej=function(){return actualCoverage;};}return actualCoverage;}cov_1njvbf9rej();

export const PanelToggledState = atom<boolean>({
  key: 'PANEL_TOGGLED',
  default: false,
});
