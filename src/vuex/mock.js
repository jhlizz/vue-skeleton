import Mock from 'mockjs';

export default () => {

    const mockApiConfig = (options) => {
        Mock.mock(options.url, options.type, options.response);
    };

    // 测试1
    mockApiConfig({
        url: '/featured/userinfo',
        type: 'get',
        response: {
            code: 200,
            success: true,
            data: {
                name: 'sea',
                age: 29,
                sex: 'man'
            }
        }
    });

    // 测试2
    mockApiConfig({
        url: '/featured/companyList',
        type: 'get',
        response: {
            code: 200,
            success: true,
            data: [{
                name: '80net',
                age: 10,
                number: 40,
                address: '清华信息港a座9楼八零年代科技有限公司'
            }, {
                name: '80net',
                age: 10,
                number: 40,
                address: '清华信息港a座9楼八零年代科技有限公司'
            }, {
                name: '80net',
                age: 10,
                number: 40,
                address: '清华信息港a座9楼八零年代科技有限公司'
            }]
        }
    });

};
