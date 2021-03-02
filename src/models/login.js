// import { stringify } from 'querystring';
// import { history } from 'umi';
// import { message } from 'antd';
import { fakeAccountLogin } from '@/services/login';

const Model = {
    namespace: 'login',
    state: {
        status: undefined,
    },
    reducers: {
        changeLoginStatus(state, { payload }) {
            setAuthority(payload.currentAuthority);
            return { ...state, status: payload.status, type: payload.type };
        },
    },
    effects: {
        *login({ payload }, { call, put }) {
            const response = yield call(fakeAccountLogin, payload);
            console.log(response)
            if (response.status === 'fail') {
                message.warning('🎉 🎉 🎉  账号密码错误！');
            } else {
                const urlParams = new URL(window.location.href);
                message.success('🎉 🎉 🎉  登录成功！');
            }

            // if (response.status === 'ok') {
            // const urlParams = new URL(window.location.href);
            // message.success('🎉 🎉 🎉  登录成功！');
            //   const params = getPageQuery();

            //   let { redirect } = params;

            //   if (redirect) {
            //     const redirectUrlParams = new URL(redirect);

            //     if (redirectUrlParams.origin === urlParams.origin) {
            //       redirect = redirect.substr(urlParams.origin.length);

            //       if (redirect.match(/^\/.*#/)) {
            //         redirect = redirect.substr(redirect.indexOf('#') + 1);
            //       }
            //     } else {
            //       window.location.href = '/';
            //       return;
            //     }
            //   }

            //   history.replace(redirect || '/');
            // }
        },
    },

}
export default Model;