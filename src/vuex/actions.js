const Actions = {
    changeData ({ dispatch, state }) {
        dispatch('CHANGEDATA');
    },
    rollbackData ({ dispatch, state }) {
        dispatch('ROLLBACKDATA');
    }
};

export default Actions;
