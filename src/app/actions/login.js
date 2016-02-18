import fetch from 'isomorphic-fetch';
import { setCookie, getCookieValue } from '../lib/cookie';

export const LOGIN = 'LOGIN';
export const CHANGE_USERNAME = 'CHANGE_USERNAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export function login() {
    return (dispatch, getState) => {
    	const { username, password } = getState().login.toJS();

		return fetch(`http://192.168.1.51:18671/login/${ username }/post`, {
		  	method: 'post',
		  	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		  	body: `password=${ password }&x-dms-request-id=${ new Date().getTime() }`
		})
		.then(res => res.json())
		.then(json => {	
			const { uuid, sid, userName, roleCode } = json.content;

			setCookie('dmsUserEmail', username);
			setCookie('dmsPassWord', password);	
			setCookie('dmsUuid', uuid);
			setCookie('dmsSid', sid);
			setCookie('dmsUserName', userName);
			setCookie('dmsRoleCode', roleCode);

			location.hash = '#app/index';
		});
	};
}

export function userNameChange(username) {
	return {
		type: CHANGE_USERNAME,
		username: username
	};
}

export function passWordChange(password) {
	return {
		type: CHANGE_PASSWORD,
		password: password
	};
}