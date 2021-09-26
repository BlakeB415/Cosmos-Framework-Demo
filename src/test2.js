//import { io } from "socket.io-client";
import 'es6-shim';

import { variable } from "cosmos";
//const socket = io("http://localhost");

async function test () {
	const magicNumber = "8.82";
	console.log(new Set([Number.parseFloat(magicNumber.get())]))
}

test()