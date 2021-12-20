'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)

	let username = event.username;
	let password = event.password;
	let startDate = '2021-1-1';
	let endDate = '2021-12-19';
	let billType = '1';

	let cookie;

	var res = await uniCloud.callFunction({
		name: "newLogin",
		data: {
			username: username,
			password: password,
		}
	}).then(res => {
		cookie = res['result'];
	}).catch(err => {
		console.log(err);
	})
	// console.log(cookie)

	let url = 'https://ecard.lzu.edu.cn/bill';
	var res = await uniCloud.httpclient.request(url, {
		method: 'POST',
		data: {
			timeInterval: '',
			typeFlag: billType,
			startdealTime: startDate,
			enddealTime: endDate,
			payepId: '',
			eWalletId: '',
			cardaccNum: '',
			start: '1',
			end: '200000',
			size: '20',
		},
		headers: {
			'Cookie': cookie,
		},
	})
	var bill = getBillItem(res.data);

	//返回数据给客户端
	return bill;
};

function getBillItem(text) {
	var regexp1 = /<tbody>[\s\S]+<\/tbody>/g;
	var body = regexp1.exec(text)[0];
	var regexp2 = /<tr>[\s\S]+?<\/tr>/g;
	var tr = body.match(regexp2);


	var reg = {
		'水控': /水控/g,
		'芝兰苑': /芝兰苑/g,
		'玉树苑': /玉树苑/g,
		'丹桂苑': /丹桂苑/g,
		'清真食堂': /清真食堂/g,
		'综合体': /综合体/g,
		'桃李食苑': /桃李食苑/g,
		'新竹苑': /新竹苑/g,
		'浴室': /浴室/g,
		'车队': /车队/g,
		'天猫': /天猫/g,
		'直饮水': /直饮水/g,
		'游泳馆': /游泳馆/g,
		'专家楼': /专家楼/g,
	};





	var time_lst = [];
	var _time_lst = [];
	var time_all = [];
	var cost_lst = [];

	var dic = {
		'水控': 0,
		'芝兰苑': 0,
		'玉树苑': 0,
		'丹桂苑': 0,
		'清真食堂': 0,
		'综合体': 0,
		'桃李食苑': 0,
		'新竹苑': 0,
		'浴室': 0,
		'车队': 0,
		'天猫': 0,
		'直饮水': 0,
		'游泳馆': 0,
		'专家楼': 0,
	};


	var numDic = {
		'水控': 0,
		'芝兰苑': 0,
		'玉树苑': 0,
		'丹桂苑': 0,
		'清真食堂': 0,
		'综合体': 0,
		'桃李食苑': 0,
		'新竹苑': 0,
		'浴室': 0,
		'车队': 0,
		'天猫': 0,
		'直饮水': 0,
		'游泳馆': 0,
		'专家楼': 0,
	};


	var i;
	for (i in tr) {
		var re1 = /<td class=\"text-right\"><strong class=\"price\">([\s\S]+?)<\/strong><\/td>/;
		var re2 = /[-+]*?([0-9]*\.*[0-9]+|[0-9]+)/;
		var cost = re2.exec(re1.exec(tr[i])[0])[0];
		cost = parseFloat(cost)

		var re3 = /<td class=\"time\">([\s\S]+)<p class=\"text-muted\">([\s\S]+?)<\/p><\/td>/;
		var re4 = /([0-9]+):([0-9]+)/;
		var time = re4.exec(re3.exec(tr[i])[0])[0];

		cost_lst.push(cost)
		time_all.push(time)

		for (var key in reg) {
			if (reg[key].test(tr[i]) == true) {
				dic[key] += cost
				numDic[key] += 1
			}
		}
	};

	for (var time in time_all) {
		var first = parseFloat(time_all[time].slice(0, 2)) * 100
		var second = parseFloat(time_all[time].slice(3, 5))
		// _time = first+second
		time_lst.push(first + second - 400)
	}
	for (var i = 0; i < time_lst.length; i++) {
		if (time_lst[i] < 0) {
			_time_lst.push(time_lst[i])

			time_lst.splice(i, 1);

			i--; //i需要自减，否则每次删除都会讲原数组索引发生变化
		}
	}
	for (var i = 0; i < cost_lst.length; i++) {
		if (cost_lst[i] >= 0) {
			cost_lst.splice(i, 1);
			i--; //i需要自减，否则每次删除都会讲原数组索引发生变化
		} else {
			cost_lst[i] = Math.abs(cost_lst[i]);
			cost_lst[i] = parseFloat(cost_lst[i])
		}
	}
	var eating = dic['芝兰苑'] + dic['玉树苑'] + dic['丹桂苑'] + dic['清真食堂'] + dic['综合体'] + dic['桃李食苑'] + dic['新竹苑'] + dic[
		'专家楼'];

	var drink = dic['水控'] + dic['直饮水'];
	var bathing = dic['浴室'];
	var bus = dic['车队'];
	var market = dic['天猫'];
	var swim = dic['游泳馆'];

	var dict = {
		'芝兰苑': dic['芝兰苑'],
		'玉树苑': dic['玉树苑'],
		'丹桂苑': dic['丹桂苑'],
		'清真食堂': dic['清真食堂'],
		'综合楼': dic['综合体'],
		'桃李食苑': dic['桃李食苑'],
		'新竹苑': dic['新竹苑'],
		'专家楼': dic['专家楼']
	}

	var items = Object.keys(dict).map(function(key) {
		return [key, Math.abs(dict[key])];
	});

	// Sort the array based on the second element
	items.sort(function(first, second) {
		return  second[1]-first[1];
	});

	// Create a new array with only the first 5 items
	console.log(items.slice(0,5));

	var time_early = Math.min(...time_lst)
	var time_latest
	if (_time_lst == 0) {
		time_latest = Math.max(...time_lst)
	} else {
		time_latest = Math.max(..._time_lst) + 400;
	}
	time_latest = (parseInt(time_latest / 100)).toString() + ':' + (time_latest % 100).toString()
	time_early = (parseInt(time_early / 100) + 4).toString() + ':' + (time_early % 100).toString()

	var bill = {
		'eating': Math.abs(eating),
		'drink': Math.abs(drink),
		'bathing': Math.abs(bathing),
		'bus': Math.abs(bus),
		'market': Math.abs(market),
		'swim': Math.abs(swim),
		// 'time': time_all,
		'cost_all': Math.abs(eating + drink + bathing + bus + market + swim),
		'cost_min': Math.min(...cost_lst),
		'cost_max': Math.max(...cost_lst),
		'time_eraly': time_early,
		'time_latest': time_latest,
		'eat_frequently':items[0],// 消费最多的餐厅
		'numDic' : numDic, //消费次数
	};
	console.log(bill)
	console.log(dic)
	return bill;
}
