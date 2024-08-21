// javascript here

function selectCart(cartId) {
	window.common.wsock.connect(
		`/router/websocket/cart/${cartId}?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			console.log(data);
		}
	);
};

function main() {
	document.getElementById("eqpls-access-token").innerText = window.common.auth.accessToken;

	window.common.rest.get('/uerp/v1/demo/device/cart?$archive&$size=100', (carts) => {
		console.log(carts);
		if (carts && carts.length > 0) {
			let cartListDom = document.getElementById("eqpls-cart-list");
			carts.forEach((cart) => {
				let btnDom = document.createElement('button');
				btn.setAttribute("id", cart.id);
				btn.setAttribute("value", cart.name);
				btn.onclick = (event)=> {
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
