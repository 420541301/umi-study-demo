import request from '@/utils/request.js';

export async function fakeAccountLogin(params) {
	return request('/api/login', {
		method: 'POST',
		data: params,
	});
}