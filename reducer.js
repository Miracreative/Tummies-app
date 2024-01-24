const initialState = {language: 'en',
                        currentAddress: 'non location',
                        latitude: 47.4217937,
                        longitude: -122.083922,
                        childrens: {
                            children1: {
                                gender: '',
                                name: '',
                                age: 15
                            }
                            
                        }};
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LNG': 
            if(state.language == 'en') {
                return {
                    ...state,
                    language: 'ar'
                }
            } else if(state.language == 'ar') {
                return {
                    ...state,
                    language: 'en'
                }
            }
        case 'LATITUDE': 
            return {
                ...state,
                latitude: action.payload
            }
        case "LONGITUUDE": 
            return {
                ...state,
                longitude: action.payload
            }
        case 'LOCATION': 
            return {
                ...state,
                currentAddress: action.payload
            }
        case 'GENDER1':
            return {
                ...state,
                childrens: {
                    ...state.childrens,
                    children1: {
                        ...state.childrens.children1,
                        gender: action.payload
                    }
                }
            }
        case 'NAME1':
            return {
                ...state,
                childrens: {
                    ...state.childrens,
                    children1: {
                        ...state.childrens.children1,
                        name: action.payload
                    }
                }
            }
        case 'AGE1':
            return {
                ...state,
                childrens: {
                    ...state.childrens,
                    children1: {
                        ...state.childrens.children1,
                        age: action.payload
                    }
                }
            }
		default:
			return state
	}
}

export default reducer;