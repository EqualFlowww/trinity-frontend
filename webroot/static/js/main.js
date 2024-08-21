// javascript here

var main = () => {
	document.getElementById("eqpls-access-token").innerText = window.common.auth.accessToken;

	window.common.wsock.connect(
		`/router/websocket/cart/d6da7219-c0e5-42f4-96dc-e45ebdefb463?org=${window.common.auth.getOrg()}&token=${window.common.auth.accessToken}`,
		(data) => {
			console.log(data);
		}
	);
};

window.common.init(() => {
	window.common.auth.login(main, () => { // login failed
		console.error("login error");
	});
});
