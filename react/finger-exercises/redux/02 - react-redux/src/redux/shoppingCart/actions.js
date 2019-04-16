export const actions = {
  TOOGLE_CONTENT: '@@SHOPINGCART/TOOGLE_CONTENT'
};

const actionsCreators = {
  toggleContent: () => ({
    type: actions.TOOGLE_CONTENT
  })
};

export default actionsCreators;
