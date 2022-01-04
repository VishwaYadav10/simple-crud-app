
export function callGetService(_url, _successFnc, _errFnc) {
    fetch(_url, {
        "method": "GET",
    })
        .then(_response => _response.json())
        .then(_response => { _successFnc(_response) })
        .catch(_err => { _errFnc(_err) });
}

export function callPostService(_url, _body, _successFnc, _errFnc) {
    console.log(_body);
    fetch(_url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: _body
    })
        .then(_response => _response.json())
        .then(_response => { _successFnc(_response) })
        .catch(_err => { _errFnc(_err) });
}