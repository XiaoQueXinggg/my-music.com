import * as types from './mutation-type'
const matutions = {
	[types.SET_SINGER](state,singer) {
		state.singer = singer
	},
	[types.SET_PALYING_STATE](state,flag){
		state.playing = flag
	},
	[types.SET_FULL_SCREEN](state,flag){
		state.fullScreen = flag
	},
	[types.SET_PLAYLIST](state,list){
		state.playList = list
	},
	[types.SET_SEQUENCE_LIST](state,list){
		state.sequenceList = list
	},
	[types.SET_PLAY_MODE](state,mode){
		state.mode = mdoe
	},
	[types.SET_CURRENT_INDEX](state,index){
		state.currentIndex = index
	},	
}
export default matutions