// javascript here

function selectCart(cartId) {
	let latDom = document.getElementById("cart-lat");
	let lonDom = document.getElementById("cart-lon");

	window.common.wsock.connect(
		`/router/websocket/cart/${cartId}?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			data = JSON.parse(data);
			console.log(data);
			if (data.k == "md" && data.v.sref == "demo.device.Cart") {
				let cart = data.v;
				latDom.innerHTML = cart.location.y;
				lonDom.innerHTML = cart.location.x;
			}
		},
		(event) => {
			document.getElementById("eqpls-cart-list").remove();
		}
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
				btnDom.onclick = (event)=> {
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
	});
});
