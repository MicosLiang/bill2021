'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	
	let loginUrl = 'http://my.lzu.edu.cn:8080/login?service=http://my.lzu.edu.cn';
	
	let username = event.username;
	
	let password = event.password;
	
	var res = await uniCloud.httpclient.request(loginUrl);
	let ltPattern = /name="lt" value="(.+)"/;
	let lt = ltPattern.exec(res.data)[1];
	let executionPattern = /name="execution" value="(.+)"/;
	let execution = executionPattern.exec(res.data)[1];
	let eventIdPattern = /name="_eventId" value="(.+)"/;
	let eventId = eventIdPattern.exec(res.data)[1];
	var cookie = res.headers['set-cookie'];
	
	var res = await uniCloud.httpclient.request(loginUrl, {
		method: 'POST',
		data: {
			username: username,
			password: password,
			lt: lt,
			execution: execution,
			_eventId: eventId,
		},
		headers: {
			'Cookie': cookie,
		}
	});
	
	cookie = cookie.concat(res.headers['set-cookie']);

	let location = res.headers['location'];
	var res = await uniCloud.httpclient.request(location, {
		headers: {
			'Cookie': cookie,
		},
	})
	cookie = cookie.concat(res.headers['set-cookie']);

	return cookie;
};
