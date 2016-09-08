// export const changeData = ({ dispatch, state }) => {
//     dispatch('CHANGEDATA');
// };


const Actions = {
    changeData ({ dispatch, state }) {
        dispatch('CHANGEDATA');
    },
    rollbackData ({ dispatch, state }) {
        dispatch('ROLLBACKDATA');
    }
};

export default Actions;
