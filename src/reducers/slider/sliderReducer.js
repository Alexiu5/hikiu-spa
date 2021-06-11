export const slider_consts = {
	FILLSLIDE: 'FILL_SLIDES',
	BACKSLIDE: 'BACK_SLIDE',
	NEXTSLIDE: 'NEXT_SLIDE',
	CUSTOMSLIDE: 'CUSTOM_SLIDE',
};

const reducer = (state, action) => {
	switch (action.type) {
		case slider_consts.FILLSLIDE:
			return { ...state, slides: action.payload };
		case slider_consts.BACKSLIDE:
			if(state.index === 0) return { ...state, index: state.slides.length-1 };
			return { ...state, index: state.index - 1 };
		case slider_consts.NEXTSLIDE:
			if(state.index === state.slides.length-1) return {...state, index: 0};
			return { ...state, index: state.index + 1 };
		case slider_consts.CUSTOMSLIDE:
			return { ...state, index: action.payload };
		default:
			return state;
	}
};

export default reducer;
