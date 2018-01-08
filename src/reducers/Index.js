let Index = (state = {apiname: ''}, action) => {
  switch (action.type) {
    case 'clearClassData':
      return {...state, classData: null}
    case 'setApiName':
      return {...state, apiname: action.source, classData: null}
    case 'addClassData':
      return {...state, classData: action.source}
    case 'addMenuData':
      return {...state, menuData: action.source}
    case 'setDescription':
      return {...state, description: action.source}
    default:
      return state
  }
}
export default Index
