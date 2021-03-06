export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const sequenceList = state => state.sequenceList

export const playList = state => state.playList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const bgImg = state => state.bgImg

export const currentSong = (state) => {
	return state.playList[state.currentIndex] || {}
}