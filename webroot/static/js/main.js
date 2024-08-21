// javascript here

function gpsWorker(socket) {
	navigator.geolocation.getCurrentPosition((position) => {
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		document.getElementById("eqpls-cart-lat").innerHTML = lat;
		document.getElementById("eqpls-cart-lon").innerHTML = lon;
		console.log(`Lat: ${lat} / Lon: ${lon}`);
		try {
			socket.send(JSON.stringify({
				k: 'gps',
				v: [lat, lon]
			}));
		} catch (e) {
			console.error("GPS 전송 에러", e);
		}

		setTimeout(() => { gpsWorker(socket); }, 2000);
	}, (err) => {
		document.getElementById("eqpls-cart-msg").innerHTML = "GPS ERROR 발생!!, 작업 중단!!";
		console.error(err);
	});
};

function selectCart(cartId) {
	window.common.wsock.connect(
		`/router/websocket/cart/${cartId}?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			data = JSON.parse(data);
			console.log(data);
			if (data.k == "md" && data.v.sref == "demo.device.Cart") {
				let cart = data.v;
				document.getElementById("eqpls-cart-lat").innerHTML = cart.location.y;
				document.getElementById("eqpls-cart-lon").innerHTML = cart.location.x;
			}
		},
		(socket) => {
			document.getElementById("eqpls-cart-list").remove();
			gpsWorker(socket);
		},
		null, null, true
	);
};

function main() {
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
