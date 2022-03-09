module.exports = {
    updateValues(request, response) {
        console.log(request.io)
        request.io.emit('updateValues', request.body);
        return response.json(request.body);
    }
};