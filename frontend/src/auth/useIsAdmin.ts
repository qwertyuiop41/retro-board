import useBackendCapabilities from'../global/useBackendCapabilities';
import useUser from'./useUser';
function cov_1cszfus46e(){var path="/Users/siyiwang/Desktop/wsy/retro-board/frontend/src/auth/useIsAdmin.ts";var hash="33b57c01d356e92267caba9206eeb07a7cf56b1c";var global=window;var gcv="__coverage__";var coverageData={path:"/Users/siyiwang/Desktop/wsy/retro-board/frontend/src/auth/useIsAdmin.ts",statementMap:{"0":{start:{line:5,column:15},end:{line:5,column:24}},"1":{start:{line:6,column:18},end:{line:6,column:42}},"2":{start:{line:7,column:2},end:{line:7,column:44}}},fnMap:{"0":{name:"useIsAdmin",decl:{start:{line:4,column:24},end:{line:4,column:34}},loc:{start:{line:4,column:37},end:{line:8,column:1}},line:4}},branchMap:{},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"33b57c01d356e92267caba9206eeb07a7cf56b1c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
// eslint-disable-next-line no-func-assign
cov_1cszfus46e=function(){return actualCoverage;};}return actualCoverage;}cov_1cszfus46e();export default function useIsAdmin(){cov_1cszfus46e().f[0]++;const user=(cov_1cszfus46e().s[0]++,useUser());const backend=(cov_1cszfus46e().s[1]++,useBackendCapabilities());cov_1cszfus46e().s[2]++;return user?.email===backend.adminEmail;}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWNzemZ1czQ2ZSIsImFjdHVhbENvdmVyYWdlIiwidXNlQmFja2VuZENhcGFiaWxpdGllcyIsInVzZVVzZXIiLCJ1c2VJc0FkbWluIiwiZiIsInVzZXIiLCJzIiwiYmFja2VuZCIsImVtYWlsIiwiYWRtaW5FbWFpbCJdLCJzb3VyY2VzIjpbInVzZUlzQWRtaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUJhY2tlbmRDYXBhYmlsaXRpZXMgZnJvbSAnLi4vZ2xvYmFsL3VzZUJhY2tlbmRDYXBhYmlsaXRpZXMnO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSAnLi91c2VVc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSXNBZG1pbigpIHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgY29uc3QgYmFja2VuZCA9IHVzZUJhY2tlbmRDYXBhYmlsaXRpZXMoKTtcbiAgcmV0dXJuIHVzZXI/LmVtYWlsID09PSBiYWNrZW5kLmFkbWluRW1haWw7XG59XG4iXSwibWFwcGluZ3MiOiI4N0JBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxzQkFBc0IsS0FBTSxrQ0FBa0MsQ0FDckUsTUFBTyxDQUFBQyxPQUFPLEtBQU0sV0FBVyxDQUUvQixjQUFlLFNBQVMsQ0FBQUMsVUFBVUEsQ0FBQSxDQUFHLENBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUNuQyxLQUFNLENBQUFDLElBQUksRUFBQU4sY0FBQSxHQUFBTyxDQUFBLE1BQUdKLE9BQU8sRUFBRSxFQUN0QixLQUFNLENBQUFLLE9BQU8sRUFBQVIsY0FBQSxHQUFBTyxDQUFBLE1BQUdMLHNCQUFzQixFQUFFLEVBQUNGLGNBQUEsR0FBQU8sQ0FBQSxNQUN6QyxNQUFPLENBQUFELElBQUksRUFBRUcsS0FBSyxHQUFLRCxPQUFPLENBQUNFLFVBQVUsQ0FDM0MifQ==