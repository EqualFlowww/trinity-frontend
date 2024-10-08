// javascript here

var prevLat = null;
var prevLon = null;

function gpsWorker(socket, position) {
	document.getElementById("eqpls-cart-msg").innerHTML = `GPS 읽기: ${new Date()}`;

	let lat = position.coords.latitude;
	let lon = position.coords.longitude;
	let acc = Number((position.coords.accuracy).toFixed(2));
	let spd = Number(position.coords.speed).toFixed(2);

	if (prevLat != lat || prevLon != lon) {
		prevLat = lat;
		prevLon = lon;
		document.getElementById("eqpls-cart-lat").innerHTML = lat;
		document.getElementById("eqpls-cart-lon").innerHTML = lon;
		document.getElementById("eqpls-cart-acc").innerHTML = acc;
		document.getElementById("eqpls-cart-spd").innerHTML = spd;
		console.log(`Lat: ${lat} / Lon: ${lon} / Acc: ${acc}M / Spd: ${spd}M/s`);
		try {
			socket.send(JSON.stringify({
				k: 'gps',
				v: [lat, lon]
			}));
		} catch (e) {
			console.error("GPS 전송 에러", e);
		}
	}
};

function selectCart(cartId) {
	window.common.wsock.connect(
		`/router/websocket/cart/${cartId}?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			data = JSON.parse(data);
			console.log(data);
			if (data.k == "md") {
				if (data.v.sref == "demo.device.Cart") {
					let cart = data.v;
					document.getElementById("eqpls-cart-lat").innerHTML = cart.location.y;
					document.getElementById("eqpls-cart-lon").innerHTML = cart.location.x;
				} else if (data.v.sref == "demo.chat.Message") {
					let message = data.v;
					let fromDom = document.createElement("span");
					fromDom.innerHTML = `${message.username} 에게서 온 메세지: `;
					let textDom = document.createElement("span");
					textDom.innerHTML = message.content;
					let msgDom = document.getElementById("eqpls-message");
					msgDom.innerHTML = "";
					msgDom.appendChild(fromDom);
					msgDom.appendChild(textDom);
				}
			}
		},
		(socket) => {
			document.getElementById("eqpls-cart-list").remove();
			navigator.geolocation.watchPosition((position) => {
				gpsWorker(socket, position);
			}, (err) => {
				document.getElementById("eqpls-cart-msg").innerHTML = `GPS ERROR 발생!!, 작업 중단!! ${err}`;
				console.error(err);
			}, {
				maximumAge: Infinity,
				//maximumAge: 0,
				enableHighAccuracy: true
			});
		},
		null, null, true
	);
};

function main() {
	document.getElementById("eqpls-username").innerText = window.common.auth.username;
	document.getElementById("eqpls-access-token").innerText = window.common.auth.accessToken;

	window.common.rest.get('/uerp/v1/demo/device/cart?$archive&$size=100&$orderby=name&$order=asc', (carts) => {
		console.log(carts);
		if (carts && carts.length > 0) {
			let cartListDom = document.getElementById("eqpls-cart-list");
			carts.forEach((cart) => {
				let btnDom = document.createElement('button');
				btnDom.setAttribute("id", cart.id);
				btnDom.innerHTML = cart.name;
				btnDom.onclick = (event) => {
					event.stopPropagation();
					selectCart(cart.id);
				};
				let cartDom = document.createElement('li');
				cartDom.appendChild(btnDom);
				cartListDom.appendChild(cartDom);
			});
		}
	});
};

window.common.init(() => {
	window.common.auth.login(main, () => { // login failed
		console.error("login error");
	}, "/webroot/index.html");
});
