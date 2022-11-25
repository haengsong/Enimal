import axios from 'axios'

const API_URL = "http://j7c106.p.ssafy.io:9000"

export async function uploadData(type, prompt, name, owner) {

	const url = await axios({
		method: "POST",
		url: `${API_URL}/create`,
		data: {type, prompt},
		}).catch(() => {
			alert('오류가 발생했습니다. 다시 시도해주세요')
		})

	const metadata = await axios.get(`${API_URL}/down`, {
		params: {url: url.data, type, prompt, name, owner}
	}).catch(() => {
		alert('오류가 발생했습니다. 다시 시도해주세요')
	})

	return metadata	
}

export default uploadData;
