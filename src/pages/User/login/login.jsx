// import { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import './login.less'

const Login = (props) => {

    // const { state } = props
    // const { status } = state

    const handleSubmit = (values) => {
        const { dispatch } = props;
        dispatch({
            type: 'login/login',
            payload: { ...values, type: 'account' },
        });
    };

    return (
        <div className="login-warp">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={(values) => {
                    handleSubmit(values);
                    return Promise.resolve();
                }}
            >
                <Form.Item name="user" rules={[{ required: true, message: 'Please input your user!' }]} >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="user" />
                </Form.Item>
                <Form.Item name="pwd" rules={[{ required: true, message: 'Please input your pwd!' }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"> Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default connect(({ login }) => ({
    state: login
}))(Login);