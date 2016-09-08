import Mock from 'mockjs';

export default () => {

    const Api = (options) => {
        Mock.mock(options.url, options.type, options.response);
    };

    // 测试1
    Api({
        url: '/featured/userinfo',
        type: 'get',
        response: {
            name: 'hahaha',
            age: 28,
            sex: 'boy'
        }
    });

    // 测试2
    Api({
        url: '/featured/companyInfo',
        type: 'get',
        response: {
            name: '80net',
            age: 10,
            number: 40,
            address: '清华信息港a座9楼八零年代科技有限公司'
        }
    });

};
