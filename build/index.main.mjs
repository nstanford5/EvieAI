// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v43 = stdlib.protect(ctc0, interact.num, 'for Admin\'s interact field num');
  
  const txn1 = await (ctc.sendrecv({
    args: [v43],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:12:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:12:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v47], secs: v49, time: v48, didSend: v27, from: v46 } = txn1;
      
      ;
      const v50 = stdlib.safeAdd(v47, stdlib.checkedBigNumberify('./index.rsh:13:24:decimal', stdlib.UInt_max, '1'));
      
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v47], secs: v49, time: v48, didSend: v27, from: v46 } = txn1;
  ;
  const v50 = stdlib.safeAdd(v47, stdlib.checkedBigNumberify('./index.rsh:13:24:decimal', stdlib.UInt_max, '1'));
  stdlib.protect(ctc1, await interact.showNum(v50), {
    at: './index.rsh:14:21:application',
    fs: ['at ./index.rsh:14:21:application call to [unknown function] (defined at: ./index.rsh:14:21:function exp)', 'at ./index.rsh:14:21:application call to "liftedInteract" (defined at: ./index.rsh:14:21:application)'],
    msg: 'showNum',
    who: 'Admin'
    });
  
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 1,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByACAAEmAQAiNQAxGEEApihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARciEkSBoI0GiACRIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T0","name":"v65","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6103c56001600160401b036080601f38849003908101601f1916820190838211838310176101c457808391604096879485528339810103126101da578251838101818110848211176101c45784528151815260209182015182820190815243600355845193848401908111858210176101c4578552600080945260ff600454166101ac5760607f6de3f97962105ba8e929dd0da178e54f00336c9ea6154699025bad3d4f17547f918651903382528451868301525187820152a15180159081156101a0575b501561018857346101705781805560018281556002548181811c91168015610166575b838210146101525780610103575b84516101e590816101e08239f35b601f811160011461011e575050506002555b388080806100f5565b6002845281601f848620920160051c820191015b8181106101485750505081208160025555610115565b8481558201610132565b634e487b7160e01b84526022600452602484fd5b90607f16906100e7565b825163100960cb60e01b815260096004820152602490fd5b825163100960cb60e01b815260086004820152602490fd5b905060015414386100c4565b845163100960cb60e01b815260076004820152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604090808252600436101561001d575b5050361561001b57005b005b600090813560e01c9081631e93b0f1146101bc5750806383230757146101995763ab53f2c60361001157346101965780600319360112610196578054918051918060025490600182811c9080841693841561018c575b60209485841081146101785783895288949392918690821561015c575050600114610121575b5050601f801996879203011681019581871060018060401b0388111761010d5785858589958694858452855282818601528551809386015281955b8387106100f45750506060945090601f9185828601015201168101030190f35b86810182015188880160600152958101958795506100d4565b634e487b7160e01b84526041600452602484fd5b90849250600286528286209186925b828410610144575050508201013880610099565b8054848b018601528995508694909301928101610130565b925093505060ff191682840152151560051b8201013880610099565b634e487b7160e01b87526022600452602487fd5b91607f1691610073565b80fd5b5090346101b857816003193601126101b8576020906001549051908152f35b5080fd5b9050346101b857816003193601126101b8576020906003548152f3fea164736f6c6343000810000a`,
  BytecodeLen: 965,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:15:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin
  };
export const _APIs = {
  };
