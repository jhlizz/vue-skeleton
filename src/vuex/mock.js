import Mock from 'mockjs';

export default () => {

    const Api = (options) => {
        Mock.mock(options.url, options.type, options.response);
    };

    // 测试
    Api({
        url: '/featured/userinfo',
        type: 'get',
        response: {
            name: 'hahaha',
            age: 28,
            sex: 'boy'
        }
    });

};
