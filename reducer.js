const initialState = {language: 'en',
                        currentAddress: 'non location',
                        latitude: 47.4217937,
                        longitude: -122.083922,
                        plan: {
                            sum: 1000,
                            long: 'sar/hellp'
                        },
                        childrens: {
                            children1: {
                                gender: '',
                                name: '',
                                age: 15
                            }
                            
                        },
                        deliveryDatails: {
                            time: 'morning',
                            date: 'Friday, February2, 2024'
                        }
                    };
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
        case 'SUM': 
            return {
                ...state,
                plan: {
                    sum: action.payload,
                    ...state.plan
                }
            }
        case 'LONG': 
            return {
                ...state,
                plan: {
                    ...state.plan,
                    long: action.payload
                }
            }
        case 'TIME': 
            return {
                ...state,
                deliveryDatails: {
                    time: action.payload,
                    ...state.deliveryDatails
                }
            }
        case 'DATE': 
            return {
                ...state,
                deliveryDatails: {
                    date: action.payload,
                    ...state.deliveryDatails
                }
            }
		default:
			return state
	}
}

export default reducer;